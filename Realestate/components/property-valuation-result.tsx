import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PropertyValuationResult({ result }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Valuation Results</CardTitle>
        <CardDescription>Based on our AI analysis of market data and comparable properties</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Estimated Value</h3>
            <div className="text-4xl font-bold text-primary">{result.estimatedValue}</div>
            <p className="text-sm text-muted-foreground">
              Value Range: {result.valueRange} (Confidence: {result.confidenceScore})
            </p>
          </div>

          <Tabs defaultValue="comparables">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="comparables">Comparables</TabsTrigger>
              <TabsTrigger value="market">Market Trends</TabsTrigger>
              <TabsTrigger value="investment">Investment</TabsTrigger>
            </TabsList>

            <TabsContent value="comparables" className="space-y-4 pt-4">
              <h4 className="text-sm font-medium">Comparable Properties</h4>
              <div className="space-y-4">
                {result.comparableProperties.map((property, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <div className="font-medium">{property.address}</div>
                      <div className="text-sm text-muted-foreground">Sold {property.saleDate}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{property.salePrice}</div>
                      <div className="text-sm text-muted-foreground">{property.similarity} similar</div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="market" className="space-y-4 pt-4">
              <h4 className="text-sm font-medium">Market Growth Trends</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Neighborhood</div>
                  <div className="text-xl font-bold text-green-600">{result.marketTrends.neighborhoodGrowth}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">City</div>
                  <div className="text-xl font-bold text-green-600">{result.marketTrends.cityGrowth}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">State</div>
                  <div className="text-xl font-bold text-green-600">{result.marketTrends.stateGrowth}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground pt-2">
                Annual growth rates based on historical data and AI predictions
              </p>
            </TabsContent>

            <TabsContent value="investment" className="space-y-4 pt-4">
              <h4 className="text-sm font-medium">Investment Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Estimated Monthly Rent</div>
                  <div className="text-xl font-bold">{result.investmentMetrics.estimatedRent}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Cap Rate</div>
                  <div className="text-xl font-bold">{result.investmentMetrics.capRate}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Cash on Cash Return</div>
                  <div className="text-xl font-bold">{result.investmentMetrics.cashOnCashReturn}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Break Even Point</div>
                  <div className="text-xl font-bold">{result.investmentMetrics.breakEvenPoint}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground pt-2">
                Based on current market conditions and 20% down payment
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}

