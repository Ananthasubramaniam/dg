import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dessert Groove | Premium Artisan Bakery & Customized Cakes",
  description: "Freshly baked artisan cakes, customized fondant cakes, cupcakes, cookies, and breads by Dessert Groove. Handcrafted with premium ingredients. Pre-order only in Pune.",
  keywords: "bakery, customized cakes, fondant cakes, artisan bread, cupcakes, cookies, dessert groove, pune, chocolate ganache, tea cakes",
  openGraph: {
    title: "Dessert Groove | Premium Artisan Bakery & Customized Cakes",
    description: "Pre-order customized cakes, cupcakes, artisan breads, and premium desserts online. Crafted with love, delivered in Pune.",
    type: "website",
    locale: "en_IN",
    url: "https://dessertgroove.in", // Placeholder domain
    siteName: "Dessert Groove",
  },
};

export const viewport: Viewport = {
  themeColor: "#2b1713",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body style={{ backgroundColor: "var(--color-cream)" }}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
