'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Home, Package, Headphones, Cpu } from 'lucide-react';
import ThemeToggle from './theme-toggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'المعالجات', slug: 'CPU' },
    { name: 'كروت الشاشة', slug: 'GPU' },
    { name: 'اللوحات الأم', slug: 'MOTHERBOARD' },
    { name: 'الرامات', slug: 'RAM' },
    { name: 'التخزين', slug: 'STORAGE' },
    { name: 'مزودات الطاقة', slug: 'PSU' },
    { name: 'الكيسات', slug: 'CASE' },
    { name: 'التبريد', slug: 'COOLING' },
    { name: 'الإكسسوارات', slug: 'ACCESSORY' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Announcement Bar */}
      <div className="bg-primary text-white py-2 text-center text-sm">
        <p>شحن مجاني لجميع مناطق بغداد 🎉</p>
      </div>

      {/* Main Navbar */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <h1 className="text-2xl font-bold text-gradient">Alatian</h1>
          </Link>

          {/* Desktop Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="تبحث عن منتج معين؟"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <ThemeToggle />
            <Link
              href="/cart"
              className="relative p-2 hover:bg-accent rounded-lg transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              href="/account"
              className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors glow-button"
            >
              <User className="h-5 w-5" />
              <span>تسجيل الدخول</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-around py-3 border-t border-border/40">
          <Link
            href="/"
            className="flex items-center space-x-2 space-x-reverse px-4 py-2 hover:text-primary transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>الرئيسية</span>
          </Link>

          <Link
            href="/build-pc"
            className="flex items-center space-x-2 space-x-reverse px-4 py-2 hover:text-primary transition-colors"
          >
            <Cpu className="h-5 w-5" />
            <span>بناء الكمبيوتر</span>
          </Link>

          <div className="group relative">
            <button className="flex items-center space-x-2 space-x-reverse px-4 py-2 hover:text-primary transition-colors">
              <Package className="h-5 w-5" />
              <span>المنتجات</span>
            </button>
            <div className="absolute top-full right-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-4 grid gap-2">
                <Link
                  href="/products"
                  className="px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                >
                  جميع المنتجات
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/products?category=${category.slug}`}
                    className="px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/support"
            className="flex items-center space-x-2 space-x-reverse px-4 py-2 hover:text-primary transition-colors"
          >
            <Headphones className="h-5 w-5" />
            <span>تواصل معنا</span>
          </Link>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="lg:hidden py-3 border-t border-border/40">
          <div className="relative">
            <input
              type="search"
              placeholder="تبحث عن منتج معين؟"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </form>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              className="flex items-center space-x-2 space-x-reverse px-4 py-3 hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>الرئيسية</span>
            </Link>

            <Link
              href="/products"
              className="flex items-center space-x-2 space-x-reverse px-4 py-3 hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Package className="h-5 w-5" />
              <span>تجميعات الألعاب</span>
            </Link>

            <details className="group">
              <summary className="flex items-center space-x-2 space-x-reverse px-4 py-3 hover:bg-accent rounded-lg transition-colors cursor-pointer">
                <Package className="h-5 w-5" />
                <span>المنتجات</span>
              </summary>
              <div className="pr-8 space-y-2 mt-2">
                <Link
                  href="/products"
                  className="block px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  جميع المنتجات
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/products?category=${category.slug}`}
                    className="block px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href="/support"
              className="flex items-center space-x-2 space-x-reverse px-4 py-3 hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Headphones className="h-5 w-5" />
              <span>تواصل معنا</span>
            </Link>

            <div className="border-t border-border/40 pt-4 mt-4 space-y-2">
              <Link
                href="/cart"
                className="flex items-center space-x-2 space-x-reverse px-4 py-3 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>سلة التسوق</span>
              </Link>
              <Link
                href="/account"
                className="flex items-center justify-center space-x-2 space-x-reverse px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>تسجيل الدخول</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
