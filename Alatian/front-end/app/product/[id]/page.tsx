import { notFound } from "next/navigation";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { api } from "@/lib/api";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  let product;
  try {
    product = await api.getProduct(id);
  } catch (error) {
    notFound();
  }

  if (!product) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ar-SA", {
      style: "decimal",
    }).format(price);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gray-900 rounded-lg shadow-md p-4 border border-gray-800">
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              {product.images && product.images[0] && (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.stock === 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    غير متوفر
                  </span>
                )}
                {product.stock > 0 && product.stock <= 5 && (
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                    كمية محدودة
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {product.name}
              </h1>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-gray-400">الماركة:</span>
                <Link
                  href={`/products?brand=${product.brand}`}
                  className="text-orange-400 hover:text-orange-500 font-semibold"
                >
                  {product.brand}
                </Link>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <span className="text-lg font-semibold mr-2">{product.avgRating.toFixed(1)}</span>
                </div>
                <span className="text-gray-400">({product.totalReviews} تقييم)</span>
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-800 py-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-orange-400">
                  {formatPrice(product.price)} ر.س
                </span>
              </div>
              <p className="text-gray-400 mt-2">
                الكمية المتوفرة: {product.stock}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                disabled={product.stock === 0}
                className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                {product.stock === 0 ? 'غير متوفر' : 'أضف إلى السلة'}
              </button>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition border border-gray-700">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-4">المواصفات</h2>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="font-semibold">الفئة:</span> {product.category}
                </li>
                <li>
                  <span className="font-semibold">الماركة:</span> {product.brand}
                </li>
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <li key={key}>
                        <span className="font-semibold">{key}:</span> {String(value)}
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

