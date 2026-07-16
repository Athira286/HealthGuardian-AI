import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

function PHCPieChart({ data }) {

  const COLORS = [
    "#ef4444", // Red
    "#3b82f6", // Blue
    "#22c55e", // Green
    "#f472b6", // Pink
    "#FACC15", // Yellow
  ];

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          dataKey="workers"
          nameKey="name"
          outerRadius={120}
          label
          stroke="#ffffff"
          strokeWidth={2}
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PHCPieChart;