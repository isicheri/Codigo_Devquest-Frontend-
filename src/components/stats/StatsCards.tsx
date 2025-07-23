import { Card, CardContent } from "@/components/ui/card"
import type { StatsCardsProps } from "@/types/stake"

export default function StatsCards({ data }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {data.map((stat, i) => (
        <Card key={i} className={`border-l-4 ${stat.color || "border-violet-600"}`}>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">{stat.label}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
