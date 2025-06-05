"use client"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
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
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

// Mauritania cities
const mauritaniaCities = [
  { value: "nouakchott", label: "Nouakchott" },
  { value: "nouadhibou", label: "Nouadhibou" },
  { value: "kiffa", label: "Kiffa" },
  { value: "kaedi", label: "Kaédi" },
  { value: "rosso", label: "Rosso" },
  { value: "zouerate", label: "Zouérate" },
  { value: "atar", label: "Atar" },
  { value: "nema", label: "Néma" },
  { value: "selibaby", label: "Sélibaby" },
  { value: "tidjikja", label: "Tidjikja" },
]

// Nouakchott neighborhoods (quartiers)
const nouakchottQuartiers = [
  { value: "tevragh-zeina", label: "Tevragh Zeina" },
  { value: "ksar", label: "Ksar" },
  { value: "dar-naim", label: "Dar Naim" },
  { value: "arafat", label: "Arafat" },
  { value: "riyadh", label: "Riyadh" },
  { value: "sebkha", label: "Sebkha" },
  { value: "el-mina", label: "El Mina" },
  { value: "toujounine", label: "Toujounine" },
  { value: "teyarett", label: "Teyarett" },
]

// Nouadhibou neighborhoods
const nouadhibouQuartiers = [
  { value: "numerot", label: "Numerot" },
  { value: "cansado", label: "Cansado" },
  { value: "baghdad", label: "Baghdad" },
  { value: "qhairaat", label: "Qhairaat" },
]

export function SearchFilters() {
  const [priceRange, setPriceRange] = useState([100000, 1000000])
  const [advancedFilters, setAdvancedFilters] = useState(false)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [quartiers, setQuartiers] = useState<{ value: string; label: string }[]>([])

  const handleCityChange = (city: string) => {
    setSelectedCity(city)

    // Update quartiers based on selected city
    if (city === "nouakchott") {
      setQuartiers(nouakchottQuartiers)
    } else if (city === "nouadhibou") {
      setQuartiers(nouadhibouQuartiers)
    } else {
      setQuartiers([])
    }
  }

  return (
    <div className="rounded-xl border bg-card p-6 shadow-lg">
      <div className="grid gap-6 md:grid-cols-4">
        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm font-medium">
            City
          </Label>
          <Select onValueChange={handleCityChange}>
            <SelectTrigger id="location" className="h-12">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Mauritania Cities</SelectLabel>
                {mauritaniaCities.map((city) => (
                  <SelectItem key={city.value} value={city.value}>
                    {city.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="quartier" className="text-sm font-medium">
            Neighborhood (Quartier)
          </Label>
          <Select disabled={!selectedCity || quartiers.length === 0}>
            <SelectTrigger id="quartier" className="h-12">
              <SelectValue placeholder={quartiers.length > 0 ? "Select quartier" : "Select city first"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Quartiers</SelectLabel>
                {quartiers.map((quartier) => (
                  <SelectItem key={quartier.value} value={quartier.value}>
                    {quartier.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Price Range</Label>
          <div className="pt-4">
            <Slider
              defaultValue={[100000, 1000000]}
              max={5000000}
              min={0}
              step={50000}
              value={priceRange}
              onValueChange={setPriceRange}
              className="py-2"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>${(priceRange[0] / 1000).toFixed(0)}k</span>
            <span>${(priceRange[1] / 1000).toFixed(0)}k</span>
          </div>
        </div>

        <div className="flex items-end">
          <Button className="h-12 w-full gap-2 bg-rose-500 text-white hover:bg-rose-600">
            <Search className="h-4 w-4" />
            Search Houses
          </Button>
        </div>
      </div>

      <div className="mt-4">
        <Button
          variant="ghost"
          className="flex w-full items-center justify-center gap-2 text-sm text-muted-foreground"
          onClick={() => setAdvancedFilters(!advancedFilters)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          {advancedFilters ? "Hide advanced filters" : "Show advanced filters"}
        </Button>

        {advancedFilters && (
          <div className="mt-4 grid gap-6 border-t pt-4 md:grid-cols-3">
            <div className="space-y-4">
              <h4 className="font-medium">Property Type</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="villa" />
                  <label htmlFor="villa" className="text-sm">
                    Villa
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="apartment" />
                  <label htmlFor="apartment" className="text-sm">
                    Apartment
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="house" />
                  <label htmlFor="house" className="text-sm">
                    House
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="land" />
                  <label htmlFor="land" className="text-sm">
                    Land
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="commercial" />
                  <label htmlFor="commercial" className="text-sm">
                    Commercial
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Features</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="pool" />
                  <label htmlFor="pool" className="text-sm">
                    Swimming Pool
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="garden" />
                  <label htmlFor="garden" className="text-sm">
                    Garden
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="garage" />
                  <label htmlFor="garage" className="text-sm">
                    Garage
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="security" />
                  <label htmlFor="security" className="text-sm">
                    Security System
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="furnished" />
                  <label htmlFor="furnished" className="text-sm">
                    Furnished
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Size & Rooms</h4>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="min-beds" className="text-sm">
                      Min Beds
                    </Label>
                    <Select>
                      <SelectTrigger id="min-beds">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}+
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="min-baths" className="text-sm">
                      Min Baths
                    </Label>
                    <Select>
                      <SelectTrigger id="min-baths">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}+
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="min-area" className="text-sm">
                    Min Area (sqm)
                  </Label>
                  <Input id="min-area" type="number" placeholder="Any" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
