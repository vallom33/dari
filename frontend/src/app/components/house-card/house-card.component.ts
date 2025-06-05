import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import type { House } from "../../models/house.model"

@Component({
  selector: "app-house-card",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./house-card.component.html",
  styleUrls: ["./house-card.component.scss"],
})
export class HouseCardComponent {
  @Input() house!: House
  @Input() featured = false

  isFavorite = false

  get formattedPrice(): string {
    return `${(this.house.price / 1000000).toFixed(1)}M MRU`
  }

  get mainImage(): string {
    return this.house.imageUrls && this.house.imageUrls.length > 0
      ? this.house.imageUrls[0]
      : "/assets/images/placeholder-house.jpg"
  }

  toggleFavorite(event: Event) {
    event.preventDefault()
    event.stopPropagation()
    this.isFavorite = !this.isFavorite
    // TODO: Implement favorite functionality with backend
  }
}
