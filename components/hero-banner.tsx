import Link from "next/link"
import Image from "next/image"

export function HeroBanner() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Modern house exterior"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>
      <div className="container relative z-10 flex min-h-[600px] flex-col items-center justify-center py-24 text-center text-white">
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Find Your Perfect Home with DreamHouse
        </h1>
        <p className="mb-8 max-w-xl text-lg text-gray-200">
          Discover a curated selection of beautiful houses designed to match your lifestyle and preferences.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/houses"
            className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse Houses
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
