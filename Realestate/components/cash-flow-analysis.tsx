"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"
import { Card, CardContent } from "@/components/ui/card"

interface CashFlowProps {
  data: {
    purchasePrice: number
    downPayment: number
    loanAmount: number
    interestRate: number
    loanTerm: number
    monthlyMortgage: number
    estimatedRent: number
    propertyTax: number
    insurance: number
    maintenance: number
    propertyManagement: number
    vacancy: number
    utilities: number
    hoa: number
    monthlyCashFlow: number
    annualCashFlow: number
    cashOnCashReturn: number
    capRate: number
    grossRentMultiplier: number
    netOperatingIncome: number
  }
}

export function CashFlowAnalysis({ data }: CashFlowProps) {
  // Format data for the monthly cash flow breakdown chart
  const monthlyData = [
    { name: "Rental Income", value: data.estimatedRent, type: "income" },
    { name: "Mortgage", value: -data.monthlyMortgage, type: "expense" },
    { name: "Property Tax", value: -data.propertyTax, type: "expense" },
    { name: "Insurance", value: -data.insurance, type: "expense" },
    { name: "Maintenance", value: -data.maintenance, type: "expense" },
    { name: "Property Mgmt", value: -data.propertyManagement, type: "expense" },
    { name: "Vacancy", value: -data.vacancy, type: "expense" },
    { name: "Utilities", value: -data.utilities, type: "expense" },
    { name: "HOA", value: -data.hoa, type: "expense" },
    { name: "Net Cash Flow", value: data.monthlyCashFlow, type: "net" },
  ]

  // Format data for the annual cash flow projection
  const annualData = Array.from({ length: 10 }, (_, i) => {
    const year = i + 1
    // Assume 2% annual rent increase
    const rentIncrease = Math.pow(1.02, i)
    // Assume 1.5% annual expense increase
    const expenseIncrease = Math.pow(1.015, i)

    const annualRent = data.estimatedRent * 12 * rentIncrease
    const annualMortgage = data.monthlyMortgage * 12 // Mortgage stays constant
    const annualExpenses =
      (data.propertyTax +
        data.insurance +
        data.maintenance +
        data.propertyManagement +
        data.vacancy +
        data.utilities +
        data.hoa) *
      12 *
      expenseIncrease

    return {
      name: `Year ${year}`,
      cashFlow: annualRent - annualMortgage - annualExpenses,
      cumulativeCashFlow: (annualRent - annualMortgage - annualExpenses) * year,
    }
  })

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm font-medium">Monthly Cash Flow</div>
            <div className={`text-2xl font-bold ${data.monthlyCashFlow > 0 ? "text-green-600" : "text-red-600"}`}>
              {formatCurrency(data.monthlyCashFlow)}
            </div>
            <div className="text-xs text-muted-foreground">Per month</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm font-medium">Annual Cash Flow</div>
            <div className={`text-2xl font-bold ${data.annualCashFlow > 0 ? "text-green-600" : "text-red-600"}`}>
              {formatCurrency(data.annualCashFlow)}
            </div>
            <div className="text-xs text-muted-foreground">Per year</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm font-medium">Cash on Cash Return</div>
            <div
              className={`text-2xl font-bold ${data.cashOnCashReturn >= 5 ? "text-green-600" : data.cashOnCashReturn >= 3 ? "text-amber-600" : "text-red-600"}`}
            >
              {data.cashOnCashReturn.toFixed(2)}%
            </div>
            <div className="text-xs text-muted-foreground">Annual return on investment</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <div className="font-medium">Monthly Cash Flow Breakdown</div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlyData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `$${Math.abs(value)}`} />
              <Tooltip
                formatter={(value: number) => [`${value < 0 ? "-" : ""}${formatCurrency(Math.abs(value))}`, "Amount"]}
                labelFormatter={(label) => `${label}`}
              />
              <Legend />
              <ReferenceLine y={0} stroke="#000" />
              <Bar
                dataKey="value"
                name="Amount"
                fill={(data) => {
                  if (data.type === "income") return "#4ade80"
                  if (data.type === "expense") return "#f87171"
                  return "#60a5fa"
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-medium">10-Year Cash Flow Projection</div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={annualData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `$${Math.abs(value / 1000)}k`} />
              <Tooltip
                formatter={(value: number) => [formatCurrency(value), "Cash Flow"]}
                labelFormatter={(label) => `${label}`}
              />
              <Legend />
              <Bar dataKey="cashFlow" name="Annual Cash Flow" fill="#4ade80" />
              <Bar dataKey="cumulativeCashFlow" name="Cumulative Cash Flow" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

