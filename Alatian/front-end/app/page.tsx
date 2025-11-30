'use client'
import Header from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/HeroSection'
import { CategoriesStrip } from '@/components/CategoriesStrip'
import { ProductSection } from '@/components/ProductSection'
import { Product } from '@/components/ProductCard'

// This will be replaced with real data from your backend
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'ROG ASTRAL GeForce RTX 5090',
    nameAr: 'ROG ASTRAL GeForce RTX 5090 DHAHAB OC Edition',
    price: 24999,
    originalPrice: 24999,
    image: '/nvidia-rtx-4090.jpg',
    inStock: true,
    brand: {
      name: 'ASUS',
    },
  },
  {
    id: '2',
    name: 'LIAN LI GA II LCD 360 ARGB',
    nameAr: 'LIAN LI GA II LCD 360 ARGB WHITE',
    price: 8999,
    originalPrice: 10999,
    image: '/gaming-pc-setup-rgb.jpg',
    discount: 18,
    inStock: true,
  },
  // Add more products as needed
]

const whiteFridayProducts: Product[] = [
  // This will be populated from your backend
  ...featuredProducts,
]

export default function HomePage() {
  const handleAddToCart = (productId: string) => {
    // TODO: Implement cart functionality
    console.log('Add to cart:', productId)
  }

  return (
    <div className="min-h-screen bg-black">
      <Header/>
      <main>
        <HeroSection />
        <CategoriesStrip />
        
        <ProductSection
          title="⚪ عــرووض الجــمعة البيضـــاء ⚪"
          products={whiteFridayProducts}
          onAddToCart={handleAddToCart}
        />
        
        <ProductSection
          title="أحدث المنتجات"
          products={featuredProducts}
          onAddToCart={handleAddToCart}
        />
        
        <ProductSection
          title="الأكثر مبيعاً"
          products={featuredProducts}
          onAddToCart={handleAddToCart}
        />
      </main>

      <Footer />
    </div>
  )
}
