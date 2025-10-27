import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question:
      "Di mana saya dapat melihat draft rancangan peraturan perundang-undangan (PUU)?",
    answer:
      "Anda dapat melihat dan mengunduh draft rancangan PUU melalui tabel daftar rancangan. Klik tombol 'Unduh' pada kolom 'Aksi' untuk mendapatkan salinannya.",
    value: "item-1",
  },
  {
    question: "Bagaimana cara memberikan masukan terhadap rancangan PUU?",
    answer:
      "Pilih rancangan PUU yang sedang dikonsultasikan, kemudian klik tombol 'Beri Masukan' untuk mengisi formulir pendapat dan menyampaikan tanggapan Anda.",
    value: "item-2",
  },
  {
    question: "Apakah masukan yang saya kirimkan langsung dipublikasikan?",
    answer:
      "Masukan yang Anda kirimkan akan ditinjau terlebih dahulu oleh tim e-Harmonisasi untuk memastikan kesesuaian dengan ketentuan dan etika penyampaian pendapat sebelum dipublikasikan.",
    value: "item-3",
  },
  {
    question: "Mengapa tidak semua rancangan PUU dapat saya berikan masukan?",
    answer:
      "Hanya rancangan PUU yang sedang dalam tahap konsultasi publik melalui e-Harmonisasi yang dapat menerima masukan dari masyarakat.",
    value: "item-4",
  },
  {
    question: "Siapa yang dapat memberikan masukan pada e-Harmonisasi?",
    answer:
      "Setiap masyarakat, akademisi, lembaga, atau instansi yang memiliki pandangan terhadap rancangan peraturan dapat memberikan masukan melalui fitur konsultasi publik e-Harmonisasi.",
    value: "item-5",
  },
  {
    question: "Apakah saya dapat melihat masukan dari pengguna lain?",
    answer:
      "Ya, Anda dapat melihat daftar masukan yang telah disetujui dan dipublikasikan melalui tombol ‘Aktivitas Masyarakat’ pada kolom Actions di tabel rancangan PUU.",
    value: "item-6",
  },
  {
    question: "Apa tujuan dari konsultasi publik melalui e-Harmonisasi?",
    answer:
      "Konsultasi publik bertujuan untuk mewujudkan peraturan perundang-undangan yang partisipatif, transparan, dan mencerminkan aspirasi masyarakat.",
    value: "item-7",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Pertanyaan Umum
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
