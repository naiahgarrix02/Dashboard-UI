import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";

const data = [
  { name: "1-10 Aug", value: 30 },
  { name: " ", value: 45 },
  { name: "11-20 Aug", value: 28 },
  { name: " ", value: 60 },
  { name: "21-30 Aug", value: 25 },
];

const colors = ["#CFC9F7", "#6C5CE7", "#CFC9F7", "#6C5CE7", "#CFC9F7"];

const WeeklyActivityCharts = () => {
  return (
    <div className="bg-[#f5f6fb] rounded-2xl p-4 w-full h-45">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
            stroke="#d6d6e7"
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 14 }}
          />

          <YAxis
            ticks={[20, 40, 60]}
            domain={[0, 60]}
            axisLine={false}
            tickLine={false}
            width={25} // important
            tick={{ fill: "#000000", fontSize: 12 }}
          />

          <Bar dataKey="value" radius={[12, 12, 12, 12]} barSize={44}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyActivityCharts;
