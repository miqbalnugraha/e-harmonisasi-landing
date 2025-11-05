"use client";
import React from "react";
import { useState, useEffect } from "react";
import { PartisipasiSection } from "./partisipasi/comps";
import { DaftarMasukan } from "./last-partisipasi/comps";
import { FAQSection } from "./faq";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { HeartHandshake } from "lucide-react";
import { Regulation, regulations } from "@/types/regulation";
import { ConvertedItem } from "@/types/jenisUU";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import TableRancangan from "./(table)/table";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar-serverside";
import DataTablePagination from "@/components/data-table/data-table-pagination-serverside";
import { Rancangan } from "@/types/rancangan";
import { formatDateAndOtherTime } from "@/lib/formatDate";
import { toast } from "sonner";

export default function Partisipasi() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [jenisUUList, setJenisUUList] = useState<any[]>([]);
  const [openJenisUU, setOpenJenisUU] = useState(false);
  const [valueJenisUU, setValueJenisUU] = useState("");
  const [valueTahun, setValueTahun] = useState("");

  // search filter
  const [searchNamaRancangan, setSearchNamaRancangan] = useState("");
  const [searchNamaPemrakarsa, setSearchNamaPemrakarsa] = useState("");
  const [searchStatus, setSearchStatus] = useState<any[]>([]);

  // pagination
  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [itemsPerPage, setItemsPerpage] = useState<any>(10);
  const [totalItems, setTotalItems] = useState(0);

  function convertJenisUuToDisplay(data: any): ConvertedItem[] {
    if (data.length === 0) {
      console.warn("API response was unsuccessful or data array is empty.");
      return [];
    }

    return data.map((item: any) => {
      const itemId = item.singkatan;

      return {
        id: itemId,
        title: item.nama,
        // desc: description,
      };
    });
  }

  // fetch list rancangan
  useEffect(() => {
    if (valueJenisUU && valueTahun) {
      const delayDebounceFn = setTimeout(() => {
        const fetchListRancangan = async () => {
          try {
            setDisplayedItems([]);
            setIsLoading(true);
            let f = new FormData();
            const split_valueJenisUU = valueJenisUU.split("#");
            f.append("jenis_rancangan", split_valueJenisUU[1]);
            f.append("tahun", valueTahun);
            f.append("nama_rancangan", searchNamaRancangan);
            f.append("nama_pemrakarsa", searchNamaPemrakarsa);
            f.append("status", searchStatus.toString());
            f.append("page", currentPage);
            f.append("per_page", itemsPerPage);

            const response = await fetch(
              "/api/rancangan/list_rancangan_by_jenis",
              {
                method: "POST",
                body: f,
              }
            );
            const data = await response.json();

            if (response.ok) {
              const data_list = data.data.data;
              const data_pagination = data.data.pagination;

              const formattedData = data_list.map((item: any) => {
                const {
                  formattedDate,
                  formattedDate2,
                  formattedTime,
                  formattedTime2,
                } = formatDateAndOtherTime(
                  item.tgl_permohonan,
                  item.tgl_selesai,
                  item.tgl_permohonan,
                  item.tgl_selesai
                );
                return {
                  ...item,
                  formatted_tgl_permohonan: formattedDate,
                  formatted_tgl_selesai: formattedDate2,
                };
              });

              setDisplayedItems(formattedData);
              setTotalItems(data_pagination.totalCount);
              setIsLoading(false);
            } else {
              setMessage(data.message || "Failed to fetch data");
              setIsLoading(false);
              toast.error(data.error, {
                description: data.message,
              });
              // throw new Error(
              //   data.message ?? data.error ?? "Something went wrong"
              // );
            }
          } catch (error: any) {
            setIsLoading(false);
            toast.error("Error!", {
              description: error.error,
            });
          }
        };
        fetchListRancangan();
      }, 300);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [
    valueJenisUU,
    valueTahun,
    searchNamaRancangan,
    searchNamaPemrakarsa,
    searchStatus,
    currentPage,
    itemsPerPage,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    valueJenisUU,
    valueTahun,
    searchNamaRancangan,
    searchNamaPemrakarsa,
    searchStatus,
  ]);

  const getYearOptions = (startYear: number) => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: currentYear - startYear + 1 }, (_, i) => {
      const year = startYear + i;
      return { label: String(year), value: String(year) };
    }).reverse();
  };

  const yearOptions = getYearOptions(2025);

  // master jenis uu
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchMasterJenisUU = async () => {
        try {
          setIsLoading(true);
          const response = await fetch("/api/master/master_jenis_uu", {
            method: "GET",
          });
          const data = await response.json();

          if (response.ok) {
            const convertedData = convertJenisUuToDisplay(data.data);
            setJenisUUList(convertedData);
            setIsLoading(false);
          } else {
            setMessage(data.message || "Failed to fetch data");
            setIsLoading(false);
            toast.error(data.error, {
              description: data.message,
            });
            // throw new Error(
            //   data.message ?? data.error ?? "Something went wrong"
            // );
          }
        } catch (error: any) {
          setIsLoading(false);
          console.log(error);
          toast.error("Error!", {
            description: error.error,
          });
        }
      };
      fetchMasterJenisUU();
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, []);

  return (
    <>
      <section className="container w-full">
        <div className="text-center flex flex-col items-center justify-center lg:max-w-screen-xl">
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

        <PartisipasiSection />
        <DaftarMasukan />

        <div className="flex flex-col pt-12">
          {/* <div className="flex flex-row items-end justify-between gap-4 mb-4"> */}
          <h2 className="text-3xl md:text-4xl font-bold text-start">
            <span className="text-transparent  bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Ayo Berikan Masukan Anda
            </span>
            💡
          </h2>
          <p className="text-md text-muted-foreground py-4 max-w-2xl">
            Pilih rancangan peraturan yang sedang dikonsultasikan dan sampaikan
            pandangan Anda untuk mendukung pembentukan peraturan yang lebih baik
          </p>
          {/* </div> */}
          <Separator className="w-full" />
        </div>

        <p className="py-4 text-xs text-slate-400">
          *) pilih jenis PUU dan tahun untuk melihat daftar rancangan peraturan
          perundang-undangan{" "}
        </p>
        <div className="w-full">
          <div className="flex flex-wrap items-center gap-2">
            <Popover open={openJenisUU} onOpenChange={setOpenJenisUU}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openJenisUU}
                  className="w-[200px] lg:w-[300px] justify-between"
                >
                  <SelectJenisUU
                    value={valueJenisUU}
                    listJenisUU={jenisUUList}
                  />
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-[200px] lg:w-[300px] p-0"
              >
                <Command>
                  <CommandInput placeholder="Cari..." className="h-9 w-full" />
                  <CommandList>
                    <CommandEmpty>
                      {isLoading ? "Loading..." : "Jenis UU Tidak Ditemukan."}
                    </CommandEmpty>
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
                              setOpenJenisUU(false);
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

            <Select
              value={valueTahun}
              onValueChange={(val) => setValueTahun(val)}
            >
              <SelectTrigger className="w-[100px] lg:w-[120px]">
                <SelectValue placeholder="Tahun" />
              </SelectTrigger>
              <SelectContent>
                {yearOptions.map((year) => (
                  <SelectItem key={year.value} value={year.value}>
                    {year.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* <div className="col-span-6 -mt-64">
            <DotLottieReact src="/lotties/Thinking.lottie" loop autoplay />
          </div> */}
        <div className="mt-8">
          <DataTableToolbar
            valueNamaRancangan={searchNamaRancangan}
            placeholderNamaRancangan="Filter Nama Rancangan..."
            onChangeNamaRancangan={(e: any) =>
              setSearchNamaRancangan(e.target.value)
            }
            valueNamaPemrakarsa={searchNamaPemrakarsa}
            placeholderNamaPemrakarsa="Filter Nama Pemrakarsa..."
            onChangeNamaPemrakarsa={(e: any) =>
              setSearchNamaPemrakarsa(e.target.value)
            }
            valueStatus={searchStatus}
            onChangeStatus={setSearchStatus}
            onReset={() => {
              setSearchNamaRancangan("");
              setSearchNamaPemrakarsa("");
              setSearchStatus([]);
            }}
          />
          <TableRancangan items={displayedItems} loadingList={isLoading} />
          <DataTablePagination
            showPage={true}
            totalPosts={totalItems}
            postsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setPostsPerPage={setItemsPerpage}
          />
        </div>
        <FAQSection />
      </section>
    </>
  );
}
