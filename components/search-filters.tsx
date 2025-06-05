"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SearchFilters() {
  const [priceRange, setPriceRange] = useState([100000, 1000000])

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="grid gap-6 md:grid-cols-4">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Select>
            <SelectTrigger id="location">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Popular Cities</SelectLabel>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="los-angeles">Los Angeles</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
                <SelectItem value="miami">Miami</SelectItem>
                <SelectItem value="seattle">Seattle</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="property-type">Property Type</Label>
          <Select>
            <SelectTrigger id="property-type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single-family">Single Family</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
              <SelectItem value="vacation">Vacation Home</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Price Range</Label>
          <div className="pt-4">
            <Slider
              defaultValue={[100000, 1000000]}
              max={2000000}
              min={0}
              step={10000}
              value={priceRange}
              onValueChange={setPriceRange}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>${(priceRange[0] / 1000).toFixed(0)}k</span>
            <span>${(priceRange[1] / 1000).toFixed(0)}k</span>
          </div>
        </div>
        <div className="flex items-end">
          <Button className="w-full gap-2">
            <Search className="h-4 w-4" />
            Search Houses
          </Button>
        </div>
      </div>
    </div>
  )
}
