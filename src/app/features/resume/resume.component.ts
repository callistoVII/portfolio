import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <section class="resume-page">
      <header class="resume-header">
        <h1>RESUME</h1>
      </header>

      <!-- SUMMARY CARD -->
      <div class="resume__summary card">
        <h2>Summary</h2>
        <p>
          Full-stack developer with a designer’s eye and a systems-driven
          mindset. I build thoughtful, maintainable applications with a focus on
          clarity, accessibility, and intentional structure. My background
          blends software engineering, UI/UX design, and visual storytelling -
          allowing me to approach problems from both architectural and
          experiential perspectives.
        </p>
      </div>

      <!-- STACKED CARD GRID -->
      <section class="resume resume--stacked">
        <!-- SKILLS -->
        <div class="resume__row card">
          <h2>SKILLS</h2>

          <div class="resume__content">
            <div class="resume__group">
              <h3>Languages</h3>
              <p>TypeScript · JavaScript · HTML · CSS · Python</p>
            </div>

            <div class="resume__group">
              <h3>Frameworks & Runtime</h3>
              <p>Angular · Node.js · MongoDB (NoSQL)</p>
            </div>

            <div class="resume__group">
              <h3>Systems & Architecture</h3>
              <p>
                Internet systems architecture · RESTful API design · NoSQL data
                modeling · Authentication flows · Component-driven UI
                architecture · Design tokens & theming systems · State
                management patterns (RxJS)
              </p>
            </div>

            <div class="resume__group">
              <h3>DevOps & AI-Augmented Workflow</h3>
              <p>
                Git · GitHub · Replit · Deployment workflows · Automated testing
                basics
              </p>
              <p>
                AI-assisted development for code generation, refactoring,
                documentation, architectural planning, and DevOps task
                automation.
              </p>
            </div>
          </div>
        </div>

        <!-- EXPERIENCE -->
        <div class="resume__row card">
          <h2>EXPERIENCE</h2>

          <div class="resume__content">
            <article class="resume__experience">
              <h3>Full-Stack Developer — Project Work & Freelance</h3>
              <p class="resume__meta">2024–Present</p>
              <ul>
                <li>
                  Built full-stack applications using Angular, Node.js, and
                  RESTful APIs.
                </li>
                <li>
                  Designed reusable UI components and theme-aware design tokens.
                </li>
                <li>
                  Developed responsive layouts with accessibility-focused color
                  systems.
                </li>
                <li>
                  Created brand-aligned visuals, icons, and interface elements.
                </li>
                <li>Worked iteratively through structured feedback cycles.</li>
              </ul>
            </article>

            <article class="resume__experience">
              <h3>Freelance Graphic Designer & Illustrator</h3>
              <p class="resume__meta">2009–Present</p>
              <ul>
                <li>
                  Produced brand identities, logos, and visual systems for small
                  businesses.
                </li>
                <li>
                  Applied color theory, typography, and composition to create
                  cohesive visuals.
                </li>
                <li>
                  Delivered digital and print assets with consistent brand
                  alignment.
                </li>
                <li>
                  Translated abstract ideas into polished visuals through client
                  collaboration.
                </li>
              </ul>
            </article>
          </div>
        </div>

        <!-- EDUCATION -->
        <div class="resume__row card">
          <h2>EDUCATION</h2>

          <div class="resume__content">
            <article class="resume__education">
              <h3>Full-Stack Web Development</h3>
              <p class="resume__meta">
                CareerSource / Web Development Cohort · 2023–Present
              </p>
            </article>

            <article class="resume__education">
              <h3>Graphic Design & Illustration</h3>
              <p class="resume__meta">2006–2008</p>
            </article>
          </div>
        </div>

        <!-- DOWNLOAD -->
        <div class="resume__row card resume__download">
          <h2>Download</h2>
          <a
            class="resume__download-button"
            href="/assets/Nicole-Nielsen-Resume-ghost.pdf"
            download
          >
            Digital Resume - PDF
          </a>
        </div>
      </section>
    </section>
  `,
  styleUrl: './resume.component.css',
})
export class ResumeComponent {}
