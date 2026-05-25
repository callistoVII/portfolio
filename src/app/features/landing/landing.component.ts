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
            I design and craft digital experiences that fuse structure and
            narrative identity with an intentional artistic edge. I'm driven by
            curiosity and tenacity - the kind that keeps me refining until every
            detail supports the whole. My work focuses on design clarity and
            technical precision, creating interfaces that are expressive,
            story‑driven, and genuinely enjoyable to use.
          </p>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./landing.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent {}
