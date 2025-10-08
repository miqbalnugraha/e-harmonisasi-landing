import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const url = process.env.NEXT_PUBLIC_URL_EHARMON + "/api/rancangan/master-rancangan";
    const token = process.env.NEXT_PRIVATE_TOKEN_EHARMON

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: 'no-store',
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
