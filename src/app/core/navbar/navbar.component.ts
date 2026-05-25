import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <!-- Hamburger -->
      <button
        class="nav-hamburger"
        (click)="isMenuOpen = !isMenuOpen"
        aria-label="Toggle navigation"
      >
        <span class="hamburger-icon" [class.open]="isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <!-- Theme Toggle -->
      <button
        class="theme-toggle"
        (click)="toggleTheme.emit()"
        aria-label="Toggle theme"
      >
        <span class="theme-label">Toggle Me</span>
        <span class="theme-icon">🜁</span>
      </button>

      <!-- Nav Links -->
      <ul class="nav-links" [class.open]="isMenuOpen">
        <li>
          <a
            routerLink="/"
            routerLinkActive="active"
            (click)="isMenuOpen = false"
            >Home</a
          >
        </li>
        <li>
          <a
            routerLink="/about"
            routerLinkActive="active"
            (click)="isMenuOpen = false"
            >About</a
          >
        </li>
        <li>
          <a
            routerLink="/projects"
            routerLinkActive="active"
            (click)="isMenuOpen = false"
            >Projects</a
          >
        </li>
        <li>
          <a
            routerLink="/resume"
            routerLinkActive="active"
            (click)="isMenuOpen = false"
            >Resume</a
          >
        </li>
      </ul>
    </nav>
  `,
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Output() toggleTheme = new EventEmitter<void>();

  isMenuOpen = false;
}
