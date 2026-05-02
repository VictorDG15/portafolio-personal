import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = this.portfolioService.getProjects();
  activeIndex = 0;
  filter = 'all';

  filters = ['all', 'Backend', 'FullStack', 'Mobile', 'Analytics'];

  get filteredProjects(): Project[] {
    if (this.filter === 'all') return this.projects;
    return this.projects.filter((p) => p.badge === this.filter);
  }

  constructor(
    private portfolioService: PortfolioService,
    public langService: LanguageService
  ) { }

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];

  setFilter(f: string): void {
    this.filter = f;
  }

  badgeColors: Record<string, string> = {
    Backend: '#7c3aed',
    FullStack: '#00d4ff',
    Mobile: '#10b981',
    Analytics: '#f59e0b',
  };

  getBadgeColor(badge?: string): string {
    return this.badgeColors[badge ?? ''] ?? '#00d4ff';
  }
}
