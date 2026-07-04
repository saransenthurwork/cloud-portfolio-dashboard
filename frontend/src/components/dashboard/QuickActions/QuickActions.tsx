import Button from "../../ui/Button/Button";

export default function QuickActions() {
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
      <h2 className="text-xl font-semibold text-white">
        Quick Actions
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-4">

        <Button>
          New Deployment
        </Button>

        <Button variant="secondary">
          Launch EC2
        </Button>

        <Button variant="secondary">
          Create Container
        </Button>

        <Button variant="ghost">
          View Logs
        </Button>

      </div>

    </div>
  );
}