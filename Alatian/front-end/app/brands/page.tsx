import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BrandCard } from '@/components/brand-card'
import { brands } from '@/data/brands'

export default function BrandsPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">جميع الماركات</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
