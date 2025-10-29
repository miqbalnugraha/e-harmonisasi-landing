"use client";

import React from "react";
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckIcon, Lightbulb, X } from "lucide-react";
import Spinner from "@/components/my/spinner";

type DefaultValues = {
  rancangan_id?: string;
  nama?: string;
  instansi?: string;
  email?: string;
  no_telp?: string;
  catatan?: string;
  mewakili?: string;
};

interface RancanganFormProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  defaultValues?: DefaultValues;
  onSubmit?: (data: Record<string, any>) => void;
  onCancel?: () => void;
}

const baseSchema = z.object({
  rancangan_id: z.string().min(1, "ID Rancangan Kosong"),
  nama: z.string().min(1, "Nama wajib diisi").max(200),
  instansi: z.string().min(1, "Nama Instansi wajib diisi").max(200),
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  no_telp: z
    .string()
    .min(1, "Nomor telepon wajib diisi")
    .refine((v) => /^[0-9+\-\s()]{7,20}$/.test(v), {
      message: "Nomor telepon tidak valid",
    }),
  mewakili: z.enum(["Pribadi", "Instansi"], {
    required_error: "Mewakili wajib dipilih",
  }),
  catatan: z
    .string()
    .min(5, "Saran wajib diisi minimal 5 karakter")
    .max(4000, "Saran maksimal 4000 karakter")
    .refine(
      (v) => {
        // Block script tags
        if (/<script[\s\S]*?>[\s\S]*?<\/script>/gi.test(v)) {
          return false;
        }
        // Block common XSS patterns
        if (/<iframe|<embed|<object|javascript:|onerror=|onload=/gi.test(v)) {
          return false;
        }
        // Block SQL injection patterns
        if (
          /(union|select|insert|update|delete|drop|create|alter|exec|execute|script|declare)(\s+|\()/gi.test(
            v,
          )
        ) {
          return false;
        }
        // Block HTML event handlers
        if (/on\w+\s*=/gi.test(v)) {
          return false;
        }
        return true;
      },
      {
        message: "Saran mengandung karakter atau pola yang tidak diperbolehkan",
      },
    ),
});

type FormSchema = z.infer<typeof baseSchema>;

const RancanganForm: React.FC<RancanganFormProps> = ({
  isOpen,
  setIsOpen,
  defaultValues,
  onSubmit,
  onCancel,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const form = useForm<FormSchema>({
    resolver: zodResolver(baseSchema),
    defaultValues: {
      rancangan_id: defaultValues?.rancangan_id ?? "",
      nama: defaultValues?.nama ?? "",
      instansi: defaultValues?.instansi ?? "",
      email: defaultValues?.email ?? "",
      no_telp: defaultValues?.no_telp ?? "",
      catatan: defaultValues?.catatan ?? "",
      mewakili: (defaultValues?.mewakili as "Pribadi" | "Instansi") ?? "",
    },
  });

  const onFormSubmit = async (data: FormSchema) => {
    try {
      setIsLoading(true);
      let f = new FormData();
      f.append("rancangan_id", data.rancangan_id);
      f.append("nama", data.nama);
      f.append("instansi", data.instansi);
      f.append("email", data.email);
      f.append("no_telp", data.no_telp);
      f.append("mewakili", data.mewakili);
      f.append("catatan", data.catatan);

      const response = await fetch("/api/partisipasi/insert", {
        method: "POST",
        body: f,
      });

      const res = await response.json();
      console.log(res);

      if (response.ok) {
        // setMessage(res.message);
        setIsOpen(false);
        toast.success("Berhasil mengajukan masukan.", {
          description: "Data masukan akan segera diproses oleh admin",
        });
      } else {
        throw new Error(res.error || "Something went wrong");
      }

      setIsLoading(false);
    } catch (error: any) {
      toast.error("Error!", {
        description: error.error,
      });
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Beri Masukan untuk Rancangan</DialogTitle>
            <DialogDescription>
              Silakan isi form di bawah untuk memberikan masukan.
            </DialogDescription>
          </DialogHeader>

          <ScrollArea type="always" className="h-[500px] pr-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onFormSubmit)}
                className="space-y-4 p-2"
                noValidate
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <FormField
                      control={form.control}
                      name="rancangan_id"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input type="hidden" readOnly {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nama"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nama</FormLabel>
                          <FormControl>
                            <Input placeholder="Tulis nama anda" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="instansi"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Instansi</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tulis nama instansi anda"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Tulis email anda" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="no_telp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>No Telpon</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tulis no telpon anda"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="catatan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Saran / Masukan</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder="Tulis saran anda"
                          {...field}
                        />
                      </FormControl>
                      <div className="flex justify-between items-center mt-1">
                        <FormMessage />
                        <span className="text-xs text-muted-foreground">
                          {field.value?.length || 0} / 4000
                        </span>
                      </div>
                    </FormItem>
                  )}
                />

                <div>
                  <FormField
                    control={form.control}
                    name="mewakili"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mewakili</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="-Mewakili-" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Pribadi">Pribadi</SelectItem>
                            <SelectItem value="Instansi">Instansi</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="rounded border bg-muted p-3 text-xs">
                  <p className="text-xs text-muted-foreground mb-2">
                    * Pasal 7 ayat (1) dan ayat (2) Permenkumham Nomor 11 Tahun
                    2021
                  </p>
                  <p className="mb-2">
                    (1) Tanggapan dan/atau masukan dari Masyarakat dapat berupa
                    catatan, penambahan usul, dan/atau pengurangan usul terhadap
                    konsep sebagaimana dimaksud dalam Pasal 4.
                  </p>
                  <p>
                    (2) Tanggapan dan/atau masukan sebagaimana dimaksud pada
                    ayat (1) dapat disampaikan secara lisan dan/atau tertulis
                    serta dilengkapi dengan identitas pengusul.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant={"default"}
                    type="submit"
                    className="flex items-center gap-2"
                    disabled={form.formState.isSubmitting}
                  >
                    {isLoading ? <Spinner /> : "Kirim"}
                  </Button>
                </div>
              </form>
            </Form>
          </ScrollArea>

          <DialogFooter>
            <DialogClose asChild>
              <button className="mt-2 text-sm">Close</button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RancanganForm;
