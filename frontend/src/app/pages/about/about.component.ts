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
      name: "Ahmed Diallo",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in Mauritanian real estate, Ahmed founded DreamHouse with a vision to transform the property market.",
      image: "/assets/images/team/ahmed.jpg",
    },
    {
      name: "Fatima Mint Mohamed",
      position: "Chief Operations Officer",
      bio: "Fatima oversees all operations and ensures that our clients receive the highest level of service throughout their property journey.",
      image: "/assets/images/team/fatima.jpg",
    },
    {
      name: "Omar Sy",
      position: "Head of Sales",
      bio: "Omar leads our talented sales team and has personally helped hundreds of families find their perfect home in Mauritania.",
      image: "/assets/images/team/omar.jpg",
    },
    {
      name: "Aisha Camara",
      position: "Marketing Director",
      bio: "Aisha brings creative marketing strategies that showcase our properties to the right audience across Mauritania and beyond.",
      image: "/assets/images/team/aisha.jpg",
    },
  ]
}
