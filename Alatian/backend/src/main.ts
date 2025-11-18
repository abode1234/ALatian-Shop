import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(cookieParser());
  
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3001',
    credentials: true,
  });
  
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(`📚 API Documentation:`);
  console.log(`   - Products: /products`);
  console.log(`   - Cart: /cart`);
  console.log(`   - Build PC: /build-pc`);
  console.log(`   - Orders: /orders`);
  console.log(`   - Reviews: /reviews`);
  console.log(`   - Wishlist: /wishlist`);
  console.log(`   - Admin: /admin`);
}
bootstrap();
