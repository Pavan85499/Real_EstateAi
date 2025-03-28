"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface PropertyPerformanceChartProps {
  properties: Array<{
    id: string
    address: string
    city: string
    purchasePrice: number
    currentValue: number
    monthlyRent: number
  }>
}

export function PropertyPerformanceChart({ properties }: PropertyPerformanceChartProps) {
  // Generate sample historical data for each property
  // In a real application, this would come from your database
  const generateHistoricalData = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return months.map((month, index) => {
      const data: { [key: string]: any } = { month }

      properties.forEach((property) => {
        // Create a growth curve from purchase price to current value
        const growthFactor = property.currentValue / property.purchasePrice
        const monthlyGrowthRate = Math.pow(growthFactor, 1 / 12)
        const valueAtMonth = property.purchasePrice * Math.pow(monthlyGrowthRate, index)

        // Use a shortened version of the address as the key
        const key = property.address.split(",")[0].trim()
        data[key] = Math.round(valueAtMonth)
      })

      return data
    })
  }

  const historicalData = generateHistoricalData()

  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`
    }
    return `$${(value / 1000).toFixed(0)}K`
  }

  const formatTooltipValue = (value: number) => {
    return `$${value.toLocaleString()}`
  }

  // Generate a unique color for each property
  const getLineColor = (index: number) => {
    const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088fe", "#00C49F", "#FFBB28"]
    return colors[index % colors.length]
  }

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={historicalData}
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
            formatter={(value: number) => [formatTooltipValue(value), "Value"]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Legend />
          {properties.map((property, index) => (
            <Line
              key={property.id}
              type="monotone"
              dataKey={property.address.split(",")[0].trim()}
              name={property.address.split(",")[0].trim()}
              stroke={getLineColor(index)}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

