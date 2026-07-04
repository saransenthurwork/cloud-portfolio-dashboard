export default function Header() {
  return (
    <section className="flex items-start justify-between">

      <div>

        <p className="text-sm uppercase tracking-[0.2em] text-[#6B7280]">
          Nimbus Cloud
        </p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-white">
          Good Evening, Saran 👋
        </h1>

        <p className="mt-4 max-w-2xl text-[#8E96A5] leading-7">
          Monitor infrastructure, deployments,
          Kubernetes clusters and cloud resources
          from one platform.
        </p>

      </div>

      <div
        className="
        rounded-2xl
        border
        border-[#232B36]
        bg-[#12161C]
        px-5
        py-3
        "
      >

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-green-500" />

          <div>

            <p className="text-sm text-white">

              System Status

            </p>

            <p className="text-xs text-[#8E96A5]">

              All systems operational

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}