'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Headphones
} from 'lucide-react';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-16 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Headphones className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الدعم الفني</h1>
            <p className="text-lg opacity-90">
              نحن هنا لمساعدتك! تواصل معنا في أي وقت وسنكون سعداء بالإجابة على استفساراتك
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Card */}
            <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
              <h2 className="text-2xl font-bold mb-6 text-gradient">معلومات التواصل</h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">الموقع</h3>
                    <p className="text-sm text-muted-foreground">بغداد، شارع صناعه، العراق</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">الهاتف</h3>
                    <a href="tel:+9647700000000" className="text-sm text-primary hover:underline">
                      +964 770 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                    <a href="mailto:info@alatian.com" className="text-sm text-primary hover:underline">
                      info@alatian.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">واتساب</h3>
                    <a href="https://wa.me/9647700000000" className="text-sm text-primary hover:underline">
                      +964 770 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ساعات العمل</h3>
                    <p className="text-sm text-muted-foreground">السبت - الخميس: 9 ص - 10 م</p>
                    <p className="text-sm text-muted-foreground">الجمعة: 2 ظهراً - 10 م</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="font-semibold mb-4">تابعنا على</h3>
                <div className="flex space-x-3 space-x-reverse">
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                  >
                    <Facebook className="h-5 w-5 text-primary group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                  >
                    <Instagram className="h-5 w-5 text-primary group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                  >
                    <Twitter className="h-5 w-5 text-primary group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
              <h2 className="text-2xl font-bold mb-6 text-gradient">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      الاسم الكامل <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      رقم الهاتف <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="07XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    البريد الإلكتروني <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    الموضوع <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="order">استفسار عن طلب</option>
                    <option value="product">استفسار عن منتج</option>
                    <option value="technical">دعم فني</option>
                    <option value="complaint">شكوى</option>
                    <option value="suggestion">اقتراح</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    الرسالة <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all glow-button flex items-center justify-center space-x-2 space-x-reverse group"
                >
                  <span>إرسال الرسالة</span>
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="bg-card rounded-xl shadow-lg p-8 border border-border mt-8">
              <h2 className="text-2xl font-bold mb-6 text-gradient">الأسئلة الشائعة</h2>
              <div className="space-y-6">
                <div className="pb-6 border-b border-border">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full ml-3"></span>
                    كيف يمكنني تتبع طلبي؟
                  </h3>
                  <p className="text-muted-foreground mr-5">
                    يمكنك تتبع طلبك من خلال صفحة "طلباتي" في حسابك. ستحصل أيضاً على رقم تتبع عبر الرسائل القصيرة.
                  </p>
                </div>

                <div className="pb-6 border-b border-border">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full ml-3"></span>
                    ما هي طرق الدفع المتاحة؟
                  </h3>
                  <p className="text-muted-foreground mr-5">
                    نقبل الدفع عند الاستلام، البطاقات الائتمانية، والتحويل البنكي المباشر.
                  </p>
                </div>

                <div className="pb-6 border-b border-border">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full ml-3"></span>
                    هل يوجد ضمان على المنتجات؟
                  </h3>
                  <p className="text-muted-foreground mr-5">
                    جميع منتجاتنا مشمولة بالضمان حسب سياسة الشركة المصنعة. الضمان يتراوح من سنة إلى 3 سنوات حسب المنتج.
                  </p>
                </div>

                <div className="pb-6 border-b border-border">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full ml-3"></span>
                    كم يستغرق التوصيل؟
                  </h3>
                  <p className="text-muted-foreground mr-5">
                    التوصيل داخل بغداد يستغرق 1-2 يوم عمل. للمحافظات الأخرى 3-5 أيام عمل.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full ml-3"></span>
                    هل يمكنني استرجاع أو استبدال المنتج؟
                  </h3>
                  <p className="text-muted-foreground mr-5">
                    نعم، يمكنك الاسترجاع أو الاستبدال خلال 7 أيام من تاريخ الاستلام، شرط أن يكون المنتج بحالته الأصلية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
