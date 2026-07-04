import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: Props) {
  return (
    <div
      className="
      rounded-[24px]
      border
      border-[#232B36]
      bg-[#12161C]
      p-7
      transition-all
      duration-200
      hover:border-[#394454]
      hover:-translate-y-1
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-[#8E96A5]">

            {title}

          </p>

          <h2 className="mt-4 text-5xl font-semibold">

            {value}

          </h2>

          <p className="mt-5 text-sm text-[#39D98A]">

            {subtitle}

          </p>

        </div>

        <div
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#1B2330]
        "
        >

          <Icon size={24} />

        </div>

      </div>
    </div>
  );
}