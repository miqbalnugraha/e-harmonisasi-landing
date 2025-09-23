interface JenisItem {
  id: string;
  title: string;
}

interface Props {
  value: string | undefined;
  listJenisUU: JenisItem[];
}

const SelectJenisUU: React.FC<Props> = ({ value, listJenisUU }) => {
  const selectedJenis = listJenisUU.find(
    (item) => `${item.id}#${item.title}` === value
  );

  return (
    <div>
      {value && selectedJenis
        ? `${selectedJenis.title}`
        : "Pilih Jenis Undang-Undang..."}
    </div>
  );
};

export default SelectJenisUU;
