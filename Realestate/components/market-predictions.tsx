"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for price predictions
const priceData = [
  { month: "Jan", actual: 750000, predicted: 750000, lower: 750000, upper: 750000 },
  { month: "Feb", actual: 755000, predicted: 753000, lower: 753000, upper: 753000 },
  { month: "Mar", actual: 762000, predicted: 758000, lower: 758000, upper: 758000 },
  { month: "Apr", actual: 770000, predicted: 765000, lower: 765000, upper: 765000 },
  { month: "May", actual: 775000, predicted: 772000, lower: 772000, upper: 772000 },
  { month: "Jun", actual: 782000, predicted: 780000, lower: 780000, upper: 780000 },
  { month: "Jul", actual: 790000, predicted: 788000, lower: 788000, upper: 788000 },
  { month: "Aug", actual: 795000, predicted: 797000, lower: 797000, upper: 797000 },
  { month: "Sep", actual: 800000, predicted: 805000, lower: 805000, upper: 805000 },
  { month: "Oct", actual: 805000, predicted: 812000, lower: 812000, upper: 812000 },
  { month: "Nov", actual: 810000, predicted: 820000, lower: 820000, upper: 820000 },
  { month: "Dec", actual: 815000, predicted: 825000, lower: 825000, upper: 825000 },
  { month: "Jan (Proj)", actual: null, predicted: 830000, lower: 820000, upper: 840000 },
  { month: "Feb (Proj)", actual: null, predicted: 835000, lower: 820000, upper: 850000 },
  { month: "Mar (Proj)", actual: null, predicted: 842000, lower: 825000, upper: 860000 },
  { month: "Apr (Proj)", actual: null, predicted: 850000, lower: 830000, upper: 870000 },
  { month: "May (Proj)", actual: null, predicted: 858000, lower: 835000, upper: 880000 },
  { month: "Jun (Proj)", actual: null, predicted: 865000, lower: 840000, upper: 890000 },
]

export function MarketPredictions() {
  const [region, setRegion] = useState("downtown")
  const [scenario, setScenario] = useState("baseline")

  // Adjust prediction data based on selected scenario
  const getScenarioData = () => {
    if (scenario === "optimistic") {
      return priceData.map((item) => ({
        ...item,
        predicted: item.predicted ? Math.round(item.predicted * 1.05) : null,
        upper: item.upper ? Math.round(item.upper * 1.08) : null,
        lower: item.lower ? Math.round(item.lower * 1.02) : null,
      }))
    } else if (scenario === "pessimistic") {
      return priceData.map((item) => ({
        ...item,
        predicted: item.predicted ? Math.round(item.predicted * 0.95) : null,
        upper: item.upper ? Math.round(item.upper * 0.98) : null,
        lower: item.lower ? Math.round(item.lower * 0.92) : null,
      }))
    }
    return priceData
  }

  const scenarioData = getScenarioData()

  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`
    }
    return `$${(value / 1000).toFixed(0)}K`
  }

  const formatTooltipValue = (value: number) => {
    return value ? `$${value.toLocaleString()}` : "N/A"
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="text-lg font-semibold">AI Price Predictions</div>
        <div className="flex gap-2">
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="downtown">Downtown</SelectItem>
              <SelectItem value="uptown">Uptown</SelectItem>
              <SelectItem value="midtown">Midtown</SelectItem>
              <SelectItem value="westside">Westside</SelectItem>
              <SelectItem value="eastside">Eastside</SelectItem>
            </SelectContent>
          </Select>
          <Select value={scenario} onValueChange={setScenario}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Scenario" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="baseline">Baseline</SelectItem>
              <SelectItem value="optimistic">Optimistic</SelectItem>
              <SelectItem value="pessimistic">Pessimistic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="price" className="space-y-4">
        <TabsList>
          <TabsTrigger value="price">Price Predictions</TabsTrigger>
          <TabsTrigger value="inventory">Inventory Predictions</TabsTrigger>
          <TabsTrigger value="interest">Interest Rate Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="price" className="space-y-4">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={scenarioData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={formatYAxis} />
                <Tooltip
                  formatter={(value: number) => [formatTooltipValue(value), "Price"]}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Legend />
                <ReferenceLine x="Dec" stroke="red" label="Current" />
                <Line
                  type="monotone"
                  dataKey="actual"
                  name="Actual Price"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  name="Predicted Price"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Line
                  type="monotone"
                  dataKey="upper"
                  name="Upper Bound"
                  stroke="#ffc658"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                />
                <Line
                  type="monotone"
                  dataKey="lower"
                  name="Lower Bound"
                  stroke="#ff8042"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium">12-Month Forecast</div>
                <div className="text-2xl font-bold text-green-600">+5.8%</div>
                <div className="text-xs text-muted-foreground">Predicted price growth</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium">Confidence Level</div>
                <div className="text-2xl font-bold">85%</div>
                <div className="text-xs text-muted-foreground">Based on historical accuracy</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium">Price Range (Jun 2024)</div>
                <div className="text-2xl font-bold">
                  ${scenario === "optimistic" ? "840K-890K" : scenario === "pessimistic" ? "775K-820K" : "840K-890K"}
                </div>
                <div className="text-xs text-muted-foreground">Predicted price range</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <div className="h-[400px] flex items-center justify-center text-muted-foreground">
            Inventory prediction data will be displayed here
          </div>
        </TabsContent>

        <TabsContent value="interest" className="space-y-4">
          <div className="h-[400px] flex items-center justify-center text-muted-foreground">
            Interest rate impact analysis will be displayed here
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

