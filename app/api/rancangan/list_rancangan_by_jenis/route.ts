import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const formData = await request.formData();
    const url = process.env.NEXT_PUBLIC_URL_EHARMON + "/api/rancangan/rancangan-by-jenis";
    const token = process.env.NEXT_PRIVATE_TOKEN_EHARMON
    const jenis_rancangan = formData.get("jenis_rancangan")?.toString() || "";
    const tahun = formData.get("tahun")?.toString() || "";
    const nama_rancangan = formData.get("nama_rancangan")?.toString() || "";
    const nama_pemrakarsa = formData.get("nama_pemrakarsa")?.toString() || "";
    const status = formData.get("status")?.toString() || "";
    const page = formData.get("page")?.toString() || "";
    const per_page = formData.get("per_page")?.toString() || "";

    const split_status = status.split(',')
    let jadi_status: any = []
    if (split_status.length > 1) {
        split_status.forEach((item) => {
            jadi_status.push(item)
        })
    } else if (split_status.length == 1) {
        jadi_status.push(status)
    } else {
        jadi_status = status
    }

    let datakirim =
        JSON.stringify({
            jenis_rancangan: jenis_rancangan,
            tahun: tahun,
            nama_rancangan: nama_rancangan,
            nama_pemrakarsa: nama_pemrakarsa,
            status: jadi_status,
            page: page,
            per_page: per_page,
        })

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: datakirim,
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: `Failed to fetch data ${response.statusText}` },
                { status: response.status },
            );
        }

        const data = await response.json();

        return NextResponse.json({
            data,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
