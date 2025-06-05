"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, MapPin, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Sample data for carousel houses
const carouselHouses = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Plage des Pêcheurs, Nouakchott",
    price: 120000000,
    imageUrl: "/placeholder.svg?height=500&width=800",
    description: "Stunning beachfront property with panoramic ocean views and private beach access",
  },
  {
    id: 2,
    title: "Modern City Apartment",
    location: "Tevragh Zeina, Nouakchott",
    price: 45000000,
    imageUrl: "/placeholder.svg?height=500&width=800",
    description: "Contemporary apartment in the heart of Nouakchott with premium amenities",
  },
  {
    id: 3,
    title: "Traditional Courtyard House",
    location: "Ksar, Nouakchott",
    price: 38000000,
    imageUrl: "/placeholder.svg?height=500&width=800",
    description: "Authentic Mauritanian architecture with modern comforts and spacious courtyard",
  },
  {
    id: 4,
    title: "Seaside Retreat",
    location: "Cansado, Nouadhibou",
    price: 75000000,
    imageUrl: "/placeholder.svg?height=500&width=800",
    description: "Peaceful coastal property with stunning views of the Atlantic Ocean",
  },
  {
    id: 5,
    title: "Desert Oasis Villa",
    location: "Atar",
    price: 55000000,
    imageUrl: "/placeholder.svg?height=500&width=800",
    description: "Unique property surrounded by beautiful desert landscapes with private garden",
  },
]

export function HouseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoplay = () => {
    stopAutoplay()
    autoplayRef.current = setInterval(() => {
      nextSlide()
    }, 5000)
  }

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselHouses.length)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselHouses.length) % carouselHouses.length)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const currentHouse = carouselHouses[currentIndex]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-white shadow-xl"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="relative h-[500px] w-full">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onAnimationComplete={() => setIsAnimating(false)}
          className="absolute inset-0 grid h-full w-full md:grid-cols-2"
        >
          <div className="relative h-[250px] md:h-full">
            <Image
              src={currentHouse.imageUrl || "/placeholder.svg"}
              alt={currentHouse.title}
              fill
              className="object-cover"
              priority
            />
            <Badge className="absolute left-4 top-4 bg-rose-500 px-3 py-1 text-sm font-medium">Featured</Badge>
          </div>
          <div className="flex flex-col justify-center p-8">
            <h3 className="mb-2 text-3xl font-bold">{currentHouse.title}</h3>
            <div className="mb-4 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-rose-500" />
              <span>{currentHouse.location}</span>
            </div>
            <p className="mb-6 text-muted-foreground">{currentHouse.description}</p>
            <div className="mb-6 flex items-center gap-6">
              <div>
                <span className="text-2xl font-bold text-rose-500">
                  {(currentHouse.price / 1000000).toFixed(1)}M MRU
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-sm text-rose-700">
                <Home className="h-4 w-4" />
                Premium Property
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-rose-500 hover:bg-rose-600" asChild>
                <Link href={`/houses/${currentHouse.id}`}>View Details</Link>
              </Button>
              <Button variant="outline" className="border-rose-200 hover:bg-rose-50 hover:text-rose-500">
                Schedule Tour
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-rose-500 shadow-md backdrop-blur-sm hover:bg-white hover:text-rose-600"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-rose-500 shadow-md backdrop-blur-sm hover:bg-white hover:text-rose-600"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next</span>
      </Button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {carouselHouses.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 w-8 rounded-full transition-all",
              index === currentIndex ? "bg-rose-500" : "bg-gray-300 hover:bg-gray-400",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
