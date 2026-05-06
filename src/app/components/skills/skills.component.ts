import { Component, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillCategory } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = this.portfolioService.getSkillCategories();

  extraBadges = [
    'Apache Maven', 'Spring Batch', 'JBoss', 'Selenium', 'Lighthouse',
    'Canva', 'Miro', 'Confluence', 'Unit Testing', 'REST APIs',
    'Clean Architecture', 'Scrum', 'Swagger', 'WebSockets', 'JWT',
  ];

  constructor(private portfolioService: PortfolioService) { }

  catLevel(index: number): string {
    const levels = ['Senior', 'Senior', 'Mid+', 'Mid'];
    return levels[index] ?? 'Mid';
  }
}