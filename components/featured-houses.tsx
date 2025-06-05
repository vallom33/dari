import { HouseCard } from "@/components/house-card"

// Sample data for featured houses
const featuredHouses = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    location: "Beverly Hills, CA",
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    location: "Manhattan, NY",
    price: 3500000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Seaside Retreat",
    location: "Malibu, CA",
    price: 4750000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3500,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Urban Townhouse",
    location: "Chicago, IL",
    price: 850000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1800,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Mountain View Cabin",
    location: "Aspen, CO",
    price: 1950000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "Downtown Loft",
    location: "Seattle, WA",
    price: 780000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1600,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
]

export function FeaturedHouses() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredHouses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  )
}
