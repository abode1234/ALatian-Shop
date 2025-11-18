import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddToCartDto, UpdateCartItemDto } from './dto/cart.dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async addToCart(userId: string, dto: AddToCartDto) {
    const product = await this.prisma.product.findUnique({ where: { id: dto.productId } });
    if (!product) throw new NotFoundException('Product not found');
    if (product.stock < dto.quantity) throw new BadRequestException('Insufficient stock');

    const existingCartItem = await this.prisma.cartItem.findUnique({
      where: { userId_productId: { userId, productId: dto.productId } },
    });

    if (existingCartItem) {
      const newQuantity = existingCartItem.quantity + dto.quantity;
      if (product.stock < newQuantity) throw new BadRequestException('Insufficient stock');
      return this.prisma.cartItem.update({
        where: { id: existingCartItem.id },
        data: { quantity: newQuantity },
        include: { product: true },
      });
    }

    return this.prisma.cartItem.create({
      data: { userId, productId: dto.productId, quantity: dto.quantity },
      include: { product: true },
    });
  }

  async getCart(userId: string) {
    const cartItems = await this.prisma.cartItem.findMany({
      where: { userId },
      include: { product: true },
      orderBy: { createdAt: 'desc' },
    });

    const total = cartItems.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);
    return {
      items: cartItems,
      total,
      itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    };
  }

  async updateCartItem(userId: string, cartItemId: string, dto: UpdateCartItemDto) {
    const cartItem = await this.prisma.cartItem.findFirst({
      where: { id: cartItemId, userId },
      include: { product: true },
    });
    if (!cartItem) throw new NotFoundException('Cart item not found');
    if (cartItem.product.stock < dto.quantity) throw new BadRequestException('Insufficient stock');

    return this.prisma.cartItem.update({
      where: { id: cartItemId },
      data: { quantity: dto.quantity },
      include: { product: true },
    });
  }

  async removeFromCart(userId: string, cartItemId: string) {
    const cartItem = await this.prisma.cartItem.findFirst({ where: { id: cartItemId, userId } });
    if (!cartItem) throw new NotFoundException('Cart item not found');
    await this.prisma.cartItem.delete({ where: { id: cartItemId } });
    return { message: 'Item removed from cart' };
  }

  async clearCart(userId: string) {
    await this.prisma.cartItem.deleteMany({ where: { userId } });
    return { message: 'Cart cleared' };
  }
}

