import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-card hero-split">
        <a routerLink="/projects" class="hero-logo-link">
          <picture>
            <source
              srcset="assets/logo-light.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="assets/logo-light.png"
              alt="NIKI NIELSEN Logo"
              class="hero-logo-img"
            />
          </picture>

          <span class="hero-logo-cta">View My Work</span>
        </a>

        <div class="hero-content">
          <div class="hero-accent-wrap">
            <span class="hero-accent-top">🜁</span>
            <h2 class="hero-subtitle">Art & Architecture</h2>
            <span class="hero-accent-bottom">🜃</span>
          </div>

          <p class="hero-text">
            I build expressive, narrative‑infused digital experiences with clean
            architecture, thoughtful design, and a touch of artistic flair. I
            blend technical expertise with a passion for storytelling to create
            engaging, user‑centered applications that resonate with audiences
            and leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./landing.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent {}
