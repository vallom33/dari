import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dari-home-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="dari-home-button" (click)="goHome()">
      <mat-icon>home</mat-icon>
      <span>داري</span>
    </div>
  `,
  styles: [`
    .dari-home-button {
      position: fixed;
      top: 15px;
      left: 15px;
      z-index: 1000;
      background: #fff;
      padding: 8px 15px;
      border-radius: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .dari-home-button:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    .dari-home-button mat-icon {
      margin-right: 5px;
      color: #4a6baf;
    }
    .dari-home-button span {
      font-weight: bold;
      color: #4a6baf;
      font-family: 'Tahoma', sans-serif;
    }
  `]
})
export class DariHomeButtonComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}