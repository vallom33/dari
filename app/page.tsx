import Link from "next/link"
import { SearchFilters } from "@/components/search-filters"
import { FeaturedHouses } from "@/components/featured-houses"
import { HeroBanner } from "@/components/hero-banner"

export default function HomePage() {
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
        <HeroBanner />
        <section className="container py-12">
          <h2 className="mb-8 text-center text-3xl font-bold">Find Your Dream House</h2>
          <SearchFilters />
        </section>
        <section className="container py-12">
          <h2 className="mb-8 text-3xl font-bold">Featured Houses</h2>
          <FeaturedHouses />
        </section>
        <section className="bg-muted py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Premium Selection</h3>
                <p className="text-muted-foreground">
                  Carefully curated houses that meet our high standards of quality and design.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Personalized Experience</h3>
                <p className="text-muted-foreground">
                  Find the perfect house that matches your unique preferences and lifestyle.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 9V5c0-1.1.9-2 2-2h4" />
                    <path d="M2 13v4c0 1.1.9 2 2 2h4" />
                    <path d="M22 9V5c0-1.1-.9-2-2-2h-4" />
                    <path d="M22 13v4c0-1.1-.9 2-2 2h-4" />
                    <path d="M6 12h12" />
                    <path d="M12 6v12" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Expert Support</h3>
                <p className="text-muted-foreground">
                  Our team of real estate professionals is here to guide you through every step.
                </p>
              </div>
            </div>
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
