import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { EmptyState } from '@/components/empty-state'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/data/products'

export default function SearchPage() {
  const hasResults = false // Change to true to show products

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {!hasResults ? (
          <EmptyState
            title="لا توجد منتجات!"
            subtitle="قم بإعادة ضبط فلاتر البحث أو العودة للرئيسية."
            buttonText="العودة للرئيسية"
            buttonHref="/"
          />
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">نتائج البحث ({products.length})</h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 bg-white">
                <option>الأحدث</option>
                <option>السعر: من الأقل للأعلى</option>
                <option>السعر: من الأعلى للأقل</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
