import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Menggunakan Inter font agar senada dengan desain minimalis
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Title yang muncul di tab browser
  title: {
    default: "Rifki Hafidl | Fullstack Developer",
    template: "%s | Rifki Hafidl"
  },
  description: "Software Developer spesialis PHP & Flutter dengan fokus pada solusi digital yang skalabel dan inovasi MLOps.",
  keywords: [
    "Rifki Hafidl", 
    "Fullstack Developer", 
    "PHP Developer", 
    "Flutter Developer", 
    "Tegal", 
    "Software Engineer Indonesia",
    "MLOps Engineer"
  ],
  authors: [{ name: "Rifki Hafidl" }],
  creator: "Rifki Hafidl",
  
  // Tampilan saat link dibagikan (WhatsApp, LinkedIn, FB)
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rifki-hafidl.vercel.app", // Sesuaikan jika nanti sudah dapat domain Vercel
    title: "Rifki Hafidl | Fullstack Developer",
    description: "Membangun aplikasi Web & Mobile berkualitas tinggi. Lihat portofolio dan statistik koding saya.",
    siteName: "Rifki Hafidl Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Simpan gambar preview di folder public (ukuran ideal 1200x630)
        width: 1200,
        height: 630,
        alt: "Rifki Hafidl Portfolio Preview",
      },
    ],
  },

  // Tampilan khusus untuk Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Rifki Hafidl | Fullstack Developer",
    description: "Software Developer spesialis PHP & Flutter.",
    images: ["/og-image.jpg"],
  },

  // Pengaturan untuk Robot Mesin Pencari (Google)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}