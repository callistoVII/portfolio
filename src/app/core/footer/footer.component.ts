import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="footer">
      <nav aria-label="Footer navigation">
        <ul class="footer-nav">
          <li><a routerLink="/">home</a></li>
          <li><a routerLink="/about">about</a></li>
          <li><a routerLink="/resume">resume</a></li>
          <li><a routerLink="/projects">projects</a></li>
        </ul>
      </nav>

      <p class="copyright">
        &copy; {{ currentYear }} Niki Nielsen
        <span class="footer-accent">✧</span> All rights reserved.
      </p>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
