import { notFound } from "next/navigation";
import productsData from "@/data/products.json";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ar-IQ", {
      style: "decimal",
    }).format(price);
  };

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.nameAr}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.isNew && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                    جديد
                  </span>
                )}
                {product.badge && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.nameAr}
              </h1>
              <p className="text-gray-600 mb-4">{product.specs}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-gray-500">الماركة:</span>
                <Link
                  href={`/brands?brand=${product.brand}`}
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  {product.brand}
                </Link>
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-purple-700">
                  {formatPrice(product.price)} د.ع
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.originalPrice)} د.ع
                  </span>
                )}
              </div>
              {product.originalPrice && product.originalPrice > product.price && (
                <p className="text-green-600 font-semibold mt-2">
                  وفرت {formatPrice(product.originalPrice - product.price)} د.ع
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Link
                href="/cart"
                className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2 font-semibold"
              >
                <ShoppingCart className="w-5 h-5" />
                أضف إلى السلة
              </Link>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">المواصفات</h2>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-semibold">الفئة:</span> {product.category}
                </li>
                <li>
                  <span className="font-semibold">الماركة:</span> {product.brand}
                </li>
                <li>
                  <span className="font-semibold">المواصفات:</span> {product.specs}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

