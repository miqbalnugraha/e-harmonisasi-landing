
interface ApiItem {
    id: number;
    nama: string;
    singkatan: string; // Used to derive the new id
    is_publish: number;
    urutan: number | null;
    lokasi: 'Pusat' | 'Daerah';
    created_at: string | null,
    created_by: string | null,
    updated_at: string | null,
    updated_by: string | null,
    is_deleted: number | null,
    deleted_at: string | null
}


export interface ConvertedItem {
    id: string;
    title: string;
    desc: string;
}


const DESCRIPTION_MAP: Record<string, string> = {
    'RUU': "Undang-Undang adalah Peraturan Perundang-undangan yang dibentuk oleh Dewan Perwakilan Rakyat dengan persetujuan bersama Presiden",
    'RPERPPU': "Peraturan Pemerintah Pengganti Undang-Undang (atau disingkat Perpu atau Perppu) adalah Peraturan Perundang-undangan yang ditetapkan oleh Presiden dalam hal ihwal kegentingan yang memaksa. Sampai dengan tahun 2017, sudah terdapat 214 Perppu yang pernah dikeluarkan oleh Presiden",
    'RPP': "Peraturan Pemerintah adalah Peraturan Perundang-undangan yang ditetapkan oleh Presiden untuk menjalankan Undang-Undang sebagaimana mestinya",
    'RPERPRES': "Peraturan Presiden adalah Peraturan Perundangundangan yang ditetapkan oleh Presiden untuk menjalankan perintah Peraturan Perundang-undangan yang lebih tinggi atau dalam menyelenggarakan kekuasaan pemerintahan",
    'RPERMEN': "Peraturan Menteri adalah Peraturan Perundang-undangan yang ditetapkan oleh Menteri dalam rangka melaksanakan ketentuan Peraturan Perundang-undangan yang lebih tinggi atau dalam menyelenggarakan kekuasaan pemerintahan di lingkup Kementerian.",
    'RPERLPNK': "Peraturan Badan/Lembaga adalah Peraturan yang ditetapkan oleh Kepala Badan/Lembaga Non-Kementerian dalam rangka melaksanakan ketentuan Peraturan Perundang-undangan yang lebih tinggi.",
    'RAPERDA': "Peraturan Daerah adalah Peraturan Perundang-undangan yang dibentuk oleh Dewan Perwakilan Rakyat Daerah dengan persetujuan bersama Kepala Daerah.",
    'RAPERKADA': "Peraturan Kepala Daerah adalah Peraturan Perundang-undangan yang ditetapkan oleh Kepala Daerah untuk melaksanakan Peraturan Daerah atau dalam menyelenggarakan kewenangan otonomi daerah.",
};