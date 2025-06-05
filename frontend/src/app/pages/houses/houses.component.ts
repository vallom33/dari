import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { HouseService, PageResponse } from "../../services/house.service"
import { House, SearchFilters } from "../../models/house.model"
import { SearchFiltersComponent } from "../../components/search-filters/search-filters.component"
import { HouseCardComponent } from "../../components/house-card/house-card.component"


@Component({
  selector: "app-houses",
  standalone: true,
  imports: [CommonModule, RouterModule, SearchFiltersComponent, HouseCardComponent],
  templateUrl: "./houses.component.html",
  styleUrls: ["./houses.component.scss"],
})
export class HousesComponent implements OnInit {
  houses: House[] = []
  loading = true
  currentPage = 0
  totalPages = 0
  totalElements = 0
  pageSize = 12
  currentFilters: SearchFilters = {}

  constructor(private houseService: HouseService) {}

  ngOnInit() {
    this.loadHouses()
  }

  loadHouses(page = 0) {
    this.loading = true
    this.currentPage = page

    const searchRequest = {
      ...this.currentFilters,
      page: page,
      size: this.pageSize,
    }

    const request =
      Object.keys(this.currentFilters).length > 0
        ? this.houseService.searchHouses(searchRequest)
        : this.houseService.getAllHouses(page, this.pageSize)

    request.subscribe({
      next: (response: PageResponse<House>) => {
        this.houses = response.content
        this.totalPages = response.totalPages
        this.totalElements = response.totalElements
        this.loading = false
      },
      error: (error) => {
        console.error("Error loading houses:", error)
        this.loading = false
      },
    })
  }

  onFiltersChanged(filters: SearchFilters) {
    this.currentFilters = filters
    this.loadHouses(0) // Reset to first page when filters change
  }

  onPageChange(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.loadHouses(page)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  get pageNumbers(): number[] {
    const pages: number[] = []
    const maxVisiblePages = 5
    const startPage = Math.max(0, this.currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(this.totalPages - 1, startPage + maxVisiblePages - 1)

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    return pages
  }
}
