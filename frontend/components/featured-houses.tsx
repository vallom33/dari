"use client"

import { useState } from "react"
import { HouseCard } from "@/components/house-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Sample data for featured houses with Mauritania locations
const featuredHouses = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    location: "Tevragh Zeina, Nouakchott",
    price: 85000000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 280,
    imageUrl: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Apartment with Ocean View",
    location: "Cansado, Nouadhibou",
    price: 45000000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 150,
    imageUrl: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 3,
    title: "Traditional House with Garden",
    location: "Ksar, Nouakchott",
    price: 32000000,
    bedrooms: 5,
    bathrooms: 3,
    sqft: 320,
    imageUrl: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 4,
    title: "Modern Townhouse",
    location: "Riyadh, Nouakchott",
    price: 28000000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 180,
    imageUrl: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 5,
    title: "Beachfront Villa",
    location: "Numerot, Nouadhibou",
    price: 95000000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 350,
    imageUrl: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 6,
    title: "City Center Apartment",
    location: "Arafat, Nouakchott",
    price: 18000000,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 90,
    imageUrl: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
]

export function FeaturedHouses() {
  const [visibleHouses, setVisibleHouses] = useState(featuredHouses.slice(0, 3))
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(featuredHouses.length / 3)

  const nextPage = () => {
    const nextPageIndex = (currentPage + 1) % totalPages
    setCurrentPage(nextPageIndex)
    setVisibleHouses(featuredHouses.slice(nextPageIndex * 3, nextPageIndex * 3 + 3))
  }

  const prevPage = () => {
    const prevPageIndex = currentPage === 0 ? totalPages - 1 : currentPage - 1
    setCurrentPage(prevPageIndex)
    setVisibleHouses(featuredHouses.slice(prevPageIndex * 3, prevPageIndex * 3 + 3))
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleHouses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevPage}
          className="rounded-full border-rose-200 hover:bg-rose-50 hover:text-rose-500"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            variant={currentPage === index ? "default" : "outline"}
            size="icon"
            onClick={() => {
              setCurrentPage(index)
              setVisibleHouses(featuredHouses.slice(index * 3, index * 3 + 3))
            }}
            className={
              currentPage === index
                ? "h-8 w-8 rounded-full bg-rose-500 hover:bg-rose-600"
                : "h-8 w-8 rounded-full border-rose-200 hover:bg-rose-50 hover:text-rose-500"
            }
          >
            {index + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={nextPage}
          className="rounded-full border-rose-200 hover:bg-rose-50 hover:text-rose-500"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>
    </div>
  )
}
