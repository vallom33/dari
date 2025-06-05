import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { DariHomeButtonComponent } from "./components/dari-home-button/dari-home-button.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HttpClientModule,
    DariHomeButtonComponent,
    HeaderComponent,
    FooterComponent,
    MatIconModule
  ],
  template: `
    <app-dari-home-button></app-dari-home-button>
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [
    `
    main {
      min-height: 100vh;
    }
    `,
  ],
})
export class AppComponent {
  title = "DreamHouse Mauritania";
}