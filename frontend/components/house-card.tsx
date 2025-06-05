"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, MapPin, BedDouble, Bath, Move } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface House {
  id: number
  title: string
  location: string
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  imageUrl: string
  featured?: boolean
}

interface HouseCardProps {
  house: House
}

export function HouseCard({ house }: HouseCardProps) {
  const { id, title, location, price, bedrooms, bathrooms, sqft, imageUrl, featured } = house
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsFavorite(!isFavorite)
  }

  // Format price in millions of MRU (Mauritanian Ouguiya)
  const formattedPrice = price >= 1000000 ? `${(price / 1000000).toFixed(1)}M MRU` : `${(price / 1000).toFixed(0)}K MRU`

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card
        className="overflow-hidden transition-shadow hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="relative h-[220px] w-full overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            />
            {featured && <Badge className="absolute left-3 top-3 bg-amber-500 px-2 py-1">Featured</Badge>}
          </div>
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleFavorite}
            className={`absolute right-3 top-3 h-8 w-8 rounded-full ${
              isFavorite
                ? "bg-rose-500 text-white hover:bg-rose-600"
                : "bg-white/80 text-rose-500 backdrop-blur-sm hover:bg-white hover:text-rose-600"
            }`}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
            <span className="sr-only">Add to favorites</span>
          </Button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-8">
            <h3 className="line-clamp-1 text-lg font-bold text-white">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-white/90">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-lg font-bold text-rose-500">{formattedPrice}</span>
            <Badge variant="outline" className="border-rose-200 text-rose-500">
              For Sale
            </Badge>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center rounded-md bg-rose-50 p-2">
              <BedDouble className="mb-1 h-4 w-4 text-rose-500" />
              <span className="text-sm font-medium">{bedrooms} Beds</span>
            </div>
            <div className="flex flex-col items-center rounded-md bg-rose-50 p-2">
              <Bath className="mb-1 h-4 w-4 text-rose-500" />
              <span className="text-sm font-medium">{bathrooms} Baths</span>
            </div>
            <div className="flex flex-col items-center rounded-md bg-rose-50 p-2">
              <Move className="mb-1 h-4 w-4 text-rose-500" />
              <span className="text-sm font-medium">{sqft} m²</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t p-4">
          <Link href={`/houses/${id}`} className="w-full">
            <Button className="w-full bg-rose-500 hover:bg-rose-600">View Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
