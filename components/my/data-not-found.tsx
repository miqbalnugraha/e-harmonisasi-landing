import Image from "next/image";
import NotFound from "@/public/icons/folder-error.svg";

export default function DataNotFound({
  text = "No data.",
  tinggi = "80",
  variantImg = "",
}: any) {
  return (
    <>
      <div className="p-20 flex flex-col items-center justify-center text-center">
        <Image
          className={`${variantImg}`}
          src={NotFound}
          alt="image"
          height={tinggi}
        />
        <div className="mt-4 text-xs text-slate-500">{text}</div>
      </div>
    </>
  );
}
