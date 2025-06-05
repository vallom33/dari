import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [], // Remove AppComponent from here
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    RouterModule.forRoot(routes),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent], // Keep this as is
})
export class AppModule {}