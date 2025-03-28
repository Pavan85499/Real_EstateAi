"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

interface PropertyMapProps {
  properties: Array<{
    id: string
    address: string
    city: string
    state: string
    type: string
    currentValue: number
    monthlyRent: number
  }>
}

export function PropertyMap({ properties }: PropertyMapProps) {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null)

  // In a real application, you would use a mapping library like Mapbox, Google Maps, or Leaflet
  // This is a simplified placeholder that shows the concept
  return (
    <div className="relative h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-muted-foreground">Interactive map would display here with property locations</p>
      </div>

      {/* Property pins - in a real map these would be positioned based on geocoded coordinates */}
      <div className="absolute inset-0 p-8">
        <div className="relative h-full w-full">
          {properties.map((property, index) => {
            // Generate pseudo-random positions for demonstration
            const top = `${20 + ((index * 15) % 60)}%`
            const left = `${15 + ((index * 20) % 70)}%`

            return (
              <div
                key={property.id}
                className="absolute"
                style={{ top, left }}
                onMouseEnter={() => setSelectedProperty(property.id)}
                onMouseLeave={() => setSelectedProperty(null)}
              >
                <div className="relative">
                  <MapPin
                    className={`h-8 w-8 text-primary cursor-pointer ${
                      selectedProperty === property.id ? "text-primary-foreground fill-primary" : ""
                    }`}
                  />

                  {selectedProperty === property.id && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white rounded-lg shadow-lg p-2 text-sm z-10">
                      <p className="font-medium">{property.address}</p>
                      <p className="text-xs text-muted-foreground">
                        {property.city}, {property.state}
                      </p>
                      <p className="text-xs mt-1">
                        <span className="font-medium">${property.currentValue.toLocaleString()}</span> ·{" "}
                        <span>{property.type}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Your Properties ({properties.length})</span>
        </div>
      </div>
    </div>
  )
}

