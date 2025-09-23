import { KonsultasiSection } from "@/components/layout/sections/konsultasi";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";

import { HeroSection } from "@/components/layout/sections/hero";
import { MainlineSection } from "@/components/layout/sections/mainline";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { DaftarKonsultasiSection } from "@/components/layout/sections/daftarKonsultasi";

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

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      {/* <FeaturesSection /> */}
      <KonsultasiSection />
      {/* <ServicesSection /> */}
      <DaftarKonsultasiSection />
      {/* <TeamSection />
      <CommunitySection /> */}
      {/* <PricingSection />
      <ContactSection />
      <FAQSection /> */}

      {/* <MainlineSection /> */}
    </>
  );
}
