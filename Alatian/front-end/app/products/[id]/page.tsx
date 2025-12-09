'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ShoppingCart, Heart, Star, Zap, Package, Shield, Truck } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  images: string[];
  category: string;
  stock: number;
  specifications: Record<string, any>;
  powerConsumption?: number;
  avgRating: number;
  totalReviews: number;
};

export default function ProductDetailsPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  const handleAddToCart = () => {
    alert(`*E* %6'A) ${quantity} EF ${product?.name} %DI 'D3D)`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">'DEF*, :J1 EH,H/</h1>
          <p className="text-muted-foreground">'DEF*, 'D0J *(-+ 9FG :J1 E*HA1</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-IQ', {
      style: 'currency',
      currency: 'IQD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const categoryNames: Record<string, string> = {
    CPU: 'E9'D,',
    GPU: 'C1* 4'4)',
    RAM: '1'E',
    MOTHERBOARD: 'DH-) #E',
    STORAGE: '*.2JF',
    PSU: 'E2H/ 7'B)',
    CASE: 'CJ3',
    COOLING: '*(1J/',
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-muted-foreground">
          <span>'D1&J3J)</span>
          <span className="mx-2">/</span>
          <span>'DEF*,'*</span>
          <span className="mx-2">/</span>
          <span>{categoryNames[product.category]}</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-card rounded-xl overflow-hidden border border-border">
              <Image
                src={product.images[selectedImage] || '/placeholder.png'}
                alt={product.name}
                fill
                className="object-contain p-8"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square bg-card rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {categoryNames[product.category]}
                </span>
                <span className="text-sm text-muted-foreground">{product.brand}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.avgRating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.totalReviews} *BJJE)
                </span>
              </div>

              <p className="text-4xl font-bold text-primary mb-6">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border">
              <Package className="h-5 w-5 text-primary" />
              <span className="font-medium">
                {product.stock > 0 ? (
                  <span className="text-green-500">E*HA1 AJ 'DE.2HF ({product.stock} B79))</span>
                ) : (
                  <span className="text-destructive">:J1 E*HA1</span>
                )}
              </span>
            </div>

            {/* Power Consumption */}
            {product.powerConsumption && (
              <div className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium">'3*GD'C 'D7'B): {product.powerConsumption}W</span>
              </div>
            )}

            {/* Description */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="font-bold text-lg mb-3">'DH5A</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-medium">'DCEJ):</label>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-accent transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-border">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-2 hover:bg-accent transition-colors"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all glow-button disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>#6A %DI 'D3D)</span>
                </button>
                <button className="px-6 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all flex items-center justify-center">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium text-sm">6E'F</div>
                  <div className="text-xs text-muted-foreground">-3( 'D41C) 'DE5F9)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Truck className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium text-sm">*H5JD 31J9</div>
                  <div className="text-xs text-muted-foreground">1-2 JHE 9ED</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Package className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium text-sm">%1,'9 E,'FJ</div>
                  <div className="text-xs text-muted-foreground">.D'D 7 #J'E</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-card rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">'DEH'5A'* 'D*BFJ)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center p-4 bg-background rounded-lg border border-border"
              >
                <span className="font-medium capitalize">{key}</span>
                <span className="text-muted-foreground">{String(value)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
