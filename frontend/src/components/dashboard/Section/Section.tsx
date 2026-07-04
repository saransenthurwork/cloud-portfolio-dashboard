type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Section({
  title,
  children,
}: Props) {
  return (
    <section
      className="
      mt-8
      rounded-[24px]
      border
      border-[#232B36]
      bg-[#12161C]
      p-7
      "
    >
      <h2 className="text-xl font-semibold">

        {title}

      </h2>

      <div className="mt-6">

        {children}

      </div>

    </section>
  );
}