import Header from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function SupportPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">الدعم الفني</h1>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-gray-200">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>الهاتف</CardTitle>
              <CardDescription>اتصل بنا مباشرة</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">07XX XXX XXXX</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>البريد الإلكتروني</CardTitle>
              <CardDescription>راسلنا في أي وقت</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">info@alatiyan.iq</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>واتساب</CardTitle>
              <CardDescription>تواصل عبر واتساب</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">07XX XXX XXXX</p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto mt-8 border-gray-200">
          <CardHeader>
            <CardTitle>الأسئلة الشائعة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">كيف يمكنني تتبع طلبي؟</h3>
              <p className="text-gray-600">يمكنك تتبع طلبك من خلال صفحة الطلبات في حسابك.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">ما هي طرق الدفع المتاحة؟</h3>
              <p className="text-gray-600">نقبل الدفع عند الاستلام والتحويل البنكي.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">هل يوجد ضمان على المنتجات؟</h3>
              <p className="text-gray-600">جميع منتجاتنا مشمولة بالضمان حسب سياسة الشركة المصنعة.</p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
