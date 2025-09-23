"use client";
import { Label } from "@/components/ui/label";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFoundContent() {
  return (
    <div className="items-center justify-center text-center">
      <DotLottieReact
        src="/lotties/notfound.lottie"
        loop
        autoplay
        style={{ height: "50vh" }}
      />
      <Label className="text-4xl font-bold">Page Not Found</Label>
    </div>
  );
}
