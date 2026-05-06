import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
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

  valueCards = [
    {
      img: 'assets/work-teams.png',
      title: 'Trabajo en equipo',
    },
    {
      img: 'assets/problemas.png',
      title: 'Resolución de problemas',
    },
    {
      img: 'assets/aprendizaje.png',
      title: 'Aprendizaje continuo',
    },
    {
      img: 'assets/liderazgo.png',
      title: 'Liderazgo',
    },
  ];

  constructor(private portfolioService: PortfolioService) { }
}
