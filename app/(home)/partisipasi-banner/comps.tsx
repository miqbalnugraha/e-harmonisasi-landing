"use client";
import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Megaphone, MessageCircle, Send, Users } from "lucide-react";
import Image from "next/image";
import Wave from "@/public/svg/wave2.svg";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
  total: number;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "FileText",
    title: "Total",
    description: "Rancangan Peraturan Undang-Undang",
    total: 9033,
  },
  {
    icon: "Inbox",
    title: "Permohononan",
    description: "Permohonan Harmonisasi",
    total: 7555,
  },
  {
    icon: "Repeat",
    title: "Diproses",
    description: "Permohonan Harmonisasi diproses",
    total: 7555,
  },
  {
    icon: "CircleCheck",
    title: "Selesai",
    description: "Proses Harmonisasi Selesai",
    total: 203,
  },
];

export const PartisipasiBannerSection = () => {
  return (
    // <section className="relative mt-20">
    //   <div className="relative bg-gradient-to-r from-sky-500 via-indigo-500 to-primary rounded-3xl p-8 md:p-12 text-center text-white shadow-xl overflow-hidden">
    //     {/* Decorative gradients */}
    //     <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,white,transparent_70%)]"></div>

    //     {/* Content */}
    //     <div className="relative flex flex-col items-center justify-center max-w-2xl mx-auto">
    //       <Megaphone className="w-12 h-12 mb-4 text-white/90" />
    //       <h2 className="text-3xl md:text-4xl font-bold mb-4">
    //         Ayo Berpartisipasi dalam Pembentukan Regulasi!
    //       </h2>
    //       <p className="text-lg md:text-xl mb-8 text-white/90">
    //         Sampaikan pendapat dan masukan Anda terhadap rancangan peraturan
    //         perundang-undangan. Setiap masukan Anda membantu menciptakan
    //         kebijakan yang lebih baik.
    //       </p>

    //       <a
    //         href="/partisipasi"
    //         className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform"
    //       >
    //         <MessageCircle className="w-5 h-5 text-primary" />
    //         Beri Masukan Sekarang
    //       </a>
    //     </div>
    //   </div>
    // </section>

    <section className="relative mt-20 flex justify-center px-6 md:px-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-sky-50 via-white to-sky-100 shadow-lg w-full max-w-6xl">
        {/* Decorative wave */}
        {/* <div className="absolute bottom-[-220px] left-1/2 w-full -translate-x-1/2 overflow-hidden">
          <Image
            src={Wave}
            alt="image"
            className="w-full scale-110 translate-y-6"
          />
        </div> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center py-20 px-6">
          {/* Floating icons */}
          <div className="absolute top-10 left-10 lg:left-20 bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg rounded-2xl p-3 text-white">
            <Users className="w-6 h-6" />
          </div>

          <div className="absolute top-16 right-12 lg:right-20 bg-gradient-to-br from-pink-500 to-violet-500 shadow-lg rounded-2xl p-3 text-white">
            <MessageCircle className="w-6 h-6" />
          </div>

          <div className="absolute top-40 left-12 lg:left-40 bg-gradient-to-br from-orange-400 to-amber-500 shadow-lg rounded-2xl p-3 text-white">
            <Send className="w-6 h-6" />
          </div>

          {/* Text */}
          <div className="relative flex flex-col items-center justify-center max-w-2xl mx-auto">
            <Megaphone className="w-12 h-12 mb-4 text-sky-700" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700 mb-4">
              Ayo Berpartisipasi dalam Pembentukan Regulasi
            </h2>
            <p className="text-gray-600 max-w-2xl mb-8 text-md md:text-lg">
              Sampaikan pendapat dan masukan Anda terhadap rancangan peraturan
              perundang-undangan. Setiap ide Anda berkontribusi dalam
              menciptakan kebijakan yang lebih baik.
            </p>
          </div>

          {/* Button */}
          <a
            href="/partisipasi"
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Beri Masukan Sekarang
          </a>

          {/* Info badge */}
          {/* <div className="mt-6 bg-white rounded-full px-5 py-2 shadow-sm text-sky-600 font-medium text-sm flex items-center gap-2">
            <Send className="w-4 h-4" />
            Sudah {">"} 100+ partisipasi masyarakat
          </div> */}
        </div>
      </div>
    </section>
  );
};
