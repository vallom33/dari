import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface House {
  id: number
  title: string
  location: string
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  imageUrl: string
}

interface HouseCardProps {
  house: House
}

export function HouseCard({ house }: HouseCardProps) {
  const { id, title, location, price, bedrooms, bathrooms, sqft, imageUrl } = house

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={400}
            height={300}
            className="h-[220px] w-full object-cover"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 text-rose-500 backdrop-blur-sm hover:bg-white/90 hover:text-rose-600"
          >
            <Heart className="h-5 w-5" />
            <span className="sr-only">Add to favorites</span>
          </Button>
          <Badge className="absolute left-2 top-2 bg-primary">${price.toLocaleString()}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="mb-1 line-clamp-1 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{location}</p>
        <div className="grid grid-cols-3 gap-2 text-center text-sm">
          <div className="rounded-md bg-muted p-2">
            <p className="font-medium">{bedrooms}</p>
            <p className="text-xs text-muted-foreground">Beds</p>
          </div>
          <div className="rounded-md bg-muted p-2">
            <p className="font-medium">{bathrooms}</p>
            <p className="text-xs text-muted-foreground">Baths</p>
          </div>
          <div className="rounded-md bg-muted p-2">
            <p className="font-medium">{sqft.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Sq Ft</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/houses/${id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
