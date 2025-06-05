import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HouseService } from "../../services/house.service";
import { House, SearchFilters } from "../../models/house.model";
import { SearchFiltersComponent } from "../../components/search-filters/search-filters.component";
import { HouseCardComponent } from "../../components/house-card/house-card.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    SearchFiltersComponent, 
    HouseCardComponent,
    MatIconModule
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  featuredHouses: House[] = [];
  loading = true;
  currentSlide = 0;

  heroSlides = [
    {
      image: "/assets/images/hero-1.jpg",
      title: "اكتشف الفلل الفاخرة في نواكشوط",
      subtitle: "عقارات حصرية في العاصمة الموريتانية النابضة بالحياة",
    },
    {
      image: "/assets/images/hero-2.jpg",
      title: "حياة على شاطئ البحر في نواذيبو",
      subtitle: "استيقظ على مناظر خلابة للمحيط كل يوم",
    },
    {
      image: "/assets/images/hero-3.jpg",
      title: "سحر تقليدي في كيفة",
      subtitle: "جرب العمارة والثقافة الموريتانية الأصيلة",
    },
  ];

  constructor(private houseService: HouseService) {}

  ngOnInit() {
    this.loadFeaturedHouses();
    this.startHeroSlideshow();
  }

  loadFeaturedHouses() {
    this.houseService.getFeaturedHouses().subscribe({
      next: (houses) => {
        this.featuredHouses = houses.slice(0, 6);
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading featured houses:", error);
        this.loading = false;
      },
    });
  }

  onFiltersChanged(filters: SearchFilters) {
    console.log("Filters changed:", filters);
  }

  startHeroSlideshow() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
    }, 5000);
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  get currentHeroSlide() {
    return this.heroSlides[this.currentSlide];
  }
}