// types/regulation.ts
export type Regulation = {
    id: string;
    title: string;
    desc: string;
};

export const regulations: Regulation[] = [
    {
        id: "ruu",
        title: "Rancangan Undang-Undang",
        desc: "Undang-Undang adalah Peraturan Perundang-undangan yang dibentuk oleh Dewan Perwakilan Rakyat dengan persetujuan bersama Presiden",
    },
    {
        id: "rperppu",
        title: "Rancangan Peraturan Pemerintah Pengganti Undang-Undang",
        desc: "Peraturan Pemerintah Pengganti Undang-Undang (atau disingkat Perpu atau Perppu) adalah Peraturan Perundang-undangan yang ditetapkan oleh Presiden dalam hal ihwal kegentingan yang memaksa. Sampai dengan tahun 2017, sudah terdapat 214 Perppu yang pernah dikeluarkan oleh Presiden",
    },
    {
        id: "rpp",
        title: "Rancangan Peraturan Pemerintah",
        desc: "Peraturan Pemerintah adalah Peraturan Perundang-undangan yang ditetapkan oleh Presiden untuk menjalankan Undang-Undang sebagaimana mestinya",
    },
    {
        id: "rperpres",
        title: "Rancangan Peraturan Presiden",
        desc: "Peraturan Presiden adalah Peraturan Perundangundangan yang ditetapkan oleh Presiden untuk menjalankan perintah Peraturan Perundang-undangan yang lebih tinggi atau dalam menyelenggarakan kekuasaan pemerintahan",
    },
    {
        id: "rpermen",
        title: "Rancangan Peraturan Menteri",
        desc: "Peraturan Menteri adalah Peraturan Perundang-undangan yang ditetapkan oleh menteri dalam rangka menjalankan tugas pemerintahan sesuai dengan lingkup tanggung jawabnya",
    },
    {
        id: "rperban",
        title: "Rancangan Peraturan Lembaga Pemerintah Non Kementerian",
        desc: "Peraturan Lembaga Pemerintah Non Kementerian adalah Peraturan Perundang-undangan yang ditetapkan oleh Kepala Lembaga Pemerintah Non Kementerian dalam rangka menjalankan tugas pemerintahan sesuai dengan lingkup tanggung jawabnya.",
    },
];
