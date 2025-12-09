import type { Metadata } from "next";
import { Almarai, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const almarai = Almarai({
  weight: ['300', '400', '700', '800'],
  subsets: ['arabic'],
  variable: '--font-almarai',
  display: 'swap',
});

const tajawal = Tajawal({
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  subsets: ['arabic'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Alatian | متجر تجميعات الكمبيوتر وقطع الألعاب",
  description: "متجر عراقي متخصص في تجميعات الكمبيوتر وقطع الألعاب بأفضل الأسعار والجودة العالية",
  keywords: ["كمبيوتر", "العاب", "تجميعات", "معالج", "كرت شاشة", "رام", "العراق", "بغداد"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${almarai.variable} ${tajawal.variable}`} suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col ${almarai.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
