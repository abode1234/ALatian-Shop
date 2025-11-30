import Link from 'next/link'
import { Search, Heart, ShoppingCart, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-gray-200">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Left side - Login/Register */}
          <div className="flex items-center gap-4 text-sm">
            <Link href="/account" className="text-purple-600 hover:text-purple-700 transition-colors">
              تسجيل الدخول
            </Link>
          </div>

          {/* Center - Welcome text */}
          <div className="text-sm text-gray-600">
            سجل دخولك لتملك كل جديد
          </div>

          {/* Right side - Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-gray-900">الاتيان</div>
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Left side - Action icons */}
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-purple-600/50 hover:text-white gap-2"
              >
                <Search className="h-4 w-4" />
                <span className="text-sm">البحث</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-purple-600/50 hover:text-white gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                <span className="text-sm">السلة</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-purple-600/50 hover:text-white gap-2"
              >
                <Heart className="h-4 w-4" />
                <span className="text-sm">المفضلة</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-purple-600/50 hover:text-white gap-2"
              >
                <Package className="h-4 w-4" />
                <span className="text-sm">الطلبات</span>
              </Button>
            </div>

            {/* Right side - Navigation menu */}
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-purple-200 transition-colors font-medium">
                الرئيسية
              </Link>
              <Link href="/categories" className="hover:text-purple-200 transition-colors font-medium">
                الفئات
              </Link>
              <Link href="/brands" className="hover:text-purple-200 transition-colors font-medium">
                المعاملات التجارية
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
