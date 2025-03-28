"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", value: 720000 },
  { month: "Feb", value: 725000 },
  { month: "Mar", value: 730000 },
  { month: "Apr", value: 735000 },
  { month: "May", value: 740000 },
  { month: "Jun", value: 745000 },
  { month: "Jul", value: 750000 },
  { month: "Aug", value: 755000 },
  { month: "Sep", value: 760000 },
  { month: "Oct", value: 765000 },
  { month: "Nov", value: 770000 },
  { month: "Dec", value: 775000 },
]

export function PropertyValuationChart() {
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
          <YAxis tickFormatter={(value) => `$${value / 1000}k`} domain={["dataMin - 50000", "dataMax + 50000"]} />
          <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Estimated Value"]} />
          <Legend />
          <Line type="monotone" dataKey="value" name="Property Value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

