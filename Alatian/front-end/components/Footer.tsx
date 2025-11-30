import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white mt-20 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 (RIGHT) - About Us */}
          <div className="text-right">
            <h3 className="text-lg font-bold mb-4 text-orange-400">من نحن</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              TTX TECHTRONIX هو وجهتك الأولى لجميع قطع الكمبيوتر والتجميعات الاحترافية في العراق. نوفر أفضل المنتجات بأسعار تنافسية مع خدمة عملاء متميزة.
            </p>
          </div>

          {/* Column 2 (MIDDLE) - Policies */}
          <div className="text-right">
            <h3 className="text-lg font-bold mb-4 text-orange-400">سياسات المستخدم</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  التوصيل
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  طرق الدفع
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  سياسة الاسترجاع والاستبدال
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (LEFT) - Location */}
          <div className="text-right">
            <h3 className="text-lg font-bold mb-4 text-orange-400">موقعنا</h3>
            <div className="text-gray-300 space-y-2 text-sm mb-4">
              <p>بغداد، الكرادة داخل</p>
              <p>بناية مرجان، الطابق الأول</p>
            </div>
            <div className="flex gap-3 justify-end">
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 transition-colors rounded-full p-2"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 transition-colors rounded-full p-2"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>جميع الحقوق محفوظة لـ TTX TECHTRONIX 2025 ©</p>
        </div>
      </div>
    </footer>
  )
}
