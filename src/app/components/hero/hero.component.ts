import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  personal = this.portfolioService.getPersonalInfo();
  displayedText = '';
  private titles = ['Full Stack Developer', 'Java Backend Engineer', 'Angular Frontend Dev', 'Flutter Mobile Dev'];
  private currentIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimeout: any;
  imageError = false;

  stats = [
    { value: '3+', label: 'Años exp.' },
    // { value: '6', label: 'Empresas' },
    { value: '15+', label: 'Tecnologías' },
    { value: '10+', label: 'Proyectos' },
  ];

  constructor(
    private portfolioService: PortfolioService,
    public langService: LanguageService
  ) { }

  ngOnInit(): void {
    this.typeText();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimeout);
  }


  onImageError() {
    this.imageError = true;
  }

  getInitials(): string {
    const name = this.personal?.name || '';
    const lastName = this.personal?.lastName || '';
    return (name.charAt(0) + lastName.charAt(0)).toUpperCase();
  }

  private typeText(): void {
    const current = this.titles[this.currentIndex];

    if (!this.isDeleting) {
      this.displayedText = current.slice(0, ++this.charIndex);
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        this.typingTimeout = setTimeout(() => this.typeText(), 2000);
        return;
      }
    } else {
      this.displayedText = current.slice(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.titles.length;
      }
    }

    this.typingTimeout = setTimeout(() => this.typeText(), this.isDeleting ? 60 : 100);
  }

  scrollTo(href: string): void {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
