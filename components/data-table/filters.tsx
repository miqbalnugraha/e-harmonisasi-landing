import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Bug,
  CheckCircle2,
  Circle,
  HelpCircle,
  PackagePlus,
  ScrollText,
  Timer,
  XCircle,
} from "lucide-react";
import React, { useState, useEffect } from "react";
// import { getRepoCategory } from "@/lib/api";
import { toast } from "sonner";

type dataProp = {
  value: string;
  label: string;
  icon: any;
};
export const status_options = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in-progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
];

export const label_options = [
  {
    value: "bug",
    label: "Bug",
    icon: Bug,
  },
  {
    value: "feature",
    label: "Feature",
    icon: PackagePlus,
  },
  {
    value: "documentation",
    label: "Documentation",
    icon: ScrollText,
  },
];

export const priority_options = [
  {
    value: "low",
    label: "Low",
    icon: ArrowDown,
  },
  {
    value: "medium",
    label: "Medium",
    icon: ArrowRight,
  },
  {
    value: "high",
    label: "High",
    icon: ArrowUp,
  },
];

export const wajib_dibuka_options = [
  {
    value: "1",
    label: "Ya",
    icon: CheckCircle2,
  },
  {
    value: "0",
    label: "Tidak",
    icon: XCircle,
  },
];

export let kategori_options: dataProp[] = [];

async function fetchKategoriOptions() {
  try {
    // const response = await getRepoCategory();
    // const data = response.data;
    const data: dataProp[] = [];

    kategori_options = data.map((item: any) => ({
      value: item.JUDUL,
      label: item.JUDUL,
      icon: "",
    }));
  } catch (error) {
    console.error("Failed to fetch kategori options:", error);
  }
}
fetchKategoriOptions();
