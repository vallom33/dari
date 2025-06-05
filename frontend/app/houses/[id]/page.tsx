"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Bath, BedDouble, Heart, MapPin, Ruler, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { Home } from "lucide-react"

// Sample house data with Mauritania-specific details
const house = {
  id: 1,
  title: "Modern Villa with Pool in Tevragh Zeina",
  description:
    "This stunning modern villa features an open floor plan with high ceilings, floor-to-ceiling windows, and premium finishes throughout. The gourmet kitchen includes top-of-the-line appliances, custom cabinetry, and a large center island. The primary suite offers a spa-like bathroom and walk-in closet. Outside, enjoy the private pool, covered patio, and beautifully landscaped garden. Located in the prestigious Tevragh Zeina neighborhood with easy access to shopping, dining, and the diplomatic quarter.",
  location: "Tevragh Zeina, Nouakchott",
  price: 85000000,
  bedrooms: 4,
  bathrooms: 3,
  sqft: 280,
  yearBuilt: 2020,
  lotSize: "500 m²",
  garage: "2-car covered parking",
  features: [
    "Swimming Pool",
    "Smart Home System",
    "Gourmet Kitchen",
    "Home Office",
    "Walk-in Closets",
    "Marble Floors",
    "Central Air Conditioning",
    "Fireplace",
    "Outdoor Kitchen",
    "Security System",
    "Generator",
    "Solar Panels",
    "Garden",
    "Maid's Quarters",
    "Guest House",
  ],
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  agent: {
    name: "Aminata Ba",
    phone: "+222 36 12 34 56",
    email: "aminata@dreamhouse.mr",
    image: "/placeholder.svg?height=100&width=100",
    languages: ["Arabic", "French", "Wolof"],
  },
}

export default function HouseDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % house.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + house.images.length) % house.images.length)
  }

  const formattedPrice = `${(house.price / 1000000).toFixed(1)}M MRU`

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Home className="h-6 w-6 text-rose-500" />
            <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">Dream</span>
            <span>House</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="font-medium transition-colors hover:text-rose-500">
              Home
            </Link>
            <Link href="/houses" className="font-medium transition-colors hover:text-rose-500">
              Houses
            </Link>
            <Link href="/about" className="font-medium transition-colors hover:text-rose-500">
              About
            </Link>
            <Link href="/contact" className="font-medium transition-colors hover:text-rose-500">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/favorites"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Favorites
            </Link>
            <Link
              href="/login"
              className="rounded-md bg-rose-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-600"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <Link
            href="/houses"
            className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-rose-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Houses
          </Link>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">{house.title}</h1>
                    <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-rose-500" />
                      <span>{house.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-3xl font-bold text-rose-500">{formattedPrice}</div>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={isFavorite ? "bg-rose-500 text-white hover:bg-rose-600" : ""}
                      >
                        <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
                        <span className="sr-only">Add to favorites</span>
                      </Button>
                      <Button size="icon" variant="outline">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="flex flex-col items-center rounded-lg border bg-rose-50 p-4">
                    <BedDouble className="mb-2 h-6 w-6 text-rose-500" />
                    <span className="text-xl font-bold">{house.bedrooms}</span>
                    <span className="text-sm text-muted-foreground">Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg border bg-rose-50 p-4">
                    <Bath className="mb-2 h-6 w-6 text-rose-500" />
                    <span className="text-xl font-bold">{house.bathrooms}</span>
                    <span className="text-sm text-muted-foreground">Bathrooms</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg border bg-rose-50 p-4">
                    <Ruler className="mb-2 h-6 w-6 text-rose-500" />
                    <span className="text-xl font-bold">{house.sqft}</span>
                    <span className="text-sm text-muted-foreground">Square Meters</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg border bg-rose-50 p-4">
                    <span className="mb-2 text-sm text-muted-foreground">Built</span>
                    <span className="text-xl font-bold">{house.yearBuilt}</span>
                    <span className="text-sm text-muted-foreground">Year</span>
                  </div>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="mb-8">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-[500px] w-full"
                    >
                      <Image
                        src={house.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${house.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 text-rose-500 backdrop-blur-sm hover:bg-white hover:text-rose-600"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 text-rose-500 backdrop-blur-sm hover:bg-white hover:text-rose-600"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {house.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 w-8 rounded-full transition-all ${
                          index === currentImageIndex ? "bg-rose-500" : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {house.images.slice(1, 5).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index + 1)}
                      className={`relative h-[100px] overflow-hidden rounded-lg border-2 transition-all ${
                        currentImageIndex === index + 1 ? "border-rose-500" : "border-transparent hover:border-rose-300"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${house.title} - Thumbnail ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="mt-6 space-y-6">
                  <div>
                    <h2 className="mb-3 text-xl font-bold">Description</h2>
                    <p className="text-muted-foreground leading-relaxed">{house.description}</p>
                  </div>
                  <div>
                    <h2 className="mb-3 text-xl font-bold">Property Details</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex justify-between border-b py-3">
                        <span className="font-medium">Lot Size</span>
                        <span>{house.lotSize}</span>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <span className="font-medium">Year Built</span>
                        <span>{house.yearBuilt}</span>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <span className="font-medium">Parking</span>
                        <span>{house.garage}</span>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <span className="font-medium">Floor Area</span>
                        <span>{house.sqft} m²</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="mt-6">
                  <h2 className="mb-4 text-xl font-bold">Features & Amenities</h2>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {house.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 rounded-lg bg-rose-50 p-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-white text-sm">
                          ✓
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="location" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="mb-3 text-xl font-bold">Location & Neighborhood</h2>
                      <p className="text-muted-foreground">
                        Located in the prestigious Tevragh Zeina district, this property offers easy access to
                        embassies, international schools, shopping centers, and fine dining restaurants. The area is
                        known for its modern infrastructure, security, and proximity to the Atlantic Ocean.
                      </p>
                    </div>
                    <div className="h-[400px] rounded-lg bg-muted">
                      <div className="flex h-full items-center justify-center">
                        <p className="text-muted-foreground">
                          Interactive map of Tevragh Zeina, Nouakchott would be displayed here
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center gap-4">
                    <Image
                      src={house.agent.image || "/placeholder.svg"}
                      alt={house.agent.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">{house.agent.name}</h3>
                      <p className="text-sm text-muted-foreground">Licensed Real Estate Agent</p>
                      <div className="mt-1 flex gap-1">
                        {house.agent.languages.map((lang) => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-6 space-y-3">
                    <Button className="w-full bg-rose-500 hover:bg-rose-600">Schedule a Tour</Button>
                    <Button variant="outline" className="w-full border-rose-200 hover:bg-rose-50 hover:text-rose-500">
                      Contact Agent
                    </Button>
                    <Button variant="outline" className="w-full border-rose-200 hover:bg-rose-50 hover:text-rose-500">
                      Request Info
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="border-rose-200 text-rose-500">
                        Phone
                      </Badge>
                      <span className="text-sm">{house.agent.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="border-rose-200 text-rose-500">
                        Email
                      </Badge>
                      <span className="text-sm">{house.agent.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-bold">Mortgage Calculator</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Home Price (MRU)</label>
                      <input
                        type="text"
                        defaultValue={`${house.price.toLocaleString()} MRU`}
                        className="w-full rounded-md border bg-background px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Down Payment (MRU)</label>
                      <input
                        type="text"
                        defaultValue="17,000,000 MRU"
                        className="w-full rounded-md border bg-background px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Loan Term</label>
                      <select className="w-full rounded-md border bg-background px-3 py-2">
                        <option>15 years</option>
                        <option>20 years</option>
                        <option>25 years</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Interest Rate</label>
                      <input
                        type="text"
                        defaultValue="8.5%"
                        className="w-full rounded-md border bg-background px-3 py-2"
                      />
                    </div>
                    <Button className="w-full bg-rose-500 hover:bg-rose-600">Calculate</Button>
                    <div className="rounded-md bg-rose-50 p-4 text-center">
                      <div className="text-sm text-muted-foreground">Estimated Monthly Payment</div>
                      <div className="text-2xl font-bold text-rose-500">680,000 MRU</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-background">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="mb-4 flex items-center gap-2 text-xl font-bold">
                <Home className="h-5 w-5 text-rose-500" />
                <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">Dream</span>
                <span>House</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Mauritania's premier real estate marketplace, connecting buyers with their perfect homes since 2015.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/houses" className="text-muted-foreground transition-colors hover:text-rose-500">
                    Browse Houses
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground transition-colors hover:text-rose-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground transition-colors hover:text-rose-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-rose-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground transition-colors hover:text-rose-500">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Newsletter</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Subscribe to get updates on new listings in Mauritania
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                />
                <button
                  type="submit"
                  className="rounded-md bg-rose-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DreamHouse Mauritania. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
