import { CheckCircle, XCircle } from "lucide-react";

interface Validator {
  name: string;
  commission: number;
  totalStake: string;
  active: boolean;
}

interface ValidatorListProps {
  validators: Validator[];
}

export const ValidatorList = ({ validators }: ValidatorListProps) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Validators</h2>
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-muted">
          <tr className="text-muted-foreground">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Commission (%)</th>
            <th className="py-2 px-4">Total Stake</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {validators.map((validator, index) => (
            <tr key={index} className="border-b border-muted hover:bg-muted/20">
              <td className="py-2 px-4">{validator.name}</td>
              <td className="py-2 px-4">{validator.commission}%</td>
              <td className="py-2 px-4">{validator.totalStake}</td>
              <td className="py-2 px-4 flex items-center gap-2">
                {validator.active ? (
                  <span className="flex items-center text-green-500">
                    <CheckCircle className="w-4 h-4 mr-1" /> Active
                  </span>
                ) : (
                  <span className="flex items-center text-red-500">
                    <XCircle className="w-4 h-4 mr-1" /> Inactive
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
