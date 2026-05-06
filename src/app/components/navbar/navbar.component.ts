import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  imageError = false;

  constructor(
    public themeService: ThemeService,
    public langService: LanguageService
  ) { }

  get navLinks() {
    const t = this.langService.t['NAVBAR'];
    return [
      { label: t.INICIO, href: '#hero', icon: 'fa-home' },
      { label: t.ABOUT, href: '#about', icon: 'fa-user' },
      { label: t.EXPERIENCE, href: '#experience', icon: 'fa-briefcase' },
      { label: t.SKILLS, href: '#skills', icon: 'fa-code' },
      { label: t.PROJECTS, href: '#projects', icon: 'fa-folder-open' },
      { label: t.EDUCATION, href: '#education', icon: 'fa-graduation-cap' },
      { label: t.CONTACT, href: '#contact', icon: 'fa-envelope' },
    ];
  }

  ngOnInit(): void { }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  scrollTo(event: Event, href: string): void {
    event.preventDefault();
    this.isMenuOpen = false;
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
