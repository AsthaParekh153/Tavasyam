import "./Progresschart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", workout: 30, calories: 55, steps: 75 },
  { day: "Tue", workout: 45, calories: 35, steps: 50 },
  { day: "Wed", workout: 75, calories: 50, steps: 55 },
  { day: "Thu", workout: 65, calories: 75, steps: 45 },
  { day: "Fri", workout: 30, calories: 55, steps: 65 },
  { day: "Sat", workout: 35, calories: 55, steps: 65 },
  { day: "Sun", workout: 35, calories: 55, steps: 65 },
];

export default function ProgressChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h4 className="text">Goal Progress</h4>
        <select className="dropdown">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} barGap={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />

          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="left"
            wrapperStyle={{ marginLeft: 40, paddingTop: 20 }}
            iconType="circle"
            iconSize={10}
          />

          <Bar dataKey="workout" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
          <Bar dataKey="calories" fill="#fb923c" radius={[6, 6, 0, 0]} />
          <Bar dataKey="steps" fill="#a855f7" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
