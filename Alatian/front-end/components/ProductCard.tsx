'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface Product {
  id: string
  name: string
  nameAr: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  brand?: {
    name: string
    logo?: string
  }
  discount?: number
  inStock?: boolean
  isBuild?: boolean
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: string) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discountPercentage = product.originalPrice && product.price < product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
      <Link href={`/productdetails?id=${product.id}`} className="block">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-900 overflow-hidden">
          <Image
            src={product.image}
            alt={product.nameAr}
            fill
            className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          
          {/* Discount Banner */}
          {discountPercentage > 0 && (
            <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-bold z-10">
              {discountPercentage}% خصم
            </div>
          )}

          {/* Brand Logo */}
          {product.brand?.logo && (
            <div className="absolute top-3 left-3 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg p-2">
              <Image
                src={product.brand.logo}
                alt={product.brand.name}
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-200 mb-3 line-clamp-2 min-h-[2.5rem] group-hover:text-orange-400 transition-colors">
            {product.nameAr}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <p className="text-lg font-bold text-orange-400">
              {product.price.toLocaleString()} د.ع
            </p>
            {product.originalPrice && product.originalPrice > product.price && (
              <p className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString()} د.ع
              </p>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <Button
          onClick={(e) => {
            e.preventDefault()
            onAddToCart?.(product.id)
          }}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          disabled={product.inStock === false}
        >
          <ShoppingCart className="h-4 w-4 ml-2" />
          {product.inStock === false ? 'غير متوفر' : 'أضف للسلة'}
        </Button>
      </div>
    </div>
  )
}
