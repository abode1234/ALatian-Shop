import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { EmptyState } from '@/components/empty-state'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function CartPage() {
  const hasItems = false // Change to true to show cart items

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">السلة</h1>

        {!hasItems ? (
          <EmptyState
            title="سلة التسوق فارغة!"
            subtitle="لم تقم بإضافة أي منتجات إلى سلة التسوق بعد."
            buttonText="تصفح المنتجات"
            buttonHref="/categories"
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Cart items would go here */}
            </div>
            <div>
              <Card className="border-gray-200 sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">المجموع الفرعي</span>
                      <span className="font-bold">0 د.ع</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">التوصيل</span>
                      <span className="font-bold">0 د.ع</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-lg">
                      <span className="font-bold">الإجمالي</span>
                      <span className="font-bold text-purple-700">0 د.ع</span>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-lg">
                    إتمام الطلب
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
