import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT Air Jernih Indonesia | Spesialis Maintenance Kolam Renang Profesional",
  description: "Layanan maintenance & perawatan kolam renang profesional untuk rumah pribadi, developer, dan kontraktor. Dapatkan air jernih, mesin awet, dan garansi layanan 24/7.",
  keywords: ["maintenance kolam renang", "perawatan kolam renang", "jasa pembersih kolam renang", "teknisi kolam renang", "water treatment kolam", "pompa kolam renang", "filter kolam renang", "PT Air Jernih Indonesia", "Jakarta", "Bandung"],
  authors: [{ name: "PT Air Jernih Indonesia" }],
  creator: "PT Air Jernih Indonesia",
  publisher: "PT Air Jernih Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://airjernihindonesia.com"), // Update with real domain later
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PT Air Jernih Indonesia | Spesialis Maintenance Kolam Renang",
    description: "Layanan maintenance kolam renang profesional terpercaya sejak 2005. Kami melayani rumah pribadi dan proyek komersial.",
    url: "https://airjernihindonesia.com",
    siteName: "Air Jernih Indonesia",
    images: [
      {
        url: "/images/brand/logo.webp",
        width: 800,
        height: 800,
        alt: "PT Air Jernih Indonesia Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Air Jernih Indonesia | Spesialis Maintenance Kolam Renang",
    description: "Layanan maintenance kolam renang profesional terpercaya sejak 2005.",
    images: ["/images/brand/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} h-full bg-white text-gray-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
