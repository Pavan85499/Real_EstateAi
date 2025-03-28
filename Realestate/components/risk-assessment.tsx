import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface RiskAssessmentProps {
  data: {
    overallRisk: string
    marketRisk: string
    cashFlowRisk: string
    appreciationRisk: string
    liquidityRisk: string
    interestRateRisk: string
  }
}

export function RiskAssessment({ data }: RiskAssessmentProps) {
  // Helper function to determine progress value based on risk level
  const getRiskValue = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "very low":
        return 10
      case "low":
        return 30
      case "moderate":
        return 50
      case "high":
        return 75
      case "very high":
        return 95
      default:
        return 50
    }
  }

  // Helper function to determine badge color based on risk level
  const getRiskBadgeVariant = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "very low":
      case "low":
        return "default"
      case "moderate":
        return "secondary"
      case "high":
      case "very high":
        return "destructive"
      default:
        return "outline"
    }
  }

  // Helper function to get risk description
  const getRiskDescription = (riskType: string, level: string) => {
    const descriptions = {
      marketRisk: {
        low: "The local real estate market is stable with strong fundamentals.",
        moderate: "The market shows some volatility but remains generally stable.",
        high: "The market shows significant volatility or signs of potential downturn.",
      },
      cashFlowRisk: {
        low: "Strong positive cash flow with good margins for unexpected expenses.",
        moderate: "Positive cash flow but with limited margins for unexpected expenses.",
        high: "Minimal cash flow or negative cash flow, high risk of additional capital requirements.",
      },
      appreciationRisk: {
        low: "Property is in an area with consistent historical appreciation.",
        moderate: "Property may experience average appreciation with some volatility.",
        high: "Property is in an area with uncertain or potentially negative appreciation.",
      },
      liquidityRisk: {
        low: "Property is in a high-demand area with quick average days on market.",
        moderate: "Property may take average time to sell if needed.",
        high: "Property may be difficult to sell quickly if needed.",
      },
      interestRateRisk: {
        low: "Fixed-rate financing or minimal impact from rate changes.",
        moderate: "Some exposure to interest rate changes but manageable.",
        high: "High exposure to interest rate increases that could significantly impact returns.",
      },
    }

    const riskKey = riskType as keyof typeof descriptions
    const levelKey = level.toLowerCase() as keyof (typeof descriptions)[keyof typeof descriptions]

    // Default to moderate description if specific level not found
    return descriptions[riskKey]?.[levelKey] || descriptions[riskKey]?.moderate || "Risk assessment not available."
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Overall Risk Assessment</span>
          <Badge variant={getRiskBadgeVariant(data.overallRisk)}>{data.overallRisk}</Badge>
        </div>
        <Progress value={getRiskValue(data.overallRisk)} className="h-2" />
        <p className="text-sm text-muted-foreground">
          This investment has an overall {data.overallRisk.toLowerCase()} risk profile based on our AI analysis of
          multiple risk factors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Market Risk</span>
              <Badge variant={getRiskBadgeVariant(data.marketRisk)}>{data.marketRisk}</Badge>
            </div>
            <Progress value={getRiskValue(data.marketRisk)} className="h-2" />
            <p className="text-xs text-muted-foreground">{getRiskDescription("marketRisk", data.marketRisk)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Cash Flow Risk</span>
              <Badge variant={getRiskBadgeVariant(data.cashFlowRisk)}>{data.cashFlowRisk}</Badge>
            </div>
            <Progress value={getRiskValue(data.cashFlowRisk)} className="h-2" />
            <p className="text-xs text-muted-foreground">{getRiskDescription("cashFlowRisk", data.cashFlowRisk)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Appreciation Risk</span>
              <Badge variant={getRiskBadgeVariant(data.appreciationRisk)}>{data.appreciationRisk}</Badge>
            </div>
            <Progress value={getRiskValue(data.appreciationRisk)} className="h-2" />
            <p className="text-xs text-muted-foreground">
              {getRiskDescription("appreciationRisk", data.appreciationRisk)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Liquidity Risk</span>
              <Badge variant={getRiskBadgeVariant(data.liquidityRisk)}>{data.liquidityRisk}</Badge>
            </div>
            <Progress value={getRiskValue(data.liquidityRisk)} className="h-2" />
            <p className="text-xs text-muted-foreground">{getRiskDescription("liquidityRisk", data.liquidityRisk)}</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Interest Rate Risk</span>
              <Badge variant={getRiskBadgeVariant(data.interestRateRisk)}>{data.interestRateRisk}</Badge>
            </div>
            <Progress value={getRiskValue(data.interestRateRisk)} className="h-2" />
            <p className="text-xs text-muted-foreground">
              {getRiskDescription("interestRateRisk", data.interestRateRisk)}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 border rounded-lg bg-muted/50">
        <h4 className="font-medium mb-2">Risk Mitigation Strategies</h4>
        <ul className="space-y-1 text-sm">
          <li>• Maintain a cash reserve of 3-6 months of expenses for unexpected costs</li>
          <li>• Consider a fixed-rate mortgage to protect against interest rate increases</li>
          <li>• Invest in property improvements that can increase rental income</li>
          <li>• Implement thorough tenant screening to reduce vacancy and non-payment risks</li>
          <li>• Diversify your real estate portfolio across different markets and property types</li>
        </ul>
      </div>
    </div>
  )
}

