import type { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { HousesComponent } from "./pages/houses/houses.component";
import { HouseDetailComponent } from "./pages/house-detail/house-detail.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { SupportComponent } from "./support/support.component"; // New component

export const routes: Routes = [
  { 
    path: "", 
    component: HomeComponent,
    data: { title: "الرئيسية" } // Added route data
  },
  { 
    path: "houses", 
    component: HousesComponent,
    data: { title: "العقارات" }
  },
  { 
    path: "houses/:id", 
    component: HouseDetailComponent,
    data: { title: "تفاصيل العقار" }
  },
  { 
    path: "about", 
    component: AboutComponent,
    data: { title: "من نحن" }
  },
  { 
    path: "contact", 
    component: ContactComponent,
    data: { title: "اتصل بنا" }
  },
  { 
    path: "support", 
    component: SupportComponent,
    data: { 
      title: "ادعمنا",
      isAdSpace: true // Custom flag for future ad handling
    }
  },
  { 
    path: "**", 
    redirectTo: "",
    pathMatch: 'full' // More precise redirect
  }
];