import Link from "next/link"
import { Building, Calendar, Home, MapPin, MoreHorizontal, Ruler, Trash2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface PropertyCardProps {
  property: {
    id: string
    address: string
    city: string
    state: string
    zipCode: string
    type: string
    bedrooms: number
    bathrooms: number
    squareFeet: number
    purchasePrice: number
    currentValue: number
    monthlyRent: number
    capRate: number
    cashOnCashReturn: number
    annualAppreciation: number
    occupancyStatus: string
    leaseEndDate: string | null
    maintenanceRequests: number
    lastInspection: string
    image: string
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img src={property.image || "/placeholder.svg"} alt={property.address} className="h-48 w-full object-cover" />
        <Badge
          className="absolute top-2 right-2"
          variant={property.occupancyStatus === "Occupied" ? "default" : "destructive"}
        >
          {property.occupancyStatus}
        </Badge>
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold truncate">{property.address}</h3>
            <p className="text-sm text-muted-foreground">
              {property.city}, {property.state} {property.zipCode}
            </p>
          </div>
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
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Home className="h-4 w-4 text-muted-foreground" />
            <span>{property.type}</span>
          </div>
          <div className="flex items-center gap-1">
            <Building className="h-4 w-4 text-muted-foreground" />
            <span>
              {property.bedrooms} bd | {property.bathrooms} ba
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Ruler className="h-4 w-4 text-muted-foreground" />
            <span>{property.squareFeet.toLocaleString()} sq ft</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{property.city}</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Current Value</p>
            <p className="font-semibold">${property.currentValue.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Monthly Rent</p>
            <p className="font-semibold">${property.monthlyRent.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Cap Rate</p>
            <p className="font-semibold">{property.capRate}%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Cash on Cash</p>
            <p className="font-semibold">{property.cashOnCashReturn}%</p>
          </div>
        </div>

        {property.leaseEndDate && (
          <div className="mt-4 flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>
              Lease ends:{" "}
              {new Date(property.leaseEndDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/properties/${property.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

