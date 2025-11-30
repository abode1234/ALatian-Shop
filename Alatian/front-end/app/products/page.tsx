'use client'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProductCard, Product } from '@/components/ProductCard'
import { Suspense } from 'react'

// Temporary mock products - replace with API call
const mockProducts: Product[] = [
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
    name: 'AMD Ryzen 9 7950X',
    nameAr: 'معالج AMD Ryzen 9 7950X',
    price: 3499,
    originalPrice: 3999,
    image: '/amd-ryzen-processor.jpg',
    discount: 13,
    inStock: true,
    brand: {
      name: 'AMD',
    },
  },
  {
    id: '3',
    name: 'ASUS ROG Motherboard',
    nameAr: 'لوحة أم ASUS ROG',
    price: 2499,
    image: '/asus-rog-motherboard.jpg',
    inStock: true,
    brand: {
      name: 'ASUS',
    },
  },
  {
    id: '4',
    name: 'Corsair Vengeance RGB',
    nameAr: 'رام Corsair Vengeance RGB DDR5',
    price: 899,
    originalPrice: 1099,
    image: '/corsair-rgb-ram.jpg',
    discount: 18,
    inStock: true,
    brand: {
      name: 'Corsair',
    },
  },
  {
    id: '5',
    name: 'Samsung 980 PRO',
    nameAr: 'Samsung 980 PRO NVMe SSD 2TB',
    price: 1299,
    image: '/samsung-ssd-nvme.jpg',
    inStock: true,
    brand: {
      name: 'Samsung',
    },
  },
  {
    id: '6',
    name: 'Corsair RM1000x',
    nameAr: 'مزود طاقة Corsair RM1000x 1000W',
    price: 1599,
    image: '/corsair-power-supply.jpg',
    inStock: true,
    brand: {
      name: 'Corsair',
    },
  },
]

function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('c')
  const page = searchParams.get('p') || '1'
  const sort = searchParams.get('s') || '1'

  const handleAddToCart = (productId: string) => {
    console.log('Add to cart:', productId)
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            المنتجات
          </h1>
          <p className="text-gray-400">
            {categoryId ? `التصنيف: ${categoryId}` : 'جميع المنتجات'}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">عدد المنتجات:</span>
            <span className="text-white font-bold">{mockProducts.length}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-400">ترتيب حسب:</span>
            <select className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2">
              <option value="1">الأحدث</option>
              <option value="2">الأكثر مبيعاً</option>
              <option value="3">السعر: من الأقل للأعلى</option>
              <option value="4">السعر: من الأعلى للأقل</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {mockProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              السابق
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              2
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              3
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              التالي
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">جاري التحميل...</div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
