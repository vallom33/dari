import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
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
            <Link href="/about" className="font-medium text-primary transition-colors hover:text-primary">
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
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About DreamHouse</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We're passionate about helping people find their perfect home. With years of experience in real estate,
                we make the home buying process simple and enjoyable.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2015, DreamHouse began with a simple mission: to revolutionize the way people buy and sell
                  homes. We recognized that the traditional real estate process was often stressful, time-consuming, and
                  overwhelming for both buyers and sellers.
                </p>
                <p className="text-muted-foreground">
                  Our team of experienced real estate professionals combines cutting-edge technology with personalized
                  service to create an exceptional experience for our clients. We believe that finding your dream home
                  should be exciting, not exhausting.
                </p>
                <p className="text-muted-foreground">
                  Today, we've helped thousands of families find their perfect homes across the country, and we continue
                  to innovate and improve our services to better serve our community.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="DreamHouse team"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold">Our Values</h2>
              <p className="text-muted-foreground">
                These core values guide everything we do and shape how we serve our clients.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                  <h3 className="mb-2 text-xl font-bold">Integrity</h3>
                  <p className="text-muted-foreground">
                    We believe in honest, transparent communication and always act in our clients' best interests.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                  <h3 className="mb-2 text-xl font-bold">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for excellence in everything we do, from our service to our technology platform.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="m22 21-3-3m0 0a5 5 0 1 0-7-7 5 5 0 0 0 7 7Z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Client Focus</h3>
                  <p className="text-muted-foreground">
                    Our clients are at the center of everything we do. Their success is our success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold">Meet Our Team</h2>
              <p className="text-muted-foreground">
                Our experienced team of real estate professionals is here to guide you through every step of your home
                buying or selling journey.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Sarah Johnson"
                    width={150}
                    height={150}
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="mb-1 text-xl font-bold">Sarah Johnson</h3>
                  <p className="mb-2 text-sm text-muted-foreground">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground">
                    With over 15 years in real estate, Sarah leads our team with passion and expertise.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Michael Chen"
                    width={150}
                    height={150}
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="mb-1 text-xl font-bold">Michael Chen</h3>
                  <p className="mb-2 text-sm text-muted-foreground">Senior Agent</p>
                  <p className="text-sm text-muted-foreground">
                    Michael specializes in luxury properties and has helped hundreds of clients find their dream homes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Emily Rodriguez"
                    width={150}
                    height={150}
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="mb-1 text-xl font-bold">Emily Rodriguez</h3>
                  <p className="mb-2 text-sm text-muted-foreground">Marketing Director</p>
                  <p className="text-sm text-muted-foreground">
                    Emily ensures our properties get maximum exposure through innovative marketing strategies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-primary py-12 text-primary-foreground md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold">Ready to Find Your Dream Home?</h2>
              <p className="text-primary-foreground/80">
                Let our experienced team help you navigate the real estate market and find the perfect property for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" asChild>
                  <Link href="/houses">Browse Houses</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
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
