const services = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Database",
];

export default function InfrastructureHealth() {
  return (
    <div
      className="
      rounded-[24px]
      border
      border-[#232B36]
      bg-[#12161C]
      p-7
      "
    >
      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold text-white">

          Infrastructure

        </h2>

        <div className="h-3 w-3 rounded-full bg-green-500" />

      </div>

      <div className="mt-8 space-y-5">

        {services.map((service) => (

          <div
            key={service}
            className="flex items-center justify-between"
          >

            <span className="text-[#E5E7EB]">
              {service}
            </span>

            <span className="text-green-400">
              Healthy
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}