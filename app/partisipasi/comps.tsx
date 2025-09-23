"use client";
import React from "react";
import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { HeartHandshake } from "lucide-react";
import { regulations } from "@/types/regulation";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SelectJenisUU from "@/components/my/select-input-jenis-uu";

export default function Partisipasi() {
  const [open, setOpen] = useState(false);
  const [jenisUUList, setJenisUUList] = useState<any[]>([]);
  const [valueJenisUU, setValueJenisUU] = useState("");

  useEffect(() => {
    setJenisUUList(regulations);
  }, []);
  return (
    <>
      <section>
        <div className="text-center flex flex-col items-center justify-center">
          <div className="mb-4">
            <HeartHandshake size={50} className="text-red-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Partisipasi Masyarakat
            </span>
          </h2>
          <Separator className="my-2 w-1/2" />
          <p className="text-md md:text-lg text-muted-foreground mb-8 max-w-2xl">
            kegiatan yang dilakukan untuk menerima masukan, tanggapan, atau
            pandangan dari masyarakat dalam rangka menciptakan peraturan
            perundang-undangan yang berkualitas.
          </p>
        </div>

        <div className="mt-24 lg:mt-32 justify-between grid grid-cols-2">
          <div className="">
            {/* <label className="mb-1 block text-sm font-semibold text-sky-700">
              Jenis Undang-Undang
            </label> */}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  <SelectJenisUU
                    value={valueJenisUU}
                    listJenisUU={jenisUUList}
                  />
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Cari..." className="h-9 w-full" />
                  <CommandList>
                    <CommandEmpty>Jenis UU Tidak Ditemukan.</CommandEmpty>
                    <CommandGroup>
                      {jenisUUList.length > 0 &&
                        jenisUUList.map((item: any, index: any) => (
                          <CommandItem
                            key={item.id}
                            value={`${item.id}#${item.title}`}
                            onSelect={(currentValue) => {
                              setValueJenisUU(
                                currentValue === valueJenisUU
                                  ? ""
                                  : currentValue
                              );
                              setOpen(false);
                            }}
                          >
                            {item.title}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                valueJenisUU === `${item.id}#${item.title}`
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          {/* <div className="col-span-6 -mt-64">
            <DotLottieReact src="/lotties/Thinking.lottie" loop autoplay />
          </div> */}
        </div>
      </section>
    </>
  );
}
