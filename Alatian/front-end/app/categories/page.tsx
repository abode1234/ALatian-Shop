import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CategoryStrip } from '@/components/category-strip'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/data/products'

export default function CategoriesPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <CategoryStrip />

        <div className="container mx-auto px-4 py-8">
          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">جميع المنتجات</h1>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 bg-white">
              <option>الأحدث</option>
              <option>السعر: من الأقل للأعلى</option>
              <option>السعر: من الأعلى للأقل</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
