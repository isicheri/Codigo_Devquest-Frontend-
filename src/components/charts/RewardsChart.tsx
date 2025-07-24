"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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
        <AreaChart data={dummyChartData}>
          <defs>
            <linearGradient id="colorRewards" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="rewards"
            stroke="#8b5cf6"
            fillOpacity={1}
            fill="url(#colorRewards)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
