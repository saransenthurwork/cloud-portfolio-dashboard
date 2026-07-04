import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", cpu: 35 },
  { day: "Tue", cpu: 48 },
  { day: "Wed", cpu: 42 },
  { day: "Thu", cpu: 61 },
  { day: "Fri", cpu: 58 },
  { day: "Sat", cpu: 73 },
  { day: "Sun", cpu: 66 },
];

export default function ResourceUsage() {
  return (
    <div
      className="
      rounded-[24px]
      border
      border-[#232B36]
      bg-[#12161C]
      p-7
      h-[340px]
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            CPU Usage
          </h2>

          <p className="mt-1 text-sm text-[#8E96A5]">
            Last 7 days
          </p>
        </div>

        <h3 className="text-3xl font-bold text-white">
          66%
        </h3>
      </div>

      <div className="mt-8 h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="cpu" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6C7CFF" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#6C7CFF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="day"
              tick={{ fill: "#8E96A5", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="cpu"
              stroke="#6C7CFF"
              strokeWidth={3}
              fill="url(#cpu)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}