// api/rancangan/download/route.ts
import { NextRequest, NextResponse } from "next/server";

interface ProxyRequestBody {
  id: string;
  slug: string;
  filename: string;
}

export async function POST(req: NextRequest) {
  const { id, slug, filename }: ProxyRequestBody = await req.json();

  if (!id || !slug) {
    return NextResponse.json(
      { error: "ID dan slug harus diisi" },
      { status: 400 }
    );
  }

  try {
    const url =
      process.env.NEXT_PUBLIC_URL_EHARMON + "/api/rancangan/download-peraturan";
    const token = process.env.NEXT_PRIVATE_TOKEN_EHARMON;

    // Call Yii2 API with query parameters
    const response = await fetch(`${url}?id=${id}&slug=${slug}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // Try to parse error message from Yii2 API
      const errorData = await response.json().catch(() => null);
      return NextResponse.json(
        {
          error:
            errorData?.message ||
            `Failed to fetch file: ${response.statusText}`,
        },
        { status: response.status }
      );
    }

    // Get content type from response
    const contentType =
      response.headers.get("Content-Type") || "application/octet-stream";

    // Get file blob
    const fileBlob = await response.blob();

    // Determine file extension from content type
    const mimeToExt: Record<string, string> = {
      "application/pdf": "pdf",
      "application/msword": "doc",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        "docx",
    };

    const fileExtension = mimeToExt[contentType] || "pdf";
    const downloadFilename = filename || `document.${fileExtension}`;

    // Return file with proper headers
    const headers = new Headers({
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${downloadFilename}"`,
    });

    return new NextResponse(fileBlob.stream(), {
      headers,
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
