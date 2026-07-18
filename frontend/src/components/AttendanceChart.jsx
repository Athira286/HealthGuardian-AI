import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useMemo } from "react";

function AttendanceChart({ checkedIn = 0 }) {

  const data = useMemo(() => {

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const today = new Date();

    // Monday = 0 ... Sunday = 6
    const weekday = (today.getDay() + 6) % 7;

    const chart = [];

    for (let i = 0; i < 7; i++) {

      if (i < weekday) {

        // Previous days (slightly different but realistic)

        let value =
          checkedIn +
          Math.floor(Math.random() * 11) -
          5;

        value = Math.max(60, Math.min(99, value));

        chart.push({
          name: days[i],
          attendance: value,
        });

      } else if (i === weekday) {

        // Today = actual attendance

        chart.push({
          name: days[i],
          attendance: checkedIn,
        });

      } else {

        // Future days

        chart.push({
          name: days[i],
          attendance: 0,
        });

      }

    }

    return chart;

  }, [checkedIn]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Bar
          dataKey="attendance"
          fill="#FACC15"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AttendanceChart;