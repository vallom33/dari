import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface TeamMember {
  name: string
  position: string
  bio: string
  image: string
}

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
  teamMembers: TeamMember[] = [
    {
      name: "Abdou  jeddou",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in Mauritanian real estate, abdou founded DreamHouse with a vision to transform the property market.",
      image: "/assets/images/team/ahmed.jpg",
    },
   
    {
      name: "Omar vall",
      position: "Head of Sales",
      bio: "Omar leads our talented sales team and has personally helped hundreds of families find their perfect home in Mauritania.",
      image: "/assets/images/team/omar.jpg",
    },
    
  ]
}
