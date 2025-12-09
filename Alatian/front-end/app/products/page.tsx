'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { Filter, Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { api, type Product } from '@/lib/api';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const page = parseInt(searchParams.get('page') || '1');
  const brand = searchParams.get('brand');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const response = await api.getProducts({
          category,
          search,
          page,
          brand,
          limit: 24,
        });
        setProducts(response.data);
        setTotal(response.total);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, [category, search, page, brand]);

  const categoryNames: Record<string, string> = {
    'CPU': 'المعالجات',
    'GPU': 'كروت الشاشة',
    'RAM': 'الرامات',
    'MOTHERBOARD': 'اللوحات الأم',
    'STORAGE': 'التخزين',
    'PSU': 'مزودات الطاقة',
    'CASE': 'الكيسات',
    'COOLING': 'التبريد',
    'ACCESSORY': 'الإكسسوارات',
    'LAPTOP': 'اللابتوبات',
    'DESKTOP': 'تجميعات جاهزة',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {category ? categoryNames[category] || 'المنتجات' : search ? `نتائج البحث عن "${search}"` : 'جميع المنتجات'}
        </h1>
        <p className="text-gray-400">
          عدد النتائج: {total} منتج
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-lg hover:border-primary transition-colors"
        >
          <Filter className="h-5 w-5" />
          <span>الفلاتر</span>
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mb-6 p-6 bg-secondary-light border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-4">التصنيفات</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(categoryNames).map(([slug, name]) => (
              <Link
                key={slug}
                href={`/products?category=${slug}`}
                className={`px-4 py-2 rounded-lg border transition-colors text-center ${
                  category === slug
                    ? 'bg-primary text-white border-primary'
                    : 'bg-background border-border hover:border-primary'
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-background border border-border rounded-lg p-4 animate-pulse">
              <div className="bg-gray-700 h-48 rounded-lg mb-4"></div>
              <div className="bg-gray-700 h-4 rounded mb-2"></div>
              <div className="bg-gray-700 h-4 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-400">لا توجد منتجات</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            {page > 1 && (
              <Link
                href={`/products?${new URLSearchParams({ ...Object.fromEntries(searchParams), page: String(page - 1) }).toString()}`}
                className="px-4 py-2 bg-secondary border border-border text-white rounded-lg hover:border-primary transition-colors flex items-center gap-2"
              >
                <ChevronRight className="h-4 w-4" />
                <span>السابق</span>
              </Link>
            )}

            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              if (pageNum === 1 || pageNum === totalPages || (pageNum >= page - 2 && pageNum <= page + 2)) {
                return (
                  <Link
                    key={pageNum}
                    href={`/products?${new URLSearchParams({ ...Object.fromEntries(searchParams), page: String(pageNum) }).toString()}`}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      page === pageNum
                        ? 'bg-primary text-white'
                        : 'bg-secondary border border-border hover:border-primary'
                    }`}
                  >
                    {pageNum}
                  </Link>
                );
              } else if (pageNum === page - 3 || pageNum === page + 3) {
                return <span key={pageNum} className="px-2 py-2">...</span>;
              }
              return null;
            })}

            {page < totalPages && (
              <Link
                href={`/products?${new URLSearchParams({ ...Object.fromEntries(searchParams), page: String(page + 1) }).toString()}`}
                className="px-4 py-2 bg-secondary border border-border text-white rounded-lg hover:border-primary transition-colors flex items-center gap-2"
              >
                <span>التالي</span>
                <ChevronLeft className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      )}
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
                {Number(product.price).toLocaleString('ar-SA')} ر.س
              </span>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                // TODO: Add to cart
              }}
              className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">جاري التحميل...</div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
