"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const dummyChartData = [
  { day: "Mon", rewards: 5 },
  { day: "Tue", rewards: 10 },
  { day: "Wed", rewards: 15 },
  { day: "Thu", rewards: 10 },
  { day: "Fri", rewards: 25 },
  { day: "Sat", rewards: 20 },
  { day: "Sun", rewards: 30 },
];

export const RewardsChart = () => {
  return (
    <div className="p-4 border rounded-lg bg-background shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Weekly Rewards</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dummyChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="rewards" stroke="#8b5cf6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
