import Link from "next/link"
import { SearchFilters } from "@/components/search-filters"
import { FeaturedHouses } from "@/components/featured-houses"
import { HeroBanner } from "@/components/hero-banner"
import { HouseCarousel } from "@/frontend/components/house-carousel"
import { Button } from "@/components/ui/button"
import { MoveRight, Home, MapPin, Users } from "lucide-react"

export default function HomePage() {
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
            <Link href="/" className="font-medium text-rose-500 transition-colors hover:text-rose-600">
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
        <HeroBanner />

        <section className="container py-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Find Your Dream House in Mauritania</h2>
          <SearchFilters />
        </section>

        <section className="container py-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured Houses</h2>
            <Link href="/houses" className="group flex items-center gap-2 text-rose-500 transition-all hover:gap-3">
              View all houses
              <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <FeaturedHouses />
        </section>

        <section className="bg-gradient-to-r from-rose-50 to-amber-50 py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold">Explore Mauritania's Finest Properties</h2>
            <HouseCarousel />
          </div>
        </section>

        <section className="container py-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full bg-rose-100 p-6">
                <MapPin className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Prime Locations</h3>
              <p className="text-muted-foreground">
                Discover properties in the most desirable neighborhoods across Mauritania, from beachfront villas in
                Nouakchott to modern apartments in Nouadhibou.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full bg-amber-100 p-6">
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
                  className="h-8 w-8 text-amber-500"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Exceptional Quality</h3>
              <p className="text-muted-foreground">
                Every property in our collection meets our rigorous standards for quality, design, and comfort, ensuring
                you find only the best homes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full bg-rose-100 p-6">
                <Users className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Our team of local real estate experts provides personalized assistance throughout your home buying
                journey in Mauritania.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-rose-600 to-amber-600 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Find Your Perfect Home in Mauritania?</h2>
            <p className="mb-8 text-lg text-white/90">
              Join thousands of satisfied homeowners who found their dream property with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/houses">Browse Houses</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-600"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
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
