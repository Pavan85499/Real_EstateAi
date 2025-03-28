"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { PriceTrendsChart } from "@/components/price-trends-chart"
import { RegionalComparisonChart } from "@/components/regional-comparison-chart"
import { MarketHealthIndicators } from "@/components/market-health-indicators"
import { MarketPredictions } from "@/components/market-predictions"
import { InventoryTrendsChart } from "@/components/inventory-trends-chart"
import { AlertCircle, Download, Filter } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function MarketInsightsPage() {
  const [marketData, setMarketData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [timeframe, setTimeframe] = useState("1year")

  useEffect(() => {
    // In a real application, this would fetch data from the API
    const fetchMarketInsights = async () => {
      try {
        setIsLoading(true)
        // Simulating API call
        const response = await fetch("/api/market-insights")
        const data = await response.json()
        setMarketData(data)
      } catch (error) {
        console.error("Error fetching market insights:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMarketInsights()
  }, [])

  // Mock data for the page while real data is loading
  const mockData = {
    regions: [
      {
        name: "Downtown",
        priceGrowth: 5.2,
        inventoryChange: -8.5,
        medianDaysOnMarket: 12,
        medianPrice: 750000,
      },
      {
        name: "Uptown",
        priceGrowth: 4.8,
        inventoryChange: -5.2,
        medianDaysOnMarket: 15,
        medianPrice: 680000,
      },
      {
        name: "Midtown",
        priceGrowth: 6.1,
        inventoryChange: -12.3,
        medianDaysOnMarket: 9,
        medianPrice: 820000,
      },
      {
        name: "Westside",
        priceGrowth: 3.9,
        inventoryChange: -2.1,
        medianDaysOnMarket: 18,
        medianPrice: 550000,
      },
      {
        name: "Eastside",
        priceGrowth: 7.2,
        inventoryChange: -15.6,
        medianDaysOnMarket: 7,
        medianPrice: 920000,
      },
    ],
    trends: {
      marketHealth: "Strong",
      buyerDemand: "High",
      sellerAdvantage: "Strong",
      forecastedGrowth: 5.8,
      interestRateTrend: "Stable",
      seasonalityImpact: "Moderate",
    },
    recommendations: [
      "Consider investing in Eastside properties for highest appreciation potential",
      "Downtown remains a strong market for rental income",
      "Midtown shows strong growth with decreasing inventory",
      "Westside offers more affordable entry points with steady growth",
    ],
  }

  const data = marketData || mockData

  return (
    <DashboardShell>
      <DashboardHeader heading="Market Insights" description="AI-powered real estate market analysis and predictions.">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-3.5 w-3.5" />
            <span>Export</span>
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Price Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+5.4%</div>
            <p className="text-xs text-muted-foreground">+0.8% from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Median Days on Market</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">-3 days from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory Change</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">-8.7%</div>
            <p className="text-xs text-muted-foreground">Decreasing inventory trend</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Strong</div>
            <p className="text-xs text-muted-foreground">Seller's market conditions</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="text-lg font-semibold">Market Analysis</div>
        <div className="flex gap-2">
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              {data.regions.map((region) => (
                <SelectItem key={region.name} value={region.name.toLowerCase()}>
                  {region.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last 1 Year</SelectItem>
              <SelectItem value="3years">Last 3 Years</SelectItem>
              <SelectItem value="5years">Last 5 Years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>AI Market Prediction</AlertTitle>
        <AlertDescription>
          Our AI predicts a {data.trends.forecastedGrowth}% price growth in the next 12 months with{" "}
          {data.trends.buyerDemand.toLowerCase()} buyer demand.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="price-trends">Price Trends</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="regional">Regional Comparison</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Price Trends</CardTitle>
                <CardDescription>Historical price trends across different regions</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <PriceTrendsChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Market Health Indicators</CardTitle>
                <CardDescription>Key metrics showing current market conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <MarketHealthIndicators data={data.trends} />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>AI Recommendations</CardTitle>
                <CardDescription>Insights based on current market analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {data.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        {index + 1}
                      </span>
                      <span className="text-sm">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Regional Comparison</CardTitle>
                <CardDescription>Price growth and market activity by region</CardDescription>
              </CardHeader>
              <CardContent>
                <RegionalComparisonChart data={data.regions} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="price-trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Price Trends</CardTitle>
              <CardDescription>Historical and projected price trends with seasonal adjustments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <PriceTrendsChart detailed={true} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Trends</CardTitle>
              <CardDescription>Housing inventory levels and changes over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <InventoryTrendsChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regional" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Regional Market Comparison</CardTitle>
              <CardDescription>Detailed comparison of market metrics across different regions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <RegionalComparisonChart data={data.regions} detailed={true} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Market Predictions</CardTitle>
              <CardDescription>
                AI-powered forecasts and predictive analytics for future market conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <MarketPredictions />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

