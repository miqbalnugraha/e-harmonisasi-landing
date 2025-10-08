import { Separator } from "@/components/ui/separator";
import DiscordIcon from "@/components/icons/discord-icon";
import { Building2, Clock, Mail, Phone, Scale } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <>
      <footer
        id="footer"
        className="container relative pt-24 pb-16 sm:pb-24 sm:pt-32 overflow-visible"
      >
        <div className="rounded-2xl border bg-muted/30 backdrop-blur-sm p-10">
          {/* Top grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Logo + Info */}
            <div className="col-span-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <Image
                  src="/logo-kemenkum.svg"
                  alt="Direktorat Jenderal Peraturan Perundang-undangan"
                  width={80}
                  height={80}
                  className="shrink-0"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    Direktorat Jenderal Peraturan Perundang-undangan
                  </h3>
                  <h3 className="text-lg">
                    Kementerian Hukum Republik Indonesia
                  </h3>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                <SocialIcon
                  url="https://x.com/djppkemenkum"
                  bgColor="transparent"
                  fgColor="currentColor"
                  className="hover:text-red-500 transition-colors"
                />
                <SocialIcon
                  url="https://www.youtube.com/channel/UCExwMueUZboNucTgXxh4pfA"
                  bgColor="transparent"
                  fgColor="currentColor"
                  className="hover:text-red-500 transition-colors"
                />
                <SocialIcon
                  url="https://www.instagram.com/djpp.kemenkum"
                  bgColor="transparent"
                  fgColor="currentColor"
                  className="hover:text-red-500 transition-colors"
                />
                <SocialIcon
                  url="https://www.facebook.com/profile.php?id=100083127627108"
                  bgColor="transparent"
                  fgColor="currentColor"
                  className="hover:text-red-500 transition-colors"
                />
                <SocialIcon
                  url="https://www.tiktok.com/@djpp_kemenkum"
                  bgColor="transparent"
                  fgColor="currentColor"
                  className="hover:text-red-500 transition-colors"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="col-span-4 flex flex-col gap-3 text-sm">
              <div className="flex gap-2 items-start">
                <Building2 className="h-5 w-5 shrink-0 " />
                <span>
                  Jl. Hr. Rasuna Said Kav X6/1-3, RT.7/RW.4, Kuningan, Karet
                  Kuningan, Kecamatan Setiabudi, Jakarta Selatan, Daerah Khusus
                  Ibukota Jakarta 12940
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="h-5 w-5 shrink-0 " />
                <span>(021) 5264517</span>
              </div>
              <Link
                href="mailto:ditjenpp@kemenkum.go.id"
                className="flex gap-2 items-center hover:text-red-500 transition-colors"
              >
                <Mail className="h-5 w-5 shrink-0" />
                ditjenpp@kemenkum.go.id
              </Link>
              <Link
                href="https://peraturan.go.id"
                target="_blank"
                className="flex gap-2 items-center hover:text-red-500 transition-colors"
              >
                <Scale className="h-5 w-5 shrink-0" />
                peraturan.go.id
              </Link>
            </div>
          </div>

          {/* Watermark text */}
          <div className="w-full text-center lg:text-start pt-10 lg:pt-4 -mb-6">
            <h1
              className="text-5xl lg:text-9xl font-bold tracking-tight 
        bg-gradient-to-t from-transparent to-primary/20 
        bg-clip-text text-transparent leading-none select-none"
            >
              harmonisasi
            </h1>
          </div>

          {/* Bottom */}
          <Separator className="my-6" />
          <div className="flex flex-col sm:flex-row justify-between text-sm text-muted-foreground -mb-6 -mt-2 gap-4">
            <p>&copy; 2025 Direktorat Jenderal Peraturan Perundang-undangan</p>
            <p>
              Made by{" "}
              <Link
                target="_blank"
                href="https://djpp.kemenkum.go.id"
                className="text-primary hover:underline"
              >
                Sisinfo Ditjen PP
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
