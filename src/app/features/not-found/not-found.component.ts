import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="error-404">
      <div class="error-wrapper">
        <img
          src="assets/error-404.png"
          alt=""
          class="error-ghost"
          aria-hidden="true"
        />

        <img
          src="assets/lost-astronaut.png"
          alt="Lost astronaut drifting in space"
          class="error-astronaut"
        />

        <div class="error-card">
          <h2 class="error-title">WARNING — CONTACT LOST</h2>

          <p class="error-text">
            You've left this domain and<br />
            have wandered too far, I fear.<br /><br />
            Return to Landing?
            <span class="lost-glyph">🜃</span>
          </p>

          <a routerLink="/" class="error-button">Take Me Home</a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
