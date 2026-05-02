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

  constructor(
    public themeService: ThemeService,
    public langService: LanguageService
  ) { }

  get navLinks() {
    const t = this.langService.t['NAVBAR'];
    return [
      { label: t.INICIO, href: '#hero' },
      { label: t.ABOUT, href: '#about' },
      { label: t.EXPERIENCE, href: '#experience' },
      { label: t.SKILLS, href: '#skills' },
      { label: t.PROJECTS, href: '#projects' },
      { label: t.EDUCATION, href: '#education' },
      { label: t.CONTACT, href: '#contact' },
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
