"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

// Sample data for inventory trends
const inventoryData = [
  { month: "Jan", active: 1200, new: 320, sold: 280 },
  { month: "Feb", active: 1240, new: 350, sold: 310 },
  { month: "Mar", active: 1280, new: 380, sold: 340 },
  { month: "Apr", active: 1320, new: 410, sold: 370 },
  { month: "May", active: 1250, new: 390, sold: 460 },
  { month: "Jun", active: 1180, new: 370, sold: 440 },
  { month: "Jul", active: 1120, new: 350, sold: 410 },
  { month: "Aug", active: 1060, new: 330, sold: 390 },
  { month: "Sep", active: 1010, new: 310, sold: 360 },
  { month: "Oct", active: 960, new: 290, sold: 340 },
  { month: "Nov", active: 920, new: 270, sold: 310 },
  { month: "Dec", active: 880, new: 250, sold: 290 },
  { month: "Jan (Proj)", active: 840, new: 230, sold: 270, projected: true },
  { month: "Feb (Proj)", active: 800, new: 220, sold: 260, projected: true },
  { month: "Mar (Proj)", active: 780, new: 210, sold: 230, projected: true },
]

export function InventoryTrendsChart() {
  return (
    <div className="h-[500px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={inventoryData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine x="Dec" stroke="red" label="Current" />
          <Area type="monotone" dataKey="active" name="Active Listings" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="new" name="New Listings" stackId="2" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="sold" name="Sold Properties" stackId="3" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

