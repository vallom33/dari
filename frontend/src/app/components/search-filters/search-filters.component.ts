import { Component, EventEmitter, Output } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import type { SearchFilters } from "../../models/house.model"

@Component({
  selector: "app-search-filters",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./search-filters.component.html",
  styleUrls: ["./search-filters.component.scss"],
})
export class SearchFiltersComponent {
  @Output() filtersChanged = new EventEmitter<SearchFilters>()

  filters: SearchFilters = {
    city: "",
    quartier: "",
    minPrice: 0,
    maxPrice: 200000000,
    minBedrooms: undefined,
    minBathrooms: undefined,
    propertyType: undefined,
  }

  showAdvancedFilters = false

  // Mauritania cities
  mauritaniaCities = [
    { value: "nouakchott", label: "Nouakchott" },
    { value: "nouadhibou", label: "Nouadhibou" },
    { value: "kiffa", label: "Kiffa" },
    { value: "kaedi", label: "Kaédi" },
    { value: "rosso", label: "Rosso" },
    { value: "zouerate", label: "Zouérate" },
    { value: "atar", label: "Atar" },
    { value: "nema", label: "Néma" },
    { value: "selibaby", label: "Sélibaby" },
    { value: "tidjikja", label: "Tidjikja" },
  ]

  // Quartiers by city
  quartiersByCity: { [key: string]: { value: string; label: string }[] } = {
    nouakchott: [
      { value: "tevragh-zeina", label: "Tevragh Zeina" },
      { value: "ksar", label: "Ksar" },
      { value: "dar-naim", label: "Dar Naim" },
      { value: "arafat", label: "Arafat" },
      { value: "riyadh", label: "Riyadh" },
      { value: "sebkha", label: "Sebkha" },
      { value: "el-mina", label: "El Mina" },
      { value: "toujounine", label: "Toujounine" },
      { value: "teyarett", label: "Teyarett" },
    ],
    nouadhibou: [
      { value: "numerot", label: "Numerot" },
      { value: "cansado", label: "Cansado" },
      { value: "baghdad", label: "Baghdad" },
      { value: "qhairaat", label: "Qhairaat" },
    ],
  }

  propertyTypes = [
    { value: "VILLA", label: "Villa" },
    { value: "APARTMENT", label: "Apartment" },
    { value: "HOUSE", label: "House" },
    { value: "LAND", label: "Land" },
    { value: "COMMERCIAL", label: "Commercial" },
    { value: "TOWNHOUSE", label: "Townhouse" },
  ]

  get availableQuartiers() {
    return this.filters.city ? this.quartiersByCity[this.filters.city] || [] : []
  }

  onCityChange() {
    this.filters.quartier = "" // Reset quartier when city changes
  }

  toggleAdvancedFilters() {
    this.showAdvancedFilters = !this.showAdvancedFilters
  }

  onSearch() {
    // Clean up empty values
    const cleanFilters: SearchFilters = {}

    if (this.filters.city) cleanFilters.city = this.filters.city
    if (this.filters.quartier) cleanFilters.quartier = this.filters.quartier
    if (this.filters.minPrice && this.filters.minPrice > 0) cleanFilters.minPrice = this.filters.minPrice
    if (this.filters.maxPrice && this.filters.maxPrice < 200000000) cleanFilters.maxPrice = this.filters.maxPrice
    if (this.filters.minBedrooms) cleanFilters.minBedrooms = this.filters.minBedrooms
    if (this.filters.minBathrooms) cleanFilters.minBathrooms = this.filters.minBathrooms
    if (this.filters.propertyType) cleanFilters.propertyType = this.filters.propertyType

    this.filtersChanged.emit(cleanFilters)
  }

  formatPrice(value: number): string {
    return `${(value / 1000000).toFixed(1)}M MRU`
  }
}
