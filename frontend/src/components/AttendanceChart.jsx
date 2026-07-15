import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", attendance: 82 },
  { name: "Tue", attendance: 91 },
  { name: "Wed", attendance: 87 },
  { name: "Thu", attendance: 94 },
  { name: "Fri", attendance: 89 },
  { name: "Sat", attendance: 76 },
  { name: "Sun", attendance: 70 },
];

function AttendanceChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="attendance" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AttendanceChart;
