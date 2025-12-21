'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronLeft, Star, ShoppingCart } from 'lucide-react';
import { api, type Product } from '@/lib/api';

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.getProducts({ limit: 8 });
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  const categories = [
    { name: 'المعالجات', slug: 'CPU', icon: '🖥️' },
    { name: 'كروت الشاشة', slug: 'GPU', icon: '🎮' },
    { name: 'اللوحات الأم', slug: 'MOTHERBOARD', icon: '⚡' },
    { name: 'الرامات', slug: 'RAM', icon: '💾' },
    { name: 'التخزين', slug: 'STORAGE', icon: '💿' },
    { name: 'مزودات الطاقة', slug: 'PSU', icon: '🔌' },
    { name: 'الكيسات', slug: 'CASE', icon: '📦' },
    { name: 'التبريد', slug: 'COOLING', icon: '❄️' },
  ];

  return (
    <div className="min-h-screen">
      {/* Promotional Banners */}
      <section className="py-6 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Large Banner - Right Side */}
            <div className="lg:col-span-2 lg:order-2">
              <div className="relative h-[300px] sm:h-[400px] lg:h-full lg:min-h-[500px] rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src="https://placehold.co/800x500/1a1a1a/orange?text=Banner+1"
                  alt="تدور تجميعات احترافية اقساط"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 right-0 p-4 sm:p-6 md:p-8 text-white w-full">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
                    تدور تجميعات احترافية أقساط؟
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-2">متوفرة في امازون بالتقسيط تبي وثمارا</p>
                  <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-4">
                    <div className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded">
                      <span className="text-black font-bold text-sm md:text-base">Amazon</span>
                    </div>
                    <div className="bg-orange-500 px-3 py-1.5 md:px-4 md:py-2 rounded">
                      <span className="text-white font-bold text-sm md:text-base">TTX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Small Banners - Left Side Stacked */}
            <div className="lg:col-span-1 lg:order-1 flex flex-col gap-4 md:gap-6">
              {/* Top Small Banner */}
              <div className="relative h-[200px] sm:h-[220px] lg:h-[247px] rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src="https://placehold.co/400x247/1a1a1a/orange?text=Banner+2"
                  alt="التجميعات الاحترافية"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 right-0 p-4 md:p-6 text-white w-full">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2">التجميعات الاحترافية</h3>
                  <p className="text-xs sm:text-sm">تدور عليه راح تلقاه عندنا بأفضل سعر</p>
                </div>
              </div>

              {/* Bottom Small Banner */}
              <div className="relative h-[200px] sm:h-[220px] lg:h-[247px] rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src="https://placehold.co/400x247/1a1a1a/orange?text=Banner+3"
                  alt="اي كرت شاشة"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 right-0 p-4 md:p-6 text-white w-full">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2">اي كرت شاشة</h3>
                  <p className="text-xs sm:text-sm">تدور عليه راح تلقاه عندنا بأفضل سعر</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Strip */}
      <section className="py-12 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">التصنيفات</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="group p-6 bg-background rounded-lg border border-border hover:border-primary transition-all hover-scale text-center"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">المنتجات المميزة</h2>
            <Link
              href="/products"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <span>عرض الكل</span>
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-background border border-border rounded-lg p-4 animate-pulse">
                  <div className="bg-gray-700 h-48 rounded-lg mb-4"></div>
                  <div className="bg-gray-700 h-4 rounded mb-2"></div>
                  <div className="bg-gray-700 h-4 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-background rounded-lg border border-border hover-scale">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">شحن مجاني</h3>
              <p className="text-gray-400">لجميع مناطق المملكة</p>
            </div>
            <div className="text-center p-8 bg-background rounded-lg border border-border hover-scale">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">ضمان شامل</h3>
              <p className="text-gray-400">على جميع المنتجات</p>
            </div>
            <div className="text-center p-8 bg-background rounded-lg border border-border hover-scale">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">دعم فني</h3>
              <p className="text-gray-400">على مدار الساعة</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary transition-all hover-scale">
        <div className="relative aspect-square bg-gray-800">
          {product.images && product.images[0] && (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          )}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className="text-white font-bold">غير متوفر</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <span className="text-sm mr-1">{product.avgRating.toFixed(1)}</span>
            </div>
            <span className="text-sm text-gray-400">({product.totalReviews})</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary">
                {product.price.toLocaleString('ar-SA')} ر.س
              </span>
            </div>
            <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
