import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/sections/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});

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
    url: process.env.NEXT_PUBLIC_URL_EHARMON || "#",
    title: "e-Harmonisasi",
    description:
      "e-Harmonisasi adalah aplikasi digital resmi Direktorat Jenderal Peraturan Perundang-undangan yang memudahkan proses harmonisasi, partisipasi publik, dan transparansi peraturan.",
    images: [
      {
        url: process.env.NEXT_PUBLIC_URL_EHARMON
          ? process.env.NEXT_PUBLIC_URL_EHARMON +
            "/images/logo/e-harmonisasi.png"
          : "#",
        width: 1200,
        height: 630,
        alt: "e-Harmonisasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: process.env.NEXT_PUBLIC_URL_EHARMON || "#",
    title: "e-Harmonisasi",
    description:
      "e-Harmonisasi adalah aplikasi digital resmi Direktorat Jenderal Peraturan Perundang-undangan yang memudahkan proses harmonisasi, partisipasi publik, dan transparansi peraturan.",
    images: [
      process.env.NEXT_PUBLIC_URL_EHARMON
        ? process.env.NEXT_PUBLIC_URL_EHARMON + "/images/logo/e-harmonisasi.png"
        : "#",
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
        <Toaster />
      </body>
    </html>
  );
}
