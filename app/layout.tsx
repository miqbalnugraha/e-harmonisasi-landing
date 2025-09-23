import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/sections/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  authors: [
    {
      name: "M IQBAL NUGRAHA",
      url: "https://github.com/miqbalnugraha",
      email: "iqbalturmudzi@gmail.com",
    },
  ],
  title: "e-Harmonisasi",
  description:
    "e-Harmonisasi adalah aplikasi digital resmi Direktorat Jenderal Peraturan Perundang-undangan yang memudahkan proses harmonisasi, partisipasi publik, dan transparansi peraturan.",
  keywords: [
    "e-Harmonisasi",
    "e-Harmon",
    "Harmon",
    "DJPP",
    "Peraturan",
    "Harmonisasi",
    "Kemenkum",
    "Kemenkumham",
    "Regulasi Digital",
    "Hukum",
    "Transparansi",
    "Partisipasi Publik",
  ],
  openGraph: {
    type: "website",
    url: "https://e-harmonisasi.peraturan.go.id/",
    title: "e-Harmonisasi",
    description:
      "e-Harmonisasi adalah aplikasi digital resmi Direktorat Jenderal Peraturan Perundang-undangan yang memudahkan proses harmonisasi, partisipasi publik, dan transparansi peraturan.",
    images: [
      {
        url: "https://e-harmonisasi.peraturan.go.id/images/logo/e-harmonisasi.png",
        width: 1200,
        height: 630,
        alt: "e-Harmonisasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://e-harmonisasi.peraturan.go.id/",
    title: "e-Harmonisasi",
    description:
      "e-Harmonisasi adalah aplikasi digital resmi Direktorat Jenderal Peraturan Perundang-undangan yang memudahkan proses harmonisasi, partisipasi publik, dan transparansi peraturan.",
    images: [
      "https://e-harmonisasi.peraturan.go.id/images/logo/e-harmonisasi.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="container w-full py-20 md:py-32">{children}</div>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
