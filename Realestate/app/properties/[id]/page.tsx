"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  Building,
  Calendar,
  ChevronRight,
  Download,
  Edit,
  Home,
  LineChart,
  MapPin,
  Ruler,
  Trash2,
  TrendingUp,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { PropertyPerformanceChart } from "@/components/property-performance-chart"

// Sample property data - in a real app, you would fetch this from an API
const properties = [
  {
    id: "prop1",
    address: "123 Main Street, Apt 4B",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    type: "Condo",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    purchasePrice: 750000,
    currentValue: 825000,
    monthlyRent: 3500,
    capRate: 5.2,
    cashOnCashReturn: 6.8,
    annualAppreciation: 4.7,
    occupancyStatus: "Occupied",
    leaseEndDate: "2024-12-31",
    maintenanceRequests: 1,
    lastInspection: "2023-10-15",
    yearBuilt: 2010,
    lotSize: "N/A",
    parkingSpaces: 1,
    amenities: ["In-unit Laundry", "Balcony", "Gym", "Pool"],
    tenantName: "John Smith",
    tenantPhone: "(555) 123-4567",
    tenantEmail: "john.smith@example.com",
    leaseStartDate: "2023-01-01",
    securityDeposit: 5000,
    mortgageInfo: {
      lender: "First National Bank",
      loanAmount: 600000,
      interestRate: 4.5,
      monthlyPayment: 3040,
      term: 30,
      startDate: "2022-05-15",
    },
    expenses: [
      { category: "Property Tax", amount: 750, frequency: "monthly" },
      { category: "Insurance", amount: 200, frequency: "monthly" },
      { category: "HOA", amount: 350, frequency: "monthly" },
      { category: "Maintenance", amount: 300, frequency: "monthly" },
      { category: "Property Management", amount: 280, frequency: "monthly" },
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "prop2",
    address: "456 Oak Avenue",
    city: "Austin",
    state: "TX",
    zipCode: "78701",
    type: "Single Family",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2400,
    purchasePrice: 620000,
    currentValue: 680000,
    monthlyRent: 3200,
    capRate: 5.8,
    cashOnCashReturn: 7.2,
    annualAppreciation: 5.1,
    occupancyStatus: "Occupied",
    leaseEndDate: "2024-08-15",
    maintenanceRequests: 0,
    lastInspection: "2023-11-20",
    yearBuilt: 2005,
    lotSize: "0.25 acres",
    parkingSpaces: 2,
    amenities: ["Backyard", "Garage", "Fireplace", "Updated Kitchen"],
    tenantName: "Sarah Johnson",
    tenantPhone: "(555) 987-6543",
    tenantEmail: "sarah.j@example.com",
    leaseStartDate: "2023-08-15",
    securityDeposit: 4800,
    mortgageInfo: {
      lender: "Austin Credit Union",
      loanAmount: 496000,
      interestRate: 4.25,
      monthlyPayment: 2440,
      term: 30,
      startDate: "2022-03-10",
    },
    expenses: [
      { category: "Property Tax", amount: 650, frequency: "monthly" },
      { category: "Insurance", amount: 180, frequency: "monthly" },
      { category: "Maintenance", amount: 250, frequency: "monthly" },
      { category: "Property Management", amount: 256, frequency: "monthly" },
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "prop3",
    address: "789 Pine Street, Unit 12",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1800,
    purchasePrice: 580000,
    currentValue: 630000,
    monthlyRent: 2900,
    capRate: 5.5,
    cashOnCashReturn: 6.5,
    annualAppreciation: 4.3,
    occupancyStatus: "Vacant",
    leaseEndDate: null,
    maintenanceRequests: 2,
    lastInspection: "2023-09-05",
    yearBuilt: 2015,
    lotSize: "N/A",
    parkingSpaces: 1,
    amenities: ["Rooftop Deck", "Hardwood Floors", "Smart Home Features"],
    tenantName: null,
    tenantPhone: null,
    tenantEmail: null,
    leaseStartDate: null,
    securityDeposit: null,
    mortgageInfo: {
      lender: "Seattle Mortgage Co",
      loanAmount: 464000,
      interestRate: 4.75,
      monthlyPayment: 2420,
      term: 30,
      startDate: "2022-01-20",
    },
    expenses: [
      { category: "Property Tax", amount: 550, frequency: "monthly" },
      { category: "Insurance", amount: 150, frequency: "monthly" },
      { category: "HOA", amount: 250, frequency: "monthly" },
      { category: "Maintenance", amount: 200, frequency: "monthly" },
      { category: "Property Management", amount: 232, frequency: "monthly" },
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "prop4",
    address: "101 Maple Drive",
    city: "Denver",
    state: "CO",
    zipCode: "80202",
    type: "Single Family",
    bedrooms: 5,
    bathrooms: 3.5,
    squareFeet: 2800,
    purchasePrice: 720000,
    currentValue: 790000,
    monthlyRent: 3800,
    capRate: 5.9,
    cashOnCashReturn: 7.4,
    annualAppreciation: 5.3,
    occupancyStatus: "Occupied",
    leaseEndDate: "2025-02-28",
    maintenanceRequests: 1,
    lastInspection: "2023-12-10",
    yearBuilt: 2000,
    lotSize: "0.3 acres",
    parkingSpaces: 2,
    amenities: ["Finished Basement", "Mountain View", "Deck", "Home Office"],
    tenantName: "Michael Brown",
    tenantPhone: "(555) 456-7890",
    tenantEmail: "michael.b@example.com",
    leaseStartDate: "2023-03-01",
    securityDeposit: 5700,
    mortgageInfo: {
      lender: "Colorado Home Loans",
      loanAmount: 576000,
      interestRate: 4.0,
      monthlyPayment: 2750,
      term: 30,
      startDate: "2022-06-05",
    },
    expenses: [
      { category: "Property Tax", amount: 700, frequency: "monthly" },
      { category: "Insurance", amount: 190, frequency: "monthly" },
      { category: "Maintenance", amount: 280, frequency: "monthly" },
      { category: "Property Management", amount: 304, frequency: "monthly" },
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "prop5",
    address: "222 Cedar Lane, Suite 3",
    city: "Chicago",
    state: "IL",
    zipCode: "60601",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 2,
    squareFeet: 3200,
    purchasePrice: 950000,
    currentValue: 1020000,
    monthlyRent: 5500,
    capRate: 6.2,
    cashOnCashReturn: 7.8,
    annualAppreciation: 3.9,
    occupancyStatus: "Occupied",
    leaseEndDate: "2026-05-31",
    maintenanceRequests: 0,
    lastInspection: "2024-01-15",
    yearBuilt: 1995,
    lotSize: "N/A",
    parkingSpaces: 4,
    amenities: ["Elevator", "Security System", "Conference Room", "Kitchenette"],
    tenantName: "Acme Corporation",
    tenantPhone: "(555) 789-0123",
    tenantEmail: "leasing@acmecorp.example.com",
    leaseStartDate: "2021-06-01",
    securityDeposit: 11000,
    mortgageInfo: {
      lender: "Business Property Finance",
      loanAmount: 760000,
      interestRate: 5.0,
      monthlyPayment: 4080,
      term: 25,
      startDate: "2021-05-15",
    },
    expenses: [
      { category: "Property Tax", amount: 950, frequency: "monthly" },
      { category: "Insurance", amount: 350, frequency: "monthly" },
      { category: "Maintenance", amount: 400, frequency: "monthly" },
      { category: "Property Management", amount: 440, frequency: "monthly" },
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function PropertyDetailPage() {
  const params = useParams()
  const propertyId = params.id as string

  // Find the property with the matching ID
  const property = properties.find((p) => p.id === propertyId)

  // If property not found, show error message
  if (!property) {
    return (
      <DashboardShell>
        <DashboardHeader heading="Property Not Found" description="The requested property could not be found.">
          <Button asChild variant="outline">
            <Link href="/properties">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Link>
          </Button>
        </DashboardHeader>
      </DashboardShell>
    )
  }

  // Calculate financial metrics
  const totalMonthlyExpenses = property.expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const monthlyMortgagePayment = property.mortgageInfo.monthlyPayment
  const monthlyCashFlow = property.monthlyRent - totalMonthlyExpenses - monthlyMortgagePayment
  const annualCashFlow = monthlyCashFlow * 12
  const netOperatingIncome = property.monthlyRent * 12 - totalMonthlyExpenses * 12

  return (
    <DashboardShell>
      <DashboardHeader
        heading={property.address}
        description={`${property.city}, ${property.state} ${property.zipCode}`}
      >
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link href="/properties">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Link>
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="destructive" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-7">
        <div className="md:col-span-5">
          <img
            src={property.image || "/placeholder.svg"}
            alt={property.address}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Property Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${property.currentValue.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">Purchased for ${property.purchasePrice.toLocaleString()}</p>
              <div className="mt-2 text-sm">
                <Badge variant="outline" className="bg-green-50">
                  +{(((property.currentValue - property.purchasePrice) / property.purchasePrice) * 100).toFixed(1)}%
                  appreciation
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Occupancy Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={property.occupancyStatus === "Occupied" ? "default" : "destructive"} className="mb-2">
                {property.occupancyStatus}
              </Badge>
              {property.occupancyStatus === "Occupied" && property.leaseEndDate && (
                <p className="text-sm">
                  Lease ends:{" "}
                  {new Date(property.leaseEndDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              )}
              {property.occupancyStatus === "Vacant" && (
                <p className="text-sm text-muted-foreground">This property is currently vacant</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Rent</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${property.monthlyRent.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              ${(property.monthlyRent * 12).toLocaleString()} annual income
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cash Flow</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${monthlyCashFlow >= 0 ? "text-green-600" : "text-red-600"}`}>
              ${monthlyCashFlow.toLocaleString()}/mo
            </div>
            <p className="text-xs text-muted-foreground">${annualCashFlow.toLocaleString()} annual cash flow</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cap Rate</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{property.capRate}%</div>
            <p className="text-xs text-muted-foreground">NOI: ${netOperatingIncome.toLocaleString()}/year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cash on Cash Return</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{property.cashOnCashReturn}%</div>
            <p className="text-xs text-muted-foreground">Annual return on investment</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="details" className="space-y-4">
        <TabsList>
          <TabsTrigger value="details">Property Details</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="tenant">Tenant</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Property Information</CardTitle>
              <CardDescription>Detailed information about this property</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Basic Details</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Home className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Type:</span>
                        <span className="font-medium">{property.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Bedrooms:</span>
                        <span className="font-medium">{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Bathrooms:</span>
                        <span className="font-medium">{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Square Feet:</span>
                        <span className="font-medium">{property.squareFeet.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Year Built:</span>
                        <span className="font-medium">{property.yearBuilt}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Lot Size:</span>
                        <span className="font-medium">{property.lotSize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Parking:</span>
                        <span className="font-medium">{property.parkingSpaces} space(s)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">
                          {property.city}, {property.state}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {property.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Property Management</h4>
                    <div className="grid gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Last Inspection:</span>
                        <span className="font-medium">
                          {new Date(property.lastInspection).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Maintenance Requests:</span>
                        <span className="font-medium">{property.maintenanceRequests}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Documents</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 border rounded-md">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          <span>Purchase Agreement</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded-md">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          <span>Insurance Policy</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded-md">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          <span>Property Inspection Report</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Summary</CardTitle>
              <CardDescription>Financial details and performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Income & Expenses</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded-md">
                        <span className="font-medium">Monthly Rental Income</span>
                        <span className="font-medium text-green-600">${property.monthlyRent.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md">
                        <span className="text-muted-foreground">Mortgage Payment</span>
                        <span className="text-red-600">-${property.mortgageInfo.monthlyPayment.toLocaleString()}</span>
                      </div>
                      {property.expenses.map((expense, index) => (
                        <div key={index} className="flex justify-between items-center p-2 rounded-md">
                          <span className="text-muted-foreground">{expense.category}</span>
                          <span className="text-red-600">-${expense.amount.toLocaleString()}</span>
                        </div>
                      ))}
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded-md">
                        <span className="font-medium">Total Monthly Expenses</span>
                        <span className="font-medium text-red-600">
                          -${(totalMonthlyExpenses + monthlyMortgagePayment).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-primary/10 rounded-md">
                        <span className="font-medium">Net Monthly Cash Flow</span>
                        <span className={`font-medium ${monthlyCashFlow >= 0 ? "text-green-600" : "text-red-600"}`}>
                          ${monthlyCashFlow.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Annual Projections</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 rounded-md">
                        <span className="text-muted-foreground">Annual Rental Income</span>
                        <span>${(property.monthlyRent * 12).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md">
                        <span className="text-muted-foreground">Annual Expenses</span>
                        <span>-${((totalMonthlyExpenses + monthlyMortgagePayment) * 12).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md">
                        <span className="text-muted-foreground">Annual Cash Flow</span>
                        <span className={monthlyCashFlow >= 0 ? "text-green-600" : "text-red-600"}>
                          ${annualCashFlow.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md">
                        <span className="text-muted-foreground">Projected Appreciation (1yr)</span>
                        <span className="text-green-600">
                          ${(property.currentValue * (property.annualAppreciation / 100)).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Mortgage Information</h4>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Lender:</span>
                          <span className="ml-2 font-medium">{property.mortgageInfo.lender}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Loan Amount:</span>
                          <span className="ml-2 font-medium">${property.mortgageInfo.loanAmount.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Interest Rate:</span>
                          <span className="ml-2 font-medium">{property.mortgageInfo.interestRate}%</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Term:</span>
                          <span className="ml-2 font-medium">{property.mortgageInfo.term} years</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Monthly Payment:</span>
                          <span className="ml-2 font-medium">
                            ${property.mortgageInfo.monthlyPayment.toLocaleString()}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Start Date:</span>
                          <span className="ml-2 font-medium">
                            {new Date(property.mortgageInfo.startDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Investment Metrics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 rounded-md">
                        <span className="text-muted-foreground">Purchase Price</span>
                        <span>${property.purchasePrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md">
                        <span className="text-muted-foreground">Current Value</span>
                        <span>${property.currentValue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md">
                        <span className="text-muted-foreground">Equity</span>
                        <span>${(property.currentValue - property.mortgageInfo.loanAmount).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md">
                        <span className="text-muted-foreground">Cap Rate</span>
                        <span>{property.capRate}%</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md">
                        <span className="text-muted-foreground">Cash on Cash Return</span>
                        <span>{property.cashOnCashReturn}%</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md">
                        <span className="text-muted-foreground">Annual Appreciation</span>
                        <span>{property.annualAppreciation}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tenant" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tenant Information</CardTitle>
              <CardDescription>Current tenant details and lease information</CardDescription>
            </CardHeader>
            <CardContent>
              {property.occupancyStatus === "Occupied" && property.tenantName ? (
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Tenant Details</h4>
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Name:</span>
                            <span className="ml-2 font-medium">{property.tenantName}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Phone:</span>
                            <span className="ml-2 font-medium">{property.tenantPhone}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Email:</span>
                            <span className="ml-2 font-medium">{property.tenantEmail}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Lease Information</h4>
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Start Date:</span>
                            <span className="ml-2 font-medium">
                              {new Date(property.leaseStartDate).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">End Date:</span>
                            <span className="ml-2 font-medium">
                              {new Date(property.leaseEndDate).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Monthly Rent:</span>
                            <span className="ml-2 font-medium">${property.monthlyRent.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Security Deposit:</span>
                            <span className="ml-2 font-medium">${property.securityDeposit.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Payment History</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 rounded-md">
                          <span className="text-muted-foreground">April 2024</span>
                          <Badge variant="outline" className="bg-green-50">
                            Paid
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded-md">
                          <span className="text-muted-foreground">March 2024</span>
                          <Badge variant="outline" className="bg-green-50">
                            Paid
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded-md">
                          <span className="text-muted-foreground">February 2024</span>
                          <Badge variant="outline" className="bg-green-50">
                            Paid
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Maintenance Requests</h4>
                      {property.maintenanceRequests > 0 ? (
                        <div className="space-y-2">
                          <div className="p-3 border rounded-md">
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-medium">Leaking faucet in master bathroom</h5>
                                <p className="text-sm text-muted-foreground">Reported: April 2, 2024</p>
                              </div>
                              <Badge>In Progress</Badge>
                            </div>
                            <p className="text-sm mt-2">
                              Tenant reports constant dripping from the bathroom faucet. Plumber scheduled for April 10.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">No active maintenance requests</p>
                      )}
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Documents</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="h-4 w-4 text-muted-foreground"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                            <span>Lease Agreement</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="h-4 w-4 text-muted-foreground"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                            <span>Tenant Background Check</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="h-4 w-4 text-muted-foreground"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                            <span>Move-in Inspection Report</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <Users className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No Active Tenant</h3>
                  <p className="text-muted-foreground text-center max-w-md mt-2">
                    This property is currently vacant. Add a tenant when the property is leased.
                  </p>
                  <Button className="mt-4">Add Tenant</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Property Performance</CardTitle>
              <CardDescription>Historical performance and value trends</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <PropertyPerformanceChart properties={[property]} />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Value Growth</CardTitle>
                <CardDescription>Property value over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Purchase Price</p>
                      <p className="text-lg font-bold">${property.purchasePrice.toLocaleString()}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Current Value</p>
                      <p className="text-lg font-bold">${property.currentValue.toLocaleString()}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Projected (5yr)</p>
                      <p className="text-lg font-bold">
                        $
                        {Math.round(
                          property.currentValue * Math.pow(1 + property.annualAppreciation / 100, 5),
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="text-sm font-medium mb-2">Total Appreciation</div>
                    <div className="flex items-center">
                      <div className="flex-1">
                        <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                          <div
                            className="h-full bg-primary"
                            style={{
                              width: `${Math.min(
                                ((property.currentValue - property.purchasePrice) / property.purchasePrice) * 100,
                                100,
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                      <span className="ml-2 text-sm font-medium">
                        {(((property.currentValue - property.purchasePrice) / property.purchasePrice) * 100).toFixed(1)}
                        %
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      ${(property.currentValue - property.purchasePrice).toLocaleString()} total appreciation since
                      purchase
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Return on Investment</CardTitle>
                <CardDescription>ROI metrics and comparisons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Cash on Cash Return</p>
                      <p className="text-lg font-bold">{property.cashOnCashReturn}%</p>
                      <div className="h-2 w-full bg-muted overflow-hidden rounded-full mt-1">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${Math.min(property.cashOnCashReturn * 10, 100)}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">vs. 6.8% portfolio average</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Cap Rate</p>
                      <p className="text-lg font-bold">{property.capRate}%</p>
                      <div className="h-2 w-full bg-muted overflow-hidden rounded-full mt-1">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${Math.min(property.capRate * 10, 100)}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">vs. 5.2% portfolio average</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="text-sm font-medium mb-2">Total Return</div>
                    <div className="flex items-center justify-between p-2 rounded-md">
                      <span className="text-muted-foreground">Cash Flow Return</span>
                      <span>${annualCashFlow.toLocaleString()}/year</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-md">
                      <span className="text-muted-foreground">Appreciation Return</span>
                      <span>
                        ${Math.round(property.currentValue * (property.annualAppreciation / 100)).toLocaleString()}/year
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                      <span className="font-medium">Total Annual Return</span>
                      <span className="font-medium">
                        $
                        {(
                          annualCashFlow + Math.round(property.currentValue * (property.annualAppreciation / 100))
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

