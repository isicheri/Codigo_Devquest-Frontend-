// src/pages/dashboard.tsx
import {motion} from "framer-motion"
import StatsCards from "../components/stats/StatsCards";
import { ValidatorList } from "@/components/validator/ValidatorList";
import { StakerActivityTable } from "@/components/stakers/StakerActivityTable";
import { RewardsSummary } from "@/components/rewards/RewardsSummary";
import { RewardsChart } from "@/components/charts/RewardsChart";


const dummyActivity: {
  user: string;
  action: "stake" | "unstake" | "reward";
  amount: string;
  time: string;
}[] = [
  { user: "0xAbC...123", action: "stake", amount: "100 SOL", time: "10 mins ago" },
  { user: "0xDef...456", action: "unstake", amount: "50 SOL", time: "30 mins ago" },
  { user: "0xGhi...789", action: "reward", amount: "5 SOL", time: "1 hour ago" },
];

const dummyRewards = {
  total: "120 SOL",
  claimed: "80 SOL",
  unclaimed: "40 SOL",
};

const dummyStats = [
  { label: "TVL (SOL)", value: "412,000", color: "border-violet-600" },
  { label: "Stakers", value: "6,244", color: "border-green-600" },
  { label: "Validators", value: "28", color: "border-blue-600" },
  { label: "Pool Supply", value: "8,090", color: "border-yellow-500" },
]

const dummyValidators = [
  { name: "Validator One", commission: 5, totalStake: "1200 SOL", active: true },
  { name: "Validator Two", commission: 10, totalStake: "890 SOL", active: false },
];


export default function Dashboard() {

  return (
   <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
    Stake Pool Dashboard
  </h1>

  <div className="mb-12">
    <StatsCards data={dummyStats} />
  </div>

  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">Rewards Summary</h2>
    <RewardsSummary
      total={dummyRewards.total}
      claimed={dummyRewards.claimed}
      unclaimed={dummyRewards.unclaimed}
    />
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">Validators</h2>
    <ValidatorList validators={dummyValidators} />
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">Rewards Chart</h2>
    <RewardsChart />
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-2">Staker Activity</h2>
    <p className="text-sm text-muted-foreground mb-4">
      View the latest staker activity on the platform.
    </p>
    <StakerActivityTable activities={dummyActivity} />
  </section>
</motion.div>
  )
}
