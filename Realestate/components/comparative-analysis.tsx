"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for comparative analysis
const investmentTypes = [
  {
    name: "This Property",
    roi: 6.04,
    risk: 3,
    liquidity: 2,
    effort: 4,
    taxBenefits: 4,
    leverage: 5,
    appreciation: 4.7,
  },
  {
    name: "Average Rental",
    roi: 5.2,
    risk: 3,
    liquidity: 2,
    effort: 4,
    taxBenefits: 4,
    leverage: 5,
    appreciation: 3.9,
  },
  { name: "S&P 500", roi: 10.5, risk: 4, liquidity: 5, effort: 1, taxBenefits: 2, leverage: 1, appreciation: 0 },
  { name: "Bonds", roi: 3.5, risk: 1, liquidity: 4, effort: 1, taxBenefits: 1, leverage: 1, appreciation: 0 },
  { name: "REITs", roi: 8.7, risk: 3, liquidity: 4, effort: 1, taxBenefits: 3, leverage: 2, appreciation: 0 },
  { name: "CDs", roi: 2.2, risk: 1, liquidity: 3, effort: 1, taxBenefits: 1, leverage: 1, appreciation: 0 },
]

// Sample data for similar properties
const similarProperties = [
  { address: "123 Main St", price: 720000, roi: 5.8, capRate: 4.9, cashFlow: 650, appreciation: 4.5 },
  { address: "456 Oak Ave", price: 750000, roi: 6.1, capRate: 5.2, cashFlow: 780, appreciation: 4.7 },
  { address: "789 Pine Ln", price: 780000, roi: 5.9, capRate: 5.0, cashFlow: 720, appreciation: 4.6 },
  { address: "101 Cedar Rd", price: 710000, roi: 6.3, capRate: 5.3, cashFlow: 800, appreciation: 4.4 },
  { address: "222 Elm Blvd", price: 760000, roi: 5.7, capRate: 4.8, cashFlow: 630, appreciation: 4.8 },
]

export function ComparativeAnalysis() {
  const [comparisonType, setComparisonType] = useState("investment-types")

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="font-medium">Comparative Analysis</div>
        <Select value={comparisonType} onValueChange={setComparisonType}>
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Select comparison type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="investment-types">Investment Types</SelectItem>
            <SelectItem value="similar-properties">Similar Properties</SelectItem>
            <SelectItem value="investment-factors">Investment Factors</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {comparisonType === "investment-types" && (
        <div className="space-y-4">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={investmentTypes}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" label={{ value: "ROI (%)", angle: -90, position: "insideLeft" }} />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  label={{ value: "Appreciation (%)", angle: 90, position: "insideRight" }}
                />
                <Tooltip
                  formatter={(value: number, name: string) => {
                    if (name === "roi" || name === "appreciation")
                      return [`${value}%`, name === "roi" ? "ROI" : "Appreciation"]
                    return [value, name]
                  }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="roi" name="ROI (%)" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="appreciation" name="Appreciation (%)" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-sm text-muted-foreground text-center">
            Comparison of ROI and appreciation rates across different investment types
          </div>
        </div>
      )}

      {comparisonType === "similar-properties" && (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Property</th>
                  <th className="text-right py-2 px-4">Price</th>
                  <th className="text-right py-2 px-4">ROI</th>
                  <th className="text-right py-2 px-4">Cap Rate</th>
                  <th className="text-right py-2 px-4">Cash Flow</th>
                  <th className="text-right py-2 px-4">Appreciation</th>
                </tr>
              </thead>
              <tbody>
                {similarProperties.map((property, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                    <td className="py-2 px-4">{property.address}</td>
                    <td className="text-right py-2 px-4">{formatCurrency(property.price)}</td>
                    <td className="text-right py-2 px-4">{formatPercentage(property.roi)}</td>
                    <td className="text-right py-2 px-4">{formatPercentage(property.capRate)}</td>
                    <td className="text-right py-2 px-4">{formatCurrency(property.cashFlow)}</td>
                    <td className="text-right py-2 px-4">{formatPercentage(property.appreciation)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={similarProperties}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="address" />
                <YAxis />
                <Tooltip
                  formatter={(value: number, name: string) => {
                    if (name === "roi" || name === "capRate" || name === "appreciation") return [`${value}%`, name]
                    if (name === "cashFlow") return [formatCurrency(value), "Monthly Cash Flow"]
                    if (name === "price") return [formatCurrency(value), "Price"]
                    return [value, name]
                  }}
                />
                <Legend />
                <Bar dataKey="roi" name="ROI (%)" fill="#8884d8" />
                <Bar dataKey="capRate" name="Cap Rate (%)" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {comparisonType === "investment-factors" && (
        <div className="space-y-4">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={150} data={investmentTypes}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={30} domain={[0, 5]} />
                <Radar name="ROI" dataKey="roi" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Risk" dataKey="risk" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Radar name="Liquidity" dataKey="liquidity" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                <Radar name="Tax Benefits" dataKey="taxBenefits" stroke="#ff8042" fill="#ff8042" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-sm text-muted-foreground text-center">
            Radar chart comparing different investment factors across investment types
          </div>
        </div>
      )}
    </div>
  )
}

