import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Bath, BedDouble, Heart, MapPin, Ruler, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Sample house data
const house = {
  id: 1,
  title: "Modern Villa with Pool",
  description:
    "This stunning modern villa features an open floor plan with high ceilings, floor-to-ceiling windows, and premium finishes throughout. The gourmet kitchen includes top-of-the-line appliances, custom cabinetry, and a large center island. The primary suite offers a spa-like bathroom and walk-in closet. Outside, enjoy the private pool, covered patio, and beautifully landscaped yard. Located in a prestigious neighborhood with easy access to shopping, dining, and entertainment.",
  location: "Beverly Hills, CA",
  price: 1250000,
  bedrooms: 4,
  bathrooms: 3,
  sqft: 2800,
  yearBuilt: 2018,
  lotSize: "0.25 acres",
  garage: "2-car attached",
  features: [
    "Swimming Pool",
    "Smart Home System",
    "Gourmet Kitchen",
    "Home Office",
    "Walk-in Closets",
    "Hardwood Floors",
    "Central Air",
    "Fireplace",
    "Outdoor Kitchen",
    "Security System",
  ],
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  agent: {
    name: "Sarah Johnson",
    phone: "(555) 123-4567",
    email: "sarah@dreamhouse.com",
    image: "/placeholder.svg?height=100&width=100",
  },
}

export default function HouseDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-primary">Dream</span>House
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/houses" className="font-medium transition-colors hover:text-primary">
              Houses
            </Link>
            <Link href="/about" className="font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="font-medium transition-colors hover:text-primary">
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
              className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <Link href="/houses" className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Houses
          </Link>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">{house.title}</h1>
                    <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{house.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-2xl font-bold text-primary">${house.price.toLocaleString()}</div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline">
                        <Heart className="h-4 w-4" />
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
                  <div className="flex flex-col items-center rounded-lg border p-3">
                    <BedDouble className="mb-1 h-5 w-5 text-muted-foreground" />
                    <span className="text-lg font-medium">{house.bedrooms}</span>
                    <span className="text-xs text-muted-foreground">Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg border p-3">
                    <Bath className="mb-1 h-5 w-5 text-muted-foreground" />
                    <span className="text-lg font-medium">{house.bathrooms}</span>
                    <span className="text-xs text-muted-foreground">Bathrooms</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg border p-3">
                    <Ruler className="mb-1 h-5 w-5 text-muted-foreground" />
                    <span className="text-lg font-medium">{house.sqft.toLocaleString()}</span>
                    <span className="text-xs text-muted-foreground">Square Feet</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg border p-3">
                    <span className="mb-1 text-sm text-muted-foreground">Built</span>
                    <span className="text-lg font-medium">{house.yearBuilt}</span>
                    <span className="text-xs text-muted-foreground">Year</span>
                  </div>
                </div>
              </div>
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Image
                    src={house.images[0] || "/placeholder.svg"}
                    alt={house.title}
                    width={800}
                    height={600}
                    className="h-[400px] w-full rounded-lg object-cover"
                  />
                </div>
                {house.images.slice(1, 4).map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${house.title} - Image ${index + 2}`}
                    width={400}
                    height={300}
                    className="h-[200px] w-full rounded-lg object-cover"
                  />
                ))}
              </div>
              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="map">Map</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="mt-4 space-y-4">
                  <div>
                    <h2 className="mb-2 text-xl font-bold">Description</h2>
                    <p className="text-muted-foreground">{house.description}</p>
                  </div>
                  <div>
                    <h2 className="mb-2 text-xl font-bold">Property Details</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex justify-between border-b py-2">
                        <span className="font-medium">Lot Size</span>
                        <span>{house.lotSize}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="font-medium">Year Built</span>
                        <span>{house.yearBuilt}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="font-medium">Garage</span>
                        <span>{house.garage}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="font-medium">Square Feet</span>
                        <span>{house.sqft.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="mt-4">
                  <h2 className="mb-4 text-xl font-bold">Features & Amenities</h2>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                    {house.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          ✓
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="map" className="mt-4">
                  <div className="h-[400px] rounded-lg bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <p className="text-muted-foreground">Map view would be displayed here</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div>
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
                      <p className="text-sm text-muted-foreground">Listing Agent</p>
                    </div>
                  </div>
                  <div className="mb-6 space-y-2">
                    <Button className="w-full">Schedule a Tour</Button>
                    <Button variant="outline" className="w-full">
                      Contact Agent
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Phone
                      </Badge>
                      <span className="text-sm">{house.agent.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Email
                      </Badge>
                      <span className="text-sm">{house.agent.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="mt-6 rounded-lg border p-6">
                <h3 className="mb-4 text-lg font-bold">Mortgage Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Home Price</label>
                    <input
                      type="text"
                      defaultValue={`$${house.price.toLocaleString()}`}
                      className="w-full rounded-md border bg-background px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Down Payment</label>
                    <input
                      type="text"
                      defaultValue="$250,000"
                      className="w-full rounded-md border bg-background px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Loan Term</label>
                    <select className="w-full rounded-md border bg-background px-3 py-2">
                      <option>30 years</option>
                      <option>15 years</option>
                      <option>10 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Interest Rate</label>
                    <input
                      type="text"
                      defaultValue="4.5%"
                      className="w-full rounded-md border bg-background px-3 py-2"
                    />
                  </div>
                  <Button className="w-full">Calculate</Button>
                  <div className="rounded-md bg-muted p-4 text-center">
                    <div className="text-sm text-muted-foreground">Estimated Monthly Payment</div>
                    <div className="text-2xl font-bold text-primary">$5,067</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-background">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">DreamHouse</h3>
              <p className="text-sm text-muted-foreground">
                Finding your perfect home has never been easier with our premium house marketplace.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/houses" className="text-muted-foreground hover:text-foreground">
                    Browse Houses
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Newsletter</h3>
              <p className="mb-4 text-sm text-muted-foreground">Subscribe to get updates on new listings</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                />
                <button
                  type="submit"
                  className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DreamHouse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
