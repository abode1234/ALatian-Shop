# دليل تحويل قالب الاتيان إلى Next.js

## 📋 نظرة عامة

تم تحويل قالب HTML الخاص بمتجر **الاتيان** إلى بنية Next.js + TypeScript + Tailwind CSS مع الحفاظ على جميع النصوص والهوية البراندية للاتيان.

## 🗂️ بنية المشروع

### الملفات الرئيسية

```
app/
├── layout.tsx          # Layout الرئيسي مع metadata للاتيان
├── page.tsx            # الصفحة الرئيسية
└── globals.css         # الأنماط العامة

components/
├── layout/
│   ├── Header.tsx      # Header مع Navbar و Search
│   └── Footer.tsx      # Footer مع الروابط والتصنيفات
├── HeroSection.tsx     # قسم البانرات الإعلانية
├── CategoriesStrip.tsx # شريط التصنيفات
├── ProductCard.tsx     # بطاقة المنتج
└── ProductSection.tsx  # قسم المنتجات
```

## 🔄 م mapping من HTML إلى Components

### 1. Header (`components/layout/Header.tsx`)
**من HTML:**
- `<header>` مع announcement bar
- `<nav class="navbar">` مع logo و search و login
- Navigation menu مع روابط (الرئيسية، تجميعات الألعاب، المنتجات، تواصل معنا)

**إلى React:**
- `Header` component يحتوي على:
  - Announcement bar قابل للإغلاق
  - Logo للاتيان
  - Search bar (desktop & mobile)
  - Login button
  - Language selector
  - Navigation menu مع dropdown للمنتجات

### 2. HeroSection (`components/HeroSection.tsx`)
**من HTML:**
- `<section>` مع `<div class="advertise ad-2h-1v">`
- 3 banners إعلانية

**إلى React:**
- `HeroSection` component يعرض 3 banners في grid
- كل banner يحتوي على:
  - Image
  - Title (اختياري)
  - Description (اختياري)
  - Link

### 3. CategoriesStrip (`components/CategoriesStrip.tsx`)
**من HTML:**
- `<section class="s-category">` مع grid من category items
- 14 تصنيف (اكسسوارات، تجميعات الألعاب، المعالجات، إلخ)

**إلى React:**
- `CategoriesStrip` component يعرض grid من التصنيفات
- كل تصنيف يحتوي على:
  - Image
  - Name
  - Link إلى صفحة المنتجات

### 4. ProductCard & ProductSection
**من HTML:**
- `<div class="card3D effect3D">` للمنتجات
- Product images مع hover effects
- Price و discount banners
- Add to cart button

**إلى React:**
- `ProductCard`: بطاقة منتج واحدة
- `ProductSection`: قسم يحتوي على grid من المنتجات
- دعم:
  - Multiple images (hover effect)
  - Discount percentage
  - Brand logo
  - Stock status

### 5. Footer (`components/layout/Footer.tsx`)
**من HTML:**
- `<footer id="footer-section">` مع 3 columns:
  - Important pages
  - Product categories
  - About & Social media

**إلى React:**
- `Footer` component مع:
  - Logo الاتيان
  - Important pages links
  - Payment methods icons
  - Delivery methods icons
  - Product categories grid
  - About section
  - Social media links

## 🖼️ الصور والملفات الثابتة

### هيكل مجلد `public/`

```
public/
├── img/
│   ├── logo.png                    # Logo الاتيان
│   ├── favicon-96x96.png          # Favicon
│   ├── favicon.svg                # Favicon SVG
│   ├── apple-touch-icon.png      # Apple touch icon
│   ├── site.webmanifest           # Web manifest
│   ├── mada.png                   # Mada payment logo
│   ├── aramex.png                 # Aramex logo
│   ├── hero-1.jpg                 # Hero banner 1
│   ├── hero-2.jpg                 # Hero banner 2
│   ├── hero-3.jpg                 # Hero banner 3
│   └── categories/
│       ├── accessories.jpg
│       ├── gaming-builds.jpg
│       ├── processors.jpg
│       ├── graphics-cards.jpg
│       ├── motherboards.jpg
│       ├── ram.jpg
│       ├── storage.jpg
│       ├── cooling.jpg
│       ├── power-supplies.jpg
│       ├── cases.jpg
│       ├── m2.jpg
│       ├── fans.jpg
│       ├── monitors.jpg
│       └── mouse.jpg
```

### ملاحظات مهمة:
1. **Logo**: ضع `logo.png` في `/public/img/logo.png`
2. **Hero Images**: ضع صور البانرات في `/public/img/hero-*.jpg`
3. **Category Images**: ضع صور التصنيفات في `/public/img/categories/`
4. **Product Images**: يمكن وضعها في `/public/img/products/` أو استخدام URLs من CDN

## 🔌 ربط Backend (Supabase مثال)

### 1. إعداد Types

```typescript
// types/product.ts
export interface Product {
  id: string
  name_ar: string
  name_en?: string
  price: number
  original_price?: number
  image_url: string
  images?: string[]
  brand_id?: string
  category_id: string
  in_stock: boolean
  discount_percentage?: number
}

// types/category.ts
export interface Category {
  id: string
  name_ar: string
  name_en?: string
  image_url: string
  slug: string
}
```

### 2. Fetching Data

```typescript
// app/page.tsx
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function HomePage() {
  // Fetch products
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('featured', true)
    .limit(12)

  // Fetch categories
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('order')

  return (
    // ... your JSX
  )
}
```

### 3. Props للـ Components

جميع المكونات مصممة لتقبل البيانات عبر props:

```typescript
// Example
<HeroSection 
  banners={heroBanners} // من قاعدة البيانات
/>

<ProductSection
  title="أحدث المنتجات"
  products={products} // من Supabase
  onAddToCart={handleAddToCart}
/>
```

## 🎨 Styling

- **Tailwind CSS**: جميع الأنماط تستخدم Tailwind
- **Dark Theme**: التصميم داكن (gaming style)
- **RTL Support**: جميع المكونات تدعم RTL
- **Responsive**: تصميم متجاوب لجميع الشاشات

## ✅ التنظيف والتحسينات

### تم إزالة:
- ✅ جميع الإشارات إلى TechTroniX / TTX
- ✅ الروابط القديمة لـ techtronix.io
- ✅ أي نصوص تتعلق بالسعودية (تم استبدالها بالعراق)

### تم الحفاظ على:
- ✅ جميع نصوص الاتيان
- ✅ الهوية البراندية
- ✅ التصميم العام
- ✅ البنية والتنظيم

## 🚀 الخطوات التالية

1. **إضافة الصور**: ضع جميع الصور في `/public/img/`
2. **ربط Backend**: استبدل البيانات الثابتة بـ API calls
3. **إضافة Cart**: نفذ وظيفة السلة
4. **SEO**: أضف metadata إضافية
5. **Analytics**: أضف Google Analytics أو Vercel Analytics

## 📝 ملاحظات

- جميع المكونات TypeScript-safe
- جاهزة للربط مع Supabase أو أي backend
- متوافقة مع Next.js App Router
- تدعم Server Components و Client Components حسب الحاجة

