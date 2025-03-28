"use client"

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

// Sample data for price trends
const priceData = [
  { month: "Jan", downtown: 750000, uptown: 680000, midtown: 820000, westside: 550000, eastside: 920000 },
  { month: "Feb", downtown: 755000, uptown: 682000, midtown: 825000, westside: 552000, eastside: 925000 },
  { month: "Mar", downtown: 762000, uptown: 685000, midtown: 830000, westside: 555000, eastside: 932000 },
  { month: "Apr", downtown: 770000, uptown: 690000, midtown: 838000, westside: 558000, eastside: 940000 },
  { month: "May", downtown: 775000, uptown: 695000, midtown: 845000, westside: 560000, eastside: 950000 },
  { month: "Jun", downtown: 782000, uptown: 700000, midtown: 855000, westside: 565000, eastside: 965000 },
  { month: "Jul", downtown: 790000, uptown: 705000, midtown: 865000, westside: 570000, eastside: 980000 },
  { month: "Aug", downtown: 795000, uptown: 710000, midtown: 875000, westside: 575000, eastside: 990000 },
  { month: "Sep", downtown: 800000, uptown: 715000, midtown: 885000, westside: 580000, eastside: 1000000 },
  { month: "Oct", downtown: 805000, uptown: 720000, midtown: 895000, westside: 585000, eastside: 1010000 },
  { month: "Nov", downtown: 810000, uptown: 725000, midtown: 905000, westside: 590000, eastside: 1020000 },
  { month: "Dec", downtown: 815000, uptown: 730000, midtown: 915000, westside: 595000, eastside: 1030000 },
]

// Detailed data with projections
const detailedPriceData = [
  ...priceData,
  {
    month: "Jan (Proj)",
    downtown: 820000,
    uptown: 735000,
    midtown: 925000,
    westside: 600000,
    eastside: 1040000,
    projected: true,
  },
  {
    month: "Feb (Proj)",
    downtown: 825000,
    uptown: 740000,
    midtown: 935000,
    westside: 605000,
    eastside: 1050000,
    projected: true,
  },
  {
    month: "Mar (Proj)",
    downtown: 830000,
    uptown: 745000,
    midtown: 945000,
    westside: 610000,
    eastside: 1060000,
    projected: true,
  },
]

interface PriceTrendsChartProps {
  detailed?: boolean
}

export function PriceTrendsChart({ detailed = false }: PriceTrendsChartProps) {
  const data = detailed ? detailedPriceData : priceData

  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`
    }
    return `$${(value / 1000).toFixed(0)}K`
  }

  const formatTooltipValue = (value: number) => {
    return `$${value.toLocaleString()}`
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
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
          <Line type="monotone" dataKey="downtown" name="Downtown" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uptown" name="Uptown" stroke="#82ca9d" />
          <Line type="monotone" dataKey="midtown" name="Midtown" stroke="#ffc658" />
          <Line type="monotone" dataKey="westside" name="Westside" stroke="#ff8042" />
          <Line type="monotone" dataKey="eastside" name="Eastside" stroke="#0088fe" />

          {detailed && <ReferenceLine x="Dec" stroke="red" label="Current" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

