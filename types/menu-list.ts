export type RouteProps = {
    href: string;
    label: string;
}

export type FeatureProps = {
    title: string;
    description: string;
    href: string;
}

export const routeList: RouteProps[] = [
    {
        href: "/",
        label: "Beranda",
    },
    {
        href: "/partisipasi",
        label: "Partisipasi",
    },
];

export const featureList: FeatureProps[] = [
    {
        title: "Showcase Your Value ",
        description: "Highlight how your product solves user problems.",
        href: "#",
    },
    {
        title: "Build Trust",
        description:
            "Leverages social proof elements to establish trust and credibility.",
        href: "#",
    },
    {
        title: "Capture Leads",
        description:
            "Make your lead capture form visually appealing and strategically.",
        href: "#",
    },
];

export const rancanganList: FeatureProps[] = [
    {
        title: "Undang-Undang",
        description:
            "Dokumen hukum yang berisi rancangan undang-undang yang diajukan untuk dibahas dan disahkan menjadi undang-undang.",
        href: "/rancangan/ruu",
    },
    {
        title: "Peraturan Pemerintah Pengganti Undang-Undang",
        description:
            "Peraturan pemerintah yang dibuat untuk menggantikan undang-undang dalam keadaan mendesak sebelum mendapat persetujuan DPR.",
        href: "/rancangan/rperppu",
    },
    {
        title: "Peraturan Pemerintah",
        description:
            "Rancangan peraturan yang disusun pemerintah sebagai pelaksanaan undang-undang.",
        href: "/rancangan/rpp",
    },
    {
        title: "Peraturan Presiden",
        description:
            "Rancangan peraturan yang disusun oleh presiden untuk mengatur pelaksanaan kebijakan pemerintahan.",
        href: "/rancangan/rperpres",
    },
    {
        title: "Peraturan Menteri",
        description:
            "Rancangan peraturan yang disusun oleh menteri sebagai pedoman pelaksanaan tugas kementerian.",
        href: "/rancangan/rpermen",
    },
    {
        title: "Peraturan Badan/Lembaga",
        description:
            "Rancangan peraturan yang disusun oleh badan atau lembaga negara untuk mengatur pelaksanaan tugas dan fungsi lembaga tersebut.",
        href: "/rancangan/rperban",
    },
];