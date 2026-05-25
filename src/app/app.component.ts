import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar (toggleTheme)="toggleDarkMode()"></app-navbar>

    <main>
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      document.body.classList.add('dark');
    }
  }

  toggleDarkMode() {
    console.log('toggle fired'); // debug
    document.body.classList.toggle('dark');

    localStorage.setItem(
      'darkMode', // Allow user to toggle between light mode or dark depending on preference
      document.body.classList.contains('dark') ? 'true' : 'false',
    );
  }
}
