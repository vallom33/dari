import { HouseCard } from "@/components/house-card"
import { SearchFilters } from "@/components/search-filters"
import Link from "next/link"
import { Home } from "lucide-react"

// Sample data for houses with Mauritania locations
const houses = [
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
  },
  {
    id: 7,
    title: "Family Home with Garden",
    location: "Dar Naim, Nouakchott",
    price: 42000000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 250,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 8,
    title: "Seaside Bungalow",
    location: "Baghdad, Nouadhibou",
    price: 35000000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 160,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 9,
    title: "Modern Apartment Complex",
    location: "Sebkha, Nouakchott",
    price: 25000000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 120,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 10,
    title: "Luxury Desert Villa",
    location: "Atar",
    price: 65000000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 400,
    imageUrl: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 11,
    title: "Riverside Property",
    location: "Kaédi",
    price: 38000000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 280,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 12,
    title: "Modern City Loft",
    location: "El Mina, Nouakchott",
    price: 22000000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 85,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
]

export default function HousesPage() {
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
            <Link href="/houses" className="font-medium text-rose-500 transition-colors hover:text-rose-600">
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
        <section className="bg-gradient-to-r from-rose-50 to-amber-50 py-12">
          <div className="container">
            <h1 className="mb-8 text-4xl font-bold">Find Your Dream Home in Mauritania</h1>
            <div className="mb-8">
              <SearchFilters />
            </div>
          </div>
        </section>

        <section className="container py-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Available Properties</h2>
              <p className="text-muted-foreground">Showing {houses.length} properties</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="rounded-md border bg-background px-3 py-2 text-sm">
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="size-desc">Size: Largest First</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {houses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-1">
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent">
                <span className="sr-only">Previous Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md border bg-rose-500 text-white"
                aria-current="page"
              >
                1
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent">
                2
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent">
                3
              </Link>
              <span className="flex h-10 w-10 items-center justify-center">...</span>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent">
                8
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent">
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </nav>
          </div>
        </section>
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
