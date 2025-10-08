import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Activity, HeartHandshake, icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
  total: number;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "RUU",
    description: "Rancangan Undang-Undang",
    total: 4,
  },
  {
    icon: "LineChart",
    title: "RPERPPU",
    description: "Rancangan Peraturan Pemerintah Pengganti Undang-Undang",
    total: 1,
  },
  {
    icon: "Wallet",
    title: "RPERMEN",
    description: "Rancangan Peraturan Menteri",
    total: 203,
  },
  {
    icon: "Sparkle",
    title: "RPERBAN/LEMBAGA",
    description: "Rancangan Kepala Badan/Lembaga",
    total: 90,
  },
];

export const KonsultasiSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-red-500 mb-2 tracking-wider">
            <HeartHandshake size={50} />
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partisipasi
            <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Masyarakat
            </span>
          </h2>
          <p className="text-md  md:text-lg text-muted-foreground mb-8">
            Partisipasi Masyarakat adalah kegiatan yang dilakukan untuk menerima
            masukan, tanggapan, atau pandangan dari masyarakat dalam rangka
            menciptakan peraturan perundang-undangan yang berkualitas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description, total }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/30 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    {total}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
