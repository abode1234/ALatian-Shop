import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/Footer'
import { TopSearchBar } from '@/components/top-search-bar'
import { ProductCard } from '@/components/product-card'
import { EmptyState } from '@/components/empty-state'
import { products } from '@/data/products'
import { categories } from '@/data/categories'
import { notFound } from 'next/navigation'

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find(c => c.id === params.slug)
  
  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter(p => p.categoryId === params.slug)

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Navbar />
      <TopSearchBar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{category.nameAr}</h1>
        <p className="text-gray-500 mb-8">تطبيق فلترة: {categoryProducts.length}</p>

        {categoryProducts.length === 0 ? (
          <EmptyState
            title="لا توجد منتجات."
            subtitle="لا توجد منتجات متاحة في هذه الفئة حالياً"
          />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
