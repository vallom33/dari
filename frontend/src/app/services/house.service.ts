import { Injectable } from "@angular/core"
import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"
import { House, SearchFilters } from "../models/house.model"


export interface PageResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  size: number
  number: number
}

@Injectable({
  providedIn: "root",
})
export class HouseService {
  private apiUrl = "http://localhost:8080/api/houses"

  constructor(private http: HttpClient) {}

  getAllHouses(page = 0, size = 12): Observable<PageResponse<House>> {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString())

    return this.http.get<PageResponse<House>>(this.apiUrl, { params })
  }

  getHouseById(id: number): Observable<House> {
    return this.http.get<House>(`${this.apiUrl}/${id}`)
  }

  getFeaturedHouses(): Observable<House[]> {
    return this.http.get<House[]>(`${this.apiUrl}/featured`)
  }

  searchHouses(filters: SearchFilters): Observable<PageResponse<House>> {
    let params = new HttpParams()

    if (filters.city) params = params.set("city", filters.city)
    if (filters.quartier) params = params.set("quartier", filters.quartier)
    if (filters.minPrice) params = params.set("minPrice", filters.minPrice.toString())
    if (filters.maxPrice) params = params.set("maxPrice", filters.maxPrice.toString())
    if (filters.minBedrooms) params = params.set("minBedrooms", filters.minBedrooms.toString())
    if (filters.minBathrooms) params = params.set("minBathrooms", filters.minBathrooms.toString())
    if (filters.propertyType) params = params.set("propertyType", filters.propertyType)
    if (filters.page) params = params.set("page", filters.page.toString())
    if (filters.size) params = params.set("size", filters.size.toString())
    if (filters.sortBy) params = params.set("sortBy", filters.sortBy)
    if (filters.sortDir) params = params.set("sortDir", filters.sortDir)

    return this.http.get<PageResponse<House>>(`${this.apiUrl}/search`, { params })
  }

  getHousesByCity(city: string, page = 0, size = 12): Observable<PageResponse<House>> {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString())

    return this.http.get<PageResponse<House>>(`${this.apiUrl}/city/${city}`, { params })
  }
}
