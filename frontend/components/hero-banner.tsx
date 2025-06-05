"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search, ChevronRight } from "lucide-react"

const heroImages = [
  {
    src: "/placeholder.svg?height=800&width=1920",
    alt: "Modern villa in Nouakchott",
    title: "Discover Luxury Homes in Nouakchott",
    subtitle: "Exclusive properties in Mauritania's vibrant capital city",
  },
  {
    src: "/placeholder.svg?height=800&width=1920",
    alt: "Beachfront property in Nouadhibou",
    title: "Beachfront Living in Nouadhibou",
    subtitle: "Wake up to stunning ocean views every day",
  },
  {
    src: "/placeholder.svg?height=800&width=1920",
    alt: "Traditional home in Kiffa",
    title: "Traditional Charm in Kiffa",
    subtitle: "Experience authentic Mauritanian architecture and culture",
  },
]

export function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentImage = heroImages[currentIndex]

  return (
    <section className="relative h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 flex h-full flex-col items-center justify-center py-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="mb-6 max-w-4xl bg-gradient-to-r from-white to-rose-200 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl md:text-7xl">
            {currentImage.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="mb-8 max-w-2xl text-xl text-gray-200">{currentImage.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" className="gap-2 bg-rose-500 text-white hover:bg-rose-600" asChild>
            <Link href="/houses">
              <Search className="h-4 w-4" />
              Find Your Home
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-white text-white hover:bg-white hover:text-rose-600"
            asChild
          >
            <Link href="/contact">
              Contact Us
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-8 rounded-full transition-all ${
                index === currentIndex ? "bg-rose-500" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
