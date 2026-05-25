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
              Hello, and welcome. I’m Niki — a full‑stack developer with a
              designer’s instinct and a love for systems that feel intentional.
              I approach software the way I approach design: with structure,
              clarity, and a deep respect for how people move through what we
              build. I want my work to feel crafted, expressive, and genuinely
              useful.
            </p>

            <p>
              My design philosophy leans on cohesive palettes, accessible
              contrast, and structure that feels both clean and lived‑in. I
              enjoy shaping design tokens, refining color systems, and building
              interfaces that balance clarity with character. On the engineering
              side, I focus on maintainable architecture and components that
              communicate without noise.
            </p>

            <p>
              My communication style is intentional and iterative - refining
              ideas in stages, keeping things organized, and bringing a bit of
              levity when it fits. I like details that support the bigger
              picture and decisions that feel intentional. Whether I’m designing
              or coding, I’m always aiming for coherence: experiences shaped
              with care, clarity, and a sense of story.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.css',
})
export class AboutComponent {}
