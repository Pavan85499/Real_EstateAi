"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { InvestmentResults } from "@/components/investment-results"
import { CashFlowAnalysis } from "@/components/cash-flow-analysis"
import { ComparativeAnalysis } from "@/components/comparative-analysis"
import { RiskAssessment } from "@/components/risk-assessment"
import { Download, Filter } from "lucide-react"

const formSchema = z.object({
  purchasePrice: z.string().min(1, { message: "Purchase price is required" }),
  downPayment: z.string().min(1, { message: "Down payment is required" }),
  interestRate: z.string().min(1, { message: "Interest rate is required" }),
  loanTerm: z.string().min(1, { message: "Loan term is required" }),
  monthlyRent: z.string().min(1, { message: "Monthly rent is required" }),
  propertyTax: z.string().min(1, { message: "Property tax is required" }),
  insurance: z.string().min(1, { message: "Insurance is required" }),
  maintenance: z.string().min(1, { message: "Maintenance is required" }),
  propertyManagement: z.string().min(1, { message: "Property management is required" }),
  vacancy: z.string().min(1, { message: "Vacancy rate is required" }),
  utilities: z.string().optional(),
  hoa: z.string().optional(),
  appreciationRate: z.string().min(1, { message: "Appreciation rate is required" }),
  holdingPeriod: z.string().min(1, { message: "Holding period is required" }),
})

export default function InvestmentAnalysisPage() {
  const [investmentResults, setInvestmentResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      purchasePrice: "750000",
      downPayment: "150000",
      interestRate: "4.5",
      loanTerm: "30",
      monthlyRent: "3500",
      propertyTax: "750",
      insurance: "200",
      maintenance: "300",
      propertyManagement: "280",
      vacancy: "5",
      utilities: "0",
      hoa: "0",
      appreciationRate: "3",
      holdingPeriod: "10",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      // In a real application, this would call an API to get the AI analysis
      // Simulate API call
      const response = await fetch("/api/investment-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          purchasePrice: Number.parseFloat(values.purchasePrice),
          downPayment: Number.parseFloat(values.downPayment),
          interestRate: Number.parseFloat(values.interestRate),
          loanTerm: Number.parseInt(values.loanTerm),
          monthlyRent: Number.parseFloat(values.monthlyRent),
          propertyTax: Number.parseFloat(values.propertyTax),
          insurance: Number.parseFloat(values.insurance),
          maintenance: Number.parseFloat(values.maintenance),
          propertyManagement: Number.parseFloat(values.propertyManagement),
          vacancy: Number.parseFloat(values.vacancy),
          utilities: Number.parseFloat(values.utilities || "0"),
          hoa: Number.parseFloat(values.hoa || "0"),
          appreciationRate: Number.parseFloat(values.appreciationRate),
          holdingPeriod: Number.parseInt(values.holdingPeriod),
        }),
      })

      const data = await response.json()
      setInvestmentResults(data)
    } catch (error) {
      console.error("Error analyzing investment:", error)
      // In a real application, you would handle errors appropriately
    } finally {
      setIsLoading(false)
    }
  }

  // Mock investment results for initial display
  const mockResults = {
    financialMetrics: {
      purchasePrice: 750000,
      downPayment: 150000,
      loanAmount: 600000,
      interestRate: 4.5,
      loanTerm: 30,
      monthlyMortgage: 3040,
      estimatedRent: 3500,
      propertyTax: 750,
      insurance: 200,
      maintenance: 300,
      propertyManagement: 280,
      vacancy: 175,
      utilities: 0,
      hoa: 0,
      monthlyCashFlow: 755,
      annualCashFlow: 9060,
      cashOnCashReturn: 6.04,
      capRate: 5.1,
      grossRentMultiplier: 17.9,
      netOperatingIncome: 38250,
    },
    appreciationAnalysis: {
      estimatedAnnualAppreciation: 4.7,
      fiveYearValue: 943125,
      tenYearValue: 1186950,
      twentyYearValue: 1880000,
    },
    riskAssessment: {
      overallRisk: "Moderate",
      marketRisk: "Low",
      cashFlowRisk: "Low",
      appreciationRisk: "Moderate",
      liquidityRisk: "Moderate",
      interestRateRisk: "High",
    },
    recommendations: [
      "This property shows strong cash flow potential with a positive monthly income",
      "The cap rate of 5.1% is above average for this market area",
      "Consider refinancing in 3-5 years if interest rates decrease",
      "Property is in a high-growth area with good appreciation potential",
      "Recommend setting aside 10% of rental income for future capital expenditures",
    ],
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Investment Analysis"
        description="Analyze potential real estate investments with AI-powered insights."
      >
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
            <CardTitle className="text-sm font-medium">Average Cap Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2%</div>
            <p className="text-xs text-muted-foreground">Market average for similar properties</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cash on Cash Return</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8%</div>
            <p className="text-xs text-muted-foreground">Market average for similar properties</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Price Appreciation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">4.7%</div>
            <p className="text-xs text-muted-foreground">Annual appreciation rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Rental Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.6%</div>
            <p className="text-xs text-muted-foreground">Annual rental yield</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Investment Calculator</CardTitle>
            <CardDescription>Enter property details to analyze investment potential</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <div className="font-medium">Property Details</div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="purchasePrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Purchase Price ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="downPayment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Down Payment ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-medium">Financing</div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="interestRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Interest Rate (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="loanTerm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Loan Term (years)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select loan term" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="15">15 years</SelectItem>
                              <SelectItem value="20">20 years</SelectItem>
                              <SelectItem value="30">30 years</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-medium">Income & Expenses</div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="monthlyRent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Rent ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="propertyTax"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Tax ($/month)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="insurance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Insurance ($/month)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="maintenance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Maintenance ($/month)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="propertyManagement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Management ($/month)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="vacancy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vacancy Rate (%)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="utilities"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Utilities ($/month)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormDescription>If owner-paid</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="hoa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>HOA Fees ($/month)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormDescription>If applicable</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-medium">Long-term Analysis</div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="appreciationRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Appreciation Rate (%/year)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="holdingPeriod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Holding Period (years)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select holding period" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="5">5 years</SelectItem>
                              <SelectItem value="10">10 years</SelectItem>
                              <SelectItem value="15">15 years</SelectItem>
                              <SelectItem value="20">20 years</SelectItem>
                              <SelectItem value="30">30 years</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Analyzing..." : "Analyze Investment"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <InvestmentResults results={investmentResults || mockResults} />
      </div>

      <Tabs defaultValue="cashflow" className="space-y-4">
        <TabsList>
          <TabsTrigger value="cashflow">Cash Flow Analysis</TabsTrigger>
          <TabsTrigger value="comparative">Comparative Analysis</TabsTrigger>
          <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
          <TabsTrigger value="scenarios">Scenario Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="cashflow" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cash Flow Analysis</CardTitle>
              <CardDescription>Monthly and annual cash flow breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <CashFlowAnalysis data={investmentResults?.financialMetrics || mockResults.financialMetrics} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparative" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Comparative Investment Analysis</CardTitle>
              <CardDescription>Compare this investment with other investment types and properties</CardDescription>
            </CardHeader>
            <CardContent>
              <ComparativeAnalysis />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risk" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment</CardTitle>
              <CardDescription>AI-powered risk analysis for this investment</CardDescription>
            </CardHeader>
            <CardContent>
              <RiskAssessment data={investmentResults?.riskAssessment || mockResults.riskAssessment} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scenarios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scenario Analysis</CardTitle>
              <CardDescription>Explore different investment scenarios and their outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Scenario analysis tools will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

