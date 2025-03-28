"use client"

import { useState } from "react"
import Link from "next/link"
import { Building, Download, Filter, MapPin, MoreHorizontal, Plus, Trash2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { PropertyCard } from "@/components/property-card"
import { PropertyPerformanceChart } from "@/components/property-performance-chart"
import { PropertyMap } from "@/components/property-map"

// Sample property data
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
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function PropertiesPage() {
  const [isAddPropertyOpen, setIsAddPropertyOpen] = useState(false)
  const [viewMode, setViewMode] = useState("grid")
  const [filterType, setFilterType] = useState("all")

  // Calculate portfolio metrics
  const totalProperties = properties.length
  const totalValue = properties.reduce((sum, property) => sum + property.currentValue, 0)
  const totalMonthlyRent = properties.reduce((sum, property) => sum + property.monthlyRent, 0)
  const averageCapRate = properties.reduce((sum, property) => sum + property.capRate, 0) / properties.length
  const vacancyRate =
    (properties.filter((property) => property.occupancyStatus === "Vacant").length / totalProperties) * 100

  // Filter properties by type
  const filteredProperties =
    filterType === "all"
      ? properties
      : properties.filter((property) => property.type.toLowerCase() === filterType.toLowerCase())

  return (
    <DashboardShell>
      <DashboardHeader heading="My Properties" description="Manage and track your real estate portfolio.">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Filter className="h-3.5 w-3.5" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setFilterType("all")}>All Properties</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType("single family")}>Single Family</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType("condo")}>Condo</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType("townhouse")}>Townhouse</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType("commercial")}>Commercial</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-3.5 w-3.5" />
            <span>Export</span>
          </Button>
          <Dialog open={isAddPropertyOpen} onOpenChange={setIsAddPropertyOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="h-8 gap-1">
                <Plus className="h-3.5 w-3.5" />
                <span>Add Property</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Property</DialogTitle>
                <DialogDescription>
                  Enter the details of your new property to add it to your portfolio.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="address" className="text-right">
                    Address
                  </Label>
                  <Input id="address" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="city" className="text-right">
                    City
                  </Label>
                  <Input id="city" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="state" className="text-right">
                    State
                  </Label>
                  <Input id="state" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Type
                  </Label>
                  <Input id="type" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="price" className="text-right">
                    Purchase Price
                  </Label>
                  <Input id="price" type="number" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={() => setIsAddPropertyOpen(false)}>
                  Add Property
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {properties.length} properties in {new Set(properties.map((p) => p.city)).size} cities
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Rental Income</CardTitle>
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
            <div className="text-2xl font-bold">${totalMonthlyRent.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">${(totalMonthlyRent * 12).toLocaleString()} annual income</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Cap Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageCapRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Industry avg: 5.2%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vacancy Rate</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{vacancyRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Industry avg: 7.5%</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="properties" className="space-y-4">
        <TabsList>
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>
        <TabsContent value="properties" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Showing {filteredProperties.length} of {properties.length} properties
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                Grid
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                List
              </Button>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="rounded-md border">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium">Property</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Value</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Monthly Rent</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Cap Rate</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {filteredProperties.map((property) => (
                      <tr
                        key={property.id}
                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td className="p-4 align-middle">
                          <div className="flex flex-col">
                            <span className="font-medium">{property.address}</span>
                            <span className="text-xs text-muted-foreground">
                              {property.city}, {property.state} {property.zipCode}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">{property.type}</td>
                        <td className="p-4 align-middle">${property.currentValue.toLocaleString()}</td>
                        <td className="p-4 align-middle">${property.monthlyRent.toLocaleString()}</td>
                        <td className="p-4 align-middle">{property.capRate}%</td>
                        <td className="p-4 align-middle">
                          <Badge variant={property.occupancyStatus === "Occupied" ? "default" : "destructive"}>
                            {property.occupancyStatus}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Link href={`/properties/${property.id}`} className="flex w-full">
                                  View Details
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>Edit Property</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                <span>Delete Property</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
              <CardDescription>Track the performance of your property investments over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <PropertyPerformanceChart properties={properties} />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Properties</CardTitle>
                <CardDescription>Based on cash on cash return</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {properties
                    .sort((a, b) => b.cashOnCashReturn - a.cashOnCashReturn)
                    .slice(0, 3)
                    .map((property, index) => (
                      <div key={property.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{property.address}</p>
                            <p className="text-xs text-muted-foreground">{property.city}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{property.cashOnCashReturn}%</p>
                          <p className="text-xs text-muted-foreground">Cash on Cash</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Highest Appreciation</CardTitle>
                <CardDescription>Based on annual appreciation rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {properties
                    .sort((a, b) => b.annualAppreciation - a.annualAppreciation)
                    .slice(0, 3)
                    .map((property, index) => (
                      <div key={property.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{property.address}</p>
                            <p className="text-xs text-muted-foreground">{property.city}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{property.annualAppreciation}%</p>
                          <p className="text-xs text-muted-foreground">Annual Appreciation</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Highest Rental Yield</CardTitle>
                <CardDescription>Based on monthly rent vs. property value</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {properties
                    .sort((a, b) => (b.monthlyRent * 12) / b.currentValue - (a.monthlyRent * 12) / a.currentValue)
                    .slice(0, 3)
                    .map((property, index) => {
                      const rentalYield = ((property.monthlyRent * 12) / property.currentValue) * 100
                      return (
                        <div key={property.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                              {index + 1}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{property.address}</p>
                              <p className="text-xs text-muted-foreground">{property.city}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{rentalYield.toFixed(1)}%</p>
                            <p className="text-xs text-muted-foreground">Rental Yield</p>
                          </div>
                        </div>
                      )
                    })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Property Locations</CardTitle>
              <CardDescription>Geographic distribution of your property portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <PropertyMap properties={properties} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

