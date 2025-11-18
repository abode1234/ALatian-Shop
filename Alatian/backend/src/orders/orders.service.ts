import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { OrderStatus } from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto, UpdateOrderStatusDto } from './dto/order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateOrderDto) {
    // Get cart items
    const cartItems = await this.prisma.cartItem.findMany({
      where: { userId },
      include: { product: true },
    });

    if (cartItems.length === 0) {
      throw new BadRequestException('Cart is empty');
    }

    // Check stock availability
    for (const item of cartItems) {
      if (item.product.stock < item.quantity) {
        throw new BadRequestException(`Insufficient stock for ${item.product.name}`);
      }
    }

    // Calculate total
    const totalAmount = cartItems.reduce(
      (sum, item) => sum + Number(item.product.price) * item.quantity,
      0
    );

    // Generate order number
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Create order
    const order = await this.prisma.order.create({
      data: {
        userId,
        orderNumber,
        totalAmount,
        shippingAddress: dto.shippingAddress,
        status: OrderStatus.PENDING,
        statusHistory: [
          {
            status: OrderStatus.PENDING,
            timestamp: new Date().toISOString(),
            message: 'Order placed',
          },
        ],
        items: {
          create: cartItems.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.product.price,
          })),
        },
      },
      include: {
        items: { include: { product: true } },
      },
    });

    // Update stock
    for (const item of cartItems) {
      await this.prisma.product.update({
        where: { id: item.productId },
        data: { stock: { decrement: item.quantity } },
      });
    }

    // Clear cart
    await this.prisma.cartItem.deleteMany({ where: { userId } });

    return order;
  }

  async findAll(userId?: string) {
    const where = userId ? { userId } : {};
    return this.prisma.order.findMany({
      where,
      include: {
        items: { include: { product: true } },
        user: { select: { id: true, name: true, email: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string, userId?: string) {
    const where: any = { id };
    if (userId) where.userId = userId;

    const order = await this.prisma.order.findFirst({
      where,
      include: {
        items: { include: { product: true } },
        user: { select: { id: true, name: true, email: true } },
      },
    });

    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async updateStatus(id: string, dto: UpdateOrderStatusDto) {
    const order = await this.prisma.order.findUnique({ where: { id } });
    if (!order) throw new NotFoundException('Order not found');

    const statusHistory = [
      ...((order.statusHistory as any[]) || []),
      {
        status: dto.status,
        timestamp: new Date().toISOString(),
        message: `Order status updated to ${dto.status}`,
      },
    ];

    return this.prisma.order.update({
      where: { id },
      data: {
        status: dto.status as OrderStatus,
        trackingNumber: dto.trackingNumber,
        statusHistory,
      },
      include: {
        items: { include: { product: true } },
      },
    });
  }

  async trackOrder(orderNumber: string) {
    const order = await this.prisma.order.findUnique({
      where: { orderNumber },
      include: {
        items: { include: { product: true } },
      },
    });

    if (!order) throw new NotFoundException('Order not found');

    return {
      orderNumber: order.orderNumber,
      status: order.status,
      trackingNumber: order.trackingNumber,
      statusHistory: order.statusHistory,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
    };
  }
}

