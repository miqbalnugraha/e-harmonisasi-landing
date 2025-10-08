export type Rancangan = {
    id: string;
    nama_rancangan: string;
    tahun: number;
    file_rancangan: string;
    tgl_permohonan: string;
    tgl_selesai: string | null;
    jenis_rancangan: string;
    status: string;
    tahapan: string;
    pemrakarsa_id: number;
    pemrakarsa_parent_id: number | null;
    nama_pemrakarsa: string;
    jenis_pemrakarsa: string;
    nama_program: string;
}