"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Downtown",
    growth: 5.2,
    transactions: 120,
  },
  {
    name: "Uptown",
    growth: 4.8,
    transactions: 98,
  },
  {
    name: "Midtown",
    growth: 6.1,
    transactions: 86,
  },
  {
    name: "Westside",
    growth: 3.9,
    transactions: 99,
  },
  {
    name: "Eastside",
    growth: 7.2,
    transactions: 85,
  },
  {
    name: "Southside",
    growth: 4.5,
    transactions: 65,
  },
]

export function MarketTrendsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="growth" name="Growth %" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="transactions" name="Transactions" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

