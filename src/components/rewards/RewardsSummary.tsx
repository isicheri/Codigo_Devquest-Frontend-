import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Banknote, Clock } from "lucide-react";

interface RewardsSummaryProps {
  total: string;
  claimed: string;
  unclaimed: string;
}

export const RewardsSummary = ({ total, claimed, unclaimed }: RewardsSummaryProps) => {
  const summaries = [
    {
      title: "Total Rewards",
      value: total,
      icon: <Trophy className="text-yellow-500" />,
    },
    {
      title: "Claimed",
      value: claimed,
      icon: <Banknote className="text-green-500" />,
    },
    {
      title: "Unclaimed",
      value: unclaimed,
      icon: <Clock className="text-gray-400" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {summaries.map((summary, i) => (
        <Card key={i} className="flex items-center gap-4 p-4">
          {summary.icon}
          <CardContent className="p-0">
            <p className="text-sm text-muted-foreground">{summary.title}</p>
            <p className="text-lg font-bold">{summary.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
