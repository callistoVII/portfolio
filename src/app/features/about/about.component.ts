import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
  imports: [],
  template: `
    <section class="about" id="about">
      <div class="about__inner">
        <!-- Header -->
        <header class="about__header">
          <h2 class="about__title">ABOUT ME</h2>
          <div class="about__subtitle">
            <span class="about__label">Developer</span>
            <span class="about__glyph">✶</span>
            <span class="about__label">Designer</span>
          </div>
        </header>

        <!-- Content wrapper (positioning context for submark + card) -->
        <div class="about__content">
          <!-- Oversized ghosted submark -->
          <div class="about__submark"></div>

          <!-- Body card that overlaps the submark -->
          <div class="about__body-card">
            <p>
              Hello. My name is Nicole, and I am a full-stack developer with a
              designer’s eye and a love for systems that feel intentional. I
              approach software the way I approach design: with structure,
              clarity, and a deep respect for how people experience what we
              build.
            </p>

            <p>
              My design approach is rooted in warm earth-tone palettes,
              accessible contrast, and clean, intentional structure. I enjoy
              crafting design tokens, tuning color systems, and shaping UI that
              balances clarity with personality. On the development side, I
              focus on maintainable architecture, thoughtful component design,
              and interfaces that communicate without noise.
            </p>

            <p>
              My communication style is collaborative and iterative. I enjoy
              refining ideas step by step, keeping things organized, and mixing
              in a bit of humor when the moment calls for it. I like working
              through ideas in stages, refining details without losing sight of
              the bigger picture. Whether I’m coding or designing, my goal is
              always coherence — a product where every decision supports the
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.css',
})
export class AboutComponent {}
