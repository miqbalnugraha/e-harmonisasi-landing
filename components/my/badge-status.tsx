"use client";
import { Badge } from "@/components/ui/badge";

export default function BadgeStatus(status: any) {
  const handleHeaderStatus = (statusx: any) => {
    switch (statusx) {
      case "0":
        return <Badge variant="pink">draft</Badge>;
      case "1":
        return <Badge variant="sky">submitted</Badge>;
      case "2":
        return <Badge variant="sky">on progress unit fungsi</Badge>;
      case "3":
        return <Badge variant="emerald">approved unit fungsi</Badge>;
      case "4":
        return <Badge variant="sky">on progress verifikator</Badge>;
      case "5":
        return <Badge variant="emerald">verified (completed)</Badge>;
      default:
        return <Badge variant="default">unknown status</Badge>;
    }
  };
  return <>{handleHeaderStatus(status.status)}</>;
}
