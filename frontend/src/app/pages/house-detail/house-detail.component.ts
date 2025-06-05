import { Component, OnInit } from "@angular/core";
import { CommonModule, NgIf, NgFor } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { HouseService } from "../../services/house.service";
import { House } from "../../models/house.model";

@Component({
  selector: "app-house-detail",
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf, NgFor],
  templateUrl: "./house-detail.component.html",
  styleUrls: ["./house-detail.component.scss"],
})
export class HouseDetailComponent implements OnInit {
  house: House | null = null;
  loading = true;
  error = false;
  currentImageIndex = 0;
  isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params["id"];
      this.loadHouse(id);
    });
  }

  loadHouse(id: number): void {
    this.loading = true;
    this.error = false;
    this.houseService.getHouseById(id).subscribe({
      next: (house) => {
        this.house = house;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading house:", err);
        this.error = true;
        this.loading = false;
      },
    });
  }

  nextImage(): void {
    if (this.house?.imageUrls?.length) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.house.imageUrls.length;
    }
  }

  prevImage(): void {
    if (this.house?.imageUrls?.length) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.house.imageUrls.length) % this.house.imageUrls.length;
    }
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  formatPrice(price: number): string {
    return `${(price / 1000000).toFixed(1)}M MRU`;
  }

  openLink(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}