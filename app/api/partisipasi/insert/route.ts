import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const formData = await request.formData();
    const url = process.env.NEXT_PUBLIC_URL_EHARMON + "/api/rancangan/create-partisipasi";
    const token = process.env.NEXT_PRIVATE_TOKEN_EHARMON
    const rancangan_id = formData.get("rancangan_id")?.toString() || "";
    const nama = formData.get("nama")?.toString() || "";
    const instansi = formData.get("instansi")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const no_telp = formData.get("no_telp")?.toString() || "";
    const catatan = formData.get("catatan")?.toString() || "";
    const mewakili = formData.get("mewakili")?.toString() || "";

    let datakirim =
        JSON.stringify({
            rancangan_id: rancangan_id,
            nama: nama,
            instansi: instansi,
            email: email,
            no_telp: no_telp,
            catatan: catatan,
            mewakili: mewakili,
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

        return NextResponse.json(
            data,
        );
    } catch (error: any) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
