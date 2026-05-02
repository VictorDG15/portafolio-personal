import { Component, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillCategory } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  skillCategories: SkillCategory[] = this.portfolioService.getSkillCategories();
  animatedLevels: Map<string, number> = new Map();
  animated = false;

  extraBadges = [
    'Apache Maven', 'Spring Batch', 'JBoss', 'Postman', 'Selenium', 'Lighthouse',
    'Figma', 'Canva', 'Miro', 'Confluence', 'Jira', 'Unit Testing', 'REST APIs',
    'Clean Architecture', 'Scrum', 'Swagger', 'WebSockets', 'JWT',
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animated) {
            this.animated = true;
            this.animateBars();
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#skills');
    if (section) observer.observe(section);
  }

  private animateBars(): void {
    this.skillCategories.forEach((cat) => {
      cat.items.forEach((skill, idx) => {
        setTimeout(() => {
          this.animatedLevels.set(skill.name, skill.level);
        }, idx * 80);
      });
    });
  }

  getLevel(name: string): number {
    return this.animatedLevels.get(name) ?? 0;
  }
}
