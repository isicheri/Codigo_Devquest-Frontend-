import { ArrowDownCircle, ArrowUpCircle, Gift } from "lucide-react";

interface Activity {
  user: string;
  action: "stake" | "unstake" | "reward";
  amount: string;
  time: string;
}

interface StakerActivityTableProps {
  activities: Activity[];
}

export const StakerActivityTable = ({ activities }: StakerActivityTableProps) => {
  const getIcon = (action: Activity["action"]) => {
    switch (action) {
      case "stake":
        return <ArrowUpCircle className="w-4 h-4 text-green-500" />;
      case "unstake":
        return <ArrowDownCircle className="w-4 h-4 text-red-500" />;
      case "reward":
        return <Gift className="w-4 h-4 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Staker Activity</h2>
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-muted text-muted-foreground">
          <tr>
            <th className="py-2 px-4">User</th>
            <th className="py-2 px-4">Action</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Time</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index} className="border-b border-muted hover:bg-muted/20">
              <td className="py-2 px-4">{activity.user}</td>
              <td className="py-2 px-4 flex items-center gap-2">
                {getIcon(activity.action)}
                {activity.action}
              </td>
              <td className="py-2 px-4">{activity.amount}</td>
              <td className="py-2 px-4 text-muted-foreground">{activity.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
