"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BarChart2 } from "lucide-react";
import { X, User, Building2, MessageSquare, Calendar } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AktivitasItem {
  id: number;
  created_at: string;
  nama: string;
  mewakili: string;
  instansi: string;
  catatan: string;
  catatan_admin: string | null;
}
interface AktivitasMasyarakatDialogProps {
  data?: AktivitasItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isLoading?: boolean;
}

export const AktivitasMasyarakatDialog: React.FC<
  AktivitasMasyarakatDialogProps
> = ({ data = [], isOpen, setIsOpen, isLoading = false }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  if (!isOpen) return null;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* <DialogTrigger asChild>
      </DialogTrigger> */}
        <DialogContent className="w-full max-w-4xl ">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Aktifitas Masyarakat
            </DialogTitle>
          </DialogHeader>
          <Card className="border-none shadow-none">
            <CardContent className="space-y-3">
              {/* Content */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-16">
                    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-600">Memuat data...</p>
                  </div>
                ) : data.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                    <MessageSquare className="w-16 h-16 mb-4" />
                    <p className="text-lg font-medium">
                      Belum ada masukan yang dipublikasikan.
                    </p>
                  </div>
                ) : (
                  <ScrollArea type="always" className="h-[500px] pr-4">
                    <div className="space-y-4">
                      {data.map((item: any, index: number) => (
                        <div
                          key={item.id}
                          className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                        >
                          {/* Header Card */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                                {item.nama.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 text-lg">
                                  {item.nama}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Calendar className="w-4 h-4" />
                                  <span>{formatDate(item.created_at)}</span>
                                </div>
                              </div>
                            </div>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                              #{index + 1}
                            </span>
                          </div>

                          {/* Info Grid */}
                          <div className="flex items-center gap-4 mb-4 bg-white p-3 rounded-lg border border-gray-100">
                            <div className="flex items-center gap-3 flex-1">
                              <User className="w-5 h-5 text-blue-600 flex-shrink-0" />
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-gray-500 font-medium uppercase mb-1">
                                  Mewakili
                                </p>
                                <p className="text-gray-900 font-medium truncate">
                                  {item.mewakili}
                                </p>
                              </div>
                            </div>

                            <div className="h-12 w-px bg-gray-200"></div>

                            <div className="flex items-center gap-3 flex-1">
                              <Building2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-gray-500 font-medium uppercase mb-1">
                                  Instansi
                                </p>
                                <p className="text-gray-900 font-medium truncate">
                                  {item.instansi}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Catatan */}
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                            <div className="flex items-start gap-3">
                              <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <div className="flex-1">
                                <p className="text-xs text-blue-700 font-medium uppercase mb-2">
                                  Saran / Masukan
                                </p>
                                <p className="text-gray-800 leading-relaxed">
                                  {item.catatan}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Admin Note */}
                          {item.catatan_admin && (
                            <div className="mt-3 bg-amber-50 p-4 rounded-lg border border-amber-200">
                              <div className="flex items-start gap-3">
                                <MessageSquare className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                  <p className="text-xs text-amber-700 font-medium uppercase mb-2">
                                    Catatan Admin
                                  </p>
                                  <p className="text-gray-800 leading-relaxed">
                                    {item.catatan_admin}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                )}

                {/* {data.length === 0 && (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <MessageSquare className="w-16 h-16 mb-4" />
                    <p className="text-lg font-medium">
                      Belum ada masukan yang dipublikasi.
                    </p>
                  </div>
                )} */}
              </div>

              {/* Footer */}
              {/* <div className="border-t px-6 py-4 bg-gray-50">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>
                    Total: <span className="font-bold">{data.length}</span>{" "}
                    masukan
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    Tutup
                  </button>
                </div>
              </div> */}
            </CardContent>
            <CardFooter>
              {/* <div className="border-t px-6 py-4 bg-gray-50"> */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>
                  Total: <span className="font-bold">{data.length}</span>{" "}
                  masukan
                </span>
                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Tutup
                </button> */}
              </div>
              {/* </div> */}
            </CardFooter>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};
