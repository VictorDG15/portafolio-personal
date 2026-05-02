import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  template: `
<section id="about" class="section">
  <div class="container">
    <h2 class="section-title aos-hidden">Quién <span>soy</span></h2>
    <div class="section-divider aos-hidden"></div>

    <div class="about-grid">
      <!-- Text block -->
      <div class="about-text aos-hidden">
        <p>{{ personal.about }}</p>

        <div class="about-highlights">
          <div class="highlight" *ngFor="let h of highlights">
            <i class="fa" [class]="h.icon" style="color:var(--accent)"></i>
            <div>
              <strong>{{ h.label }}</strong>
              <span>{{ h.value }}</span>
            </div>
          </div>
        </div>

        <div class="about-actions">
          <a href="mailto:victoryorddiazgonzales@gmail.com" class="btn-primary">
            <i class="fa fa-envelope"></i> Contáctame
          </a>
          <a href="https://linkedin.com/in/victor-yordi-diaz-gonzales-7b6841273" target="_blank" class="btn-outline">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>

      <!-- Info cards -->
      <div class="about-cards">
        <div class="info-card glass-card aos-hidden" *ngFor="let card of infoCards; let i = index" [style.animation-delay]="i * 0.1 + 's'">
          <div class="card-icon">
            <i class="fa" [class]="card.icon"></i>
          </div>
          <div>
            <h4>{{ card.title }}</h4>
            <p>{{ card.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  personal = this.portfolioService.getPersonalInfo();

  highlights = [
    { icon: 'fa-map-marker-alt', label: 'Ubicación', value: 'Lima, Perú' },
    { icon: 'fa-briefcase', label: 'Disponibilidad', value: 'Tiempo completo / Freelance' },
    { icon: 'fa-language', label: 'Idiomas', value: 'Español (nativo) · Inglés (intermedio)' },
    { icon: 'fa-university', label: 'Formación', value: 'Ing. de Software — UPC' },
  ];

  infoCards = [
    { icon: 'fa-code', title: 'Backend', value: 'Java · Spring Boot · Microservices' },
    { icon: 'fa-desktop', title: 'Frontend', value: 'Angular · Vue.js · TypeScript' },
    { icon: 'fa-mobile-alt', title: 'Mobile', value: 'Flutter · Dart' },
    { icon: 'fa-database', title: 'Bases de datos', value: 'SQL Server · MySQL · AS400' },
    { icon: 'fa-cloud', title: 'DevOps', value: 'Docker · AWS · Git' },
    { icon: 'fa-users', title: 'Metodología', value: 'Scrum · Jira · Confluence' },
  ];

  constructor(private portfolioService: PortfolioService) { }
}
