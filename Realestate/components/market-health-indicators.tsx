import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface MarketHealthProps {
  data: {
    marketHealth: string
    buyerDemand: string
    sellerAdvantage: string
    forecastedGrowth: number
    interestRateTrend: string
    seasonalityImpact: string
  }
}

export function MarketHealthIndicators({ data }: MarketHealthProps) {
  // Helper function to determine progress value based on string rating
  const getProgressValue = (rating: string) => {
    switch (rating.toLowerCase()) {
      case "very weak":
        return 10
      case "weak":
        return 30
      case "moderate":
        return 50
      case "strong":
        return 75
      case "very strong":
        return 95
      case "low":
        return 30
      case "medium":
        return 50
      case "high":
        return 75
      case "very high":
        return 95
      default:
        return 50
    }
  }

  // Helper function to determine badge color based on string rating
  const getBadgeVariant = (rating: string) => {
    switch (rating.toLowerCase()) {
      case "very weak":
      case "weak":
      case "low":
        return "destructive"
      case "moderate":
      case "medium":
      case "stable":
        return "outline"
      case "strong":
      case "high":
      case "very strong":
      case "very high":
        return "default"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Market Health</span>
          <Badge variant={getBadgeVariant(data.marketHealth)}>{data.marketHealth}</Badge>
        </div>
        <Progress value={getProgressValue(data.marketHealth)} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Buyer Demand</span>
          <Badge variant={getBadgeVariant(data.buyerDemand)}>{data.buyerDemand}</Badge>
        </div>
        <Progress value={getProgressValue(data.buyerDemand)} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Seller's Advantage</span>
          <Badge variant={getBadgeVariant(data.sellerAdvantage)}>{data.sellerAdvantage}</Badge>
        </div>
        <Progress value={getProgressValue(data.sellerAdvantage)} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Forecasted Annual Growth</span>
          <span className="text-sm font-medium text-green-600">+{data.forecastedGrowth}%</span>
        </div>
        <Progress value={data.forecastedGrowth * 10} className="h-2" />
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2">
        <div className="space-y-1">
          <span className="text-sm text-muted-foreground">Interest Rate Trend</span>
          <div className="font-medium">{data.interestRateTrend}</div>
        </div>
        <div className="space-y-1">
          <span className="text-sm text-muted-foreground">Seasonality Impact</span>
          <div className="font-medium">{data.seasonalityImpact}</div>
        </div>
      </div>
    </div>
  )
}

