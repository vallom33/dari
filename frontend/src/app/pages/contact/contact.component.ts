import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

interface ContactForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

interface OfficeLocation {
  city: string
  address: string
  phone: string
  email: string
  hours: string
}

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  formSubmitted = false
  formError = false

  contactForm: ContactForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  }

  officeLocations: OfficeLocation[] = [
    {
      city: "Nouakchott",
      address: "123 Avenue de l'Indépendance, Tevragh Zeina",
      phone: "+222 45 25 25 25",
      email: "nouakchott&#64;dreamhouse.mr",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
    },
    {
      city: "Nouadhibou",
      address: "45 Rue du Port, Centre-Ville",
      phone: "+222 45 74 12 36",
      email: "nouadhibou&#64;dreamhouse.mr",
      hours: "Mon-Fri: 9AM-5PM, Sat: 10AM-2PM",
    },
    {
      city: "Kiffa",
      address: "78 Avenue Principale",
      phone: "+222 46 59 87 32",
      email: "kiffa&#64;dreamhouse.mr",
      hours: "Mon-Fri: 8:30AM-5:30PM",
    },
  ]

  submitForm(): void {
    if (!this.contactForm.firstName || !this.contactForm.email || !this.contactForm.message) {
      this.formError = true
      return
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", this.contactForm)

    // Reset form and show success message
    this.formError = false
    this.formSubmitted = true
    this.contactForm = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }
  }
}
