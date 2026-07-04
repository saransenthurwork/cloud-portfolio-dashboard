import { activity } from "../../../mocks/dashboard";

export default function RecentActivity() {
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
        Recent Activity
      </h2>

      <div className="mt-7 space-y-5">

        {activity.map((activity) => (

          <div
            key={activity.title}
            className="border-b border-[#232B36] pb-4"
          >

            <p className="text-white">

              {activity.title}

            </p>

            <p className="mt-1 text-sm text-[#8E96A5]">

              {activity.time}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}