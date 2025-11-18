import { IsString, IsObject, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsObject()
  @IsNotEmpty()
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
  };
}

export class UpdateOrderStatusDto {
  @IsString()
  @IsNotEmpty()
  status: string;

  @IsOptional()
  @IsString()
  trackingNumber?: string;
}

