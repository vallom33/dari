export interface House {
  id: number
  title: string
  description: string
  city: string
  quartier: string
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  yearBuilt: number
  lotSize: string
  garage: string
  propertyType: PropertyType
  status: PropertyStatus
  features: string[]
  imageUrls: string[]
  featured: boolean
  createdAt: string
  updatedAt: string
  agentName: string
  agentPhone: string
  agentEmail: string
  agentImage: string
}

export enum PropertyType {
  VILLA = "VILLA",
  APARTMENT = "APARTMENT",
  HOUSE = "HOUSE",
  LAND = "LAND",
  COMMERCIAL = "COMMERCIAL",
  TOWNHOUSE = "TOWNHOUSE",
}

export enum PropertyStatus {
  FOR_SALE = "FOR_SALE",
  SOLD = "SOLD",
  PENDING = "PENDING",
  OFF_MARKET = "OFF_MARKET",
}

export interface SearchFilters {
  city?: string
  quartier?: string
  minPrice?: number
  maxPrice?: number
  minBedrooms?: number
  minBathrooms?: number
  propertyType?: PropertyType
  page?: number
  size?: number
  sortBy?: string
  sortDir?: string
}
