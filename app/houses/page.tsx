import { HouseCard } from "@/components/house-card"
import { SearchFilters } from "@/components/search-filters"

// Sample data for houses
const houses = [
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
  {
    id: 7,
    title: "Colonial Estate",
    location: "Boston, MA",
    price: 1650000,
    bedrooms: 5,
    bathrooms: 3.5,
    sqft: 3200,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 8,
    title: "Beachfront Bungalow",
    location: "Miami, FL",
    price: 2100000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1900,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 9,
    title: "Contemporary Condo",
    location: "San Francisco, CA",
    price: 1200000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
]

export default function HousesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-primary">Dream</span>House
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="/" className="font-medium transition-colors hover:text-primary">
              Home
            </a>
            <a href="/houses" className="font-medium text-primary transition-colors hover:text-primary">
              Houses
            </a>
            <a href="/about" className="font-medium transition-colors hover:text-primary">
              About
            </a>
            <a href="/contact" className="font-medium transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="/favorites"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Favorites
            </a>
            <a
              href="/login"
              className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-8">
          <h1 className="mb-8 text-3xl font-bold">Browse Houses</h1>
          <div className="mb-8">
            <SearchFilters />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {houses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        </section>
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
                  <a href="/houses" className="text-muted-foreground hover:text-foreground">
                    Browse Houses
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </a>
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
