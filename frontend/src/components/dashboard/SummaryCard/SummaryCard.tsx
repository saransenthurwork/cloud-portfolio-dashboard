type SummaryCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
};

export default function SummaryCard({
  title,
  value,
  subtitle,
}: SummaryCardProps) {
  return (
    <div className="rounded-3xl border border-[#232B36] bg-[#12161C] p-6 transition hover:border-[#5B7FFF]">

      <p className="text-sm text-[#8E96A5]">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-white">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm text-[#8E96A5]">
          {subtitle}
        </p>
      )}

    </div>
  );
}