import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">Alatian</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              متجر عراقي متخصص في تجميعات الكمبيوتر وقطع الألعاب بأفضل الأسعار والجودة العالية
            </p>
            <div className="flex space-x-4 space-x-reverse mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-primary transition-colors">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-primary transition-colors">
                  التصنيفات
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-gray-300 hover:text-primary transition-colors">
                  العلامات التجارية
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-primary transition-colors">
                  الدعم الفني
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">التصنيفات الرئيسية</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=CPU" className="text-gray-300 hover:text-primary transition-colors">
                  المعالجات
                </Link>
              </li>
              <li>
                <Link href="/products?category=GPU" className="text-gray-300 hover:text-primary transition-colors">
                  كروت الشاشة
                </Link>
              </li>
              <li>
                <Link href="/products?category=RAM" className="text-gray-300 hover:text-primary transition-colors">
                  الرامات
                </Link>
              </li>
              <li>
                <Link href="/products?category=MOTHERBOARD" className="text-gray-300 hover:text-primary transition-colors">
                  اللوحات الأم
                </Link>
              </li>
              <li>
                <Link href="/products?category=STORAGE" className="text-gray-300 hover:text-primary transition-colors">
                  التخزين
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  بغداد، شارع صناعه، العراق
                </span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+9647700000000" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  +964 770 000 0000
                </a>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@alatian.com" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  info@alatian.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">ساعات العمل</h5>
              <p className="text-gray-300 text-sm">
                السبت - الخميس: 9 صباحاً - 10 مساءً
              </p>
              <p className="text-gray-300 text-sm">
                الجمعة: 2 ظهراً - 10 مساءً
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Alatian. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse">
              <Link href="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">
                الشروط والأحكام
              </Link>
              <Link href="/shipping" className="text-gray-400 hover:text-primary text-sm transition-colors">
                سياسة الشحن
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
