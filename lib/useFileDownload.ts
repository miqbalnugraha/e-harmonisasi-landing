import { useState } from "react";
import { toast } from "sonner";

interface DownloadParams {
    id: string;
    slug: string;
    filename: string;
}

export const useFileDownload = () => {
    const [isLoadingDownload, setIsLoadingDownload] = useState(false);

    const downloadFile = async ({ id, slug, filename }: DownloadParams) => {
        setIsLoadingDownload(true);

        try {
            const response = await fetch("/api/rancangan/download", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    slug,
                    filename,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Gagal mendownload file");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();

            // Cleanup
            link.parentNode?.removeChild(link);
            window.URL.revokeObjectURL(url);

            toast.success("File berhasil didownload", {
                description: `${filename} telah diunduh`,
            });

            return true;
        } catch (error: any) {
            console.error("Download error:", error);

            toast.error("Gagal Mendownload File", {
                description: error.message || "Terjadi kesalahan",
            });

            return false;
        } finally {
            setIsLoadingDownload(false);
        }
    };

    return { downloadFile, isLoadingDownload };
};