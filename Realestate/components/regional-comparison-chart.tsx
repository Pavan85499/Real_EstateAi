"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface RegionData {
  name: string
  priceGrowth: number
  inventoryChange: number
  medianDaysOnMarket: number
  medianPrice: number
}

interface RegionalComparisonChartProps {
  data: RegionData[]
  detailed?: boolean
}

export function RegionalComparisonChart({ data, detailed = false }: RegionalComparisonChartProps) {
  // Transform data for the chart
  const chartData = data.map((region) => ({
    name: region.name,
    priceGrowth: region.priceGrowth,
    inventoryChange: region.inventoryChange,
    daysOnMarket: region.medianDaysOnMarket,
    medianPrice: region.medianPrice / 1000, // Convert to thousands for better display
  }))

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088fe"]

  const formatTooltipValue = (value: number, name: string) => {
    if (name === "medianPrice") {
      return [`$${value}K`, "Median Price"]
    }
    if (name === "priceGrowth") {
      return [`${value}%`, "Price Growth"]
    }
    if (name === "inventoryChange") {
      return [`${value}%`, "Inventory Change"]
    }
    if (name === "daysOnMarket") {
      return [`${value} days`, "Days on Market"]
    }
    return [value, name]
  }

  return (
    <div className={`h-[${detailed ? "500px" : "300px"}] w-full`}>
      <ResponsiveContainer width="100%" height="100%">
        {detailed ? (
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip formatter={formatTooltipValue} />
            <Legend />
            <Bar dataKey="priceGrowth" name="Price Growth (%)" fill="#8884d8" />
            <Bar dataKey="inventoryChange" name="Inventory Change (%)" fill="#82ca9d" />
            <Bar dataKey="daysOnMarket" name="Days on Market" fill="#ffc658" />
            <Bar dataKey="medianPrice" name="Median Price ($K)" fill="#ff8042" />
          </BarChart>
        ) : (
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={formatTooltipValue} />
            <Legend />
            <Bar dataKey="priceGrowth" name="Price Growth (%)" fill="#8884d8" />
            <Bar dataKey="inventoryChange" name="Inventory Change (%)" fill="#82ca9d" />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}

