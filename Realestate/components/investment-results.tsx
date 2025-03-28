import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface InvestmentResultsProps {
  results: {
    financialMetrics: {
      purchasePrice: number
      downPayment: number
      loanAmount: number
      interestRate: number
      loanTerm: number
      monthlyMortgage: number
      estimatedRent: number
      propertyTax: number
      insurance: number
      maintenance: number
      propertyManagement: number
      vacancy: number
      utilities: number
      hoa: number
      monthlyCashFlow: number
      annualCashFlow: number
      cashOnCashReturn: number
      capRate: number
      grossRentMultiplier: number
      netOperatingIncome: number
    }
    appreciationAnalysis: {
      estimatedAnnualAppreciation: number
      fiveYearValue: number
      tenYearValue: number
      twentyYearValue: number
    }
    riskAssessment: {
      overallRisk: string
      marketRisk: string
      cashFlowRisk: string
      appreciationRisk: string
      liquidityRisk: string
      interestRateRisk: string
    }
    recommendations: string[]
  }
}

export function InvestmentResults({ results }: InvestmentResultsProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`
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

  // Helper function to determine if a metric is good or bad
  const getMetricClass = (metric: string, value: number) => {
    if (metric === "cashOnCashReturn" || metric === "capRate") {
      return value >= 5 ? "text-green-600" : value >= 3 ? "text-amber-600" : "text-red-600"
    }
    if (metric === "monthlyCashFlow" || metric === "annualCashFlow") {
      return value > 0 ? "text-green-600" : "text-red-600"
    }
    return ""
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Analysis Results</CardTitle>
        <CardDescription>AI-powered investment analysis and recommendations</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Monthly Cash Flow</div>
                <div
                  className={`text-2xl font-bold ${getMetricClass("monthlyCashFlow", results.financialMetrics.monthlyCashFlow)}`}
                >
                  {formatCurrency(results.financialMetrics.monthlyCashFlow)}
                </div>
                <Progress
                  value={Math.min(
                    Math.max(
                      (results.financialMetrics.monthlyCashFlow / (results.financialMetrics.estimatedRent * 0.3)) * 100,
                      0,
                    ),
                    100,
                  )}
                  className="h-2"
                />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Cash on Cash Return</div>
                <div
                  className={`text-2xl font-bold ${getMetricClass("cashOnCashReturn", results.financialMetrics.cashOnCashReturn)}`}
                >
                  {formatPercentage(results.financialMetrics.cashOnCashReturn)}
                </div>
                <Progress value={Math.min(results.financialMetrics.cashOnCashReturn * 10, 100)} className="h-2" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Cap Rate</div>
                <div className={`text-2xl font-bold ${getMetricClass("capRate", results.financialMetrics.capRate)}`}>
                  {formatPercentage(results.financialMetrics.capRate)}
                </div>
                <Progress value={Math.min(results.financialMetrics.capRate * 10, 100)} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Annual Appreciation</div>
                <div className="text-2xl font-bold text-green-600">
                  {formatPercentage(results.appreciationAnalysis.estimatedAnnualAppreciation)}
                </div>
                <Progress
                  value={Math.min(results.appreciationAnalysis.estimatedAnnualAppreciation * 20, 100)}
                  className="h-2"
                />
              </div>
            </div>

            <div className="pt-2">
              <div className="text-sm font-medium mb-2">Overall Risk Assessment</div>
              <div className="flex items-center gap-2">
                <Badge variant={getRiskBadgeVariant(results.riskAssessment.overallRisk)}>
                  {results.riskAssessment.overallRisk} Risk
                </Badge>
                <span className="text-sm text-muted-foreground">Based on market conditions and property specifics</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-sm font-medium mb-2">Property Value Projection</div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">5 Years</div>
                  <div className="font-medium">{formatCurrency(results.appreciationAnalysis.fiveYearValue)}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">10 Years</div>
                  <div className="font-medium">{formatCurrency(results.appreciationAnalysis.tenYearValue)}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">20 Years</div>
                  <div className="font-medium">{formatCurrency(results.appreciationAnalysis.twentyYearValue)}</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="metrics" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Purchase Price</div>
                <div className="font-medium">{formatCurrency(results.financialMetrics.purchasePrice)}</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Down Payment</div>
                <div className="font-medium">{formatCurrency(results.financialMetrics.downPayment)}</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Loan Amount</div>
                <div className="font-medium">{formatCurrency(results.financialMetrics.loanAmount)}</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Interest Rate</div>
                <div className="font-medium">{formatPercentage(results.financialMetrics.interestRate)}</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Monthly Mortgage</div>
                <div className="font-medium">{formatCurrency(results.financialMetrics.monthlyMortgage)}</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Monthly Rent</div>
                <div className="font-medium">{formatCurrency(results.financialMetrics.estimatedRent)}</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Net Operating Income</div>
                <div className="font-medium">{formatCurrency(results.financialMetrics.netOperatingIncome)}</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Gross Rent Multiplier</div>
                <div className="font-medium">{results.financialMetrics.grossRentMultiplier.toFixed(1)}</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4 pt-4">
            <ul className="space-y-2">
              {results.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-sm">{recommendation}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

