import { Card, CardContent } from "@/components/ui/card"

export function InvestmentMetrics() {
  return (
    <div className="grid gap-4 grid-cols-2">
      <Card>
        <CardContent className="p-4">
          <div className="text-sm font-medium">Cap Rate</div>
          <div className="text-2xl font-bold">5.8%</div>
          <div className="text-xs text-muted-foreground">Industry avg: 5.2%</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="text-sm font-medium">Cash on Cash</div>
          <div className="text-2xl font-bold">7.4%</div>
          <div className="text-xs text-muted-foreground">Industry avg: 6.8%</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="text-sm font-medium">ROI</div>
          <div className="text-2xl font-bold">12.3%</div>
          <div className="text-xs text-muted-foreground">Industry avg: 10.5%</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="text-sm font-medium">Appreciation</div>
          <div className="text-2xl font-bold">4.7%</div>
          <div className="text-xs text-muted-foreground">Industry avg: 3.9%</div>
        </CardContent>
      </Card>
    </div>
  )
}

