import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit, OnDestroy {
  experiences: Experience[] = this.portfolioService.getExperiences();
  activeIndex = 0;
  progress = 0;
  interval: any;
  autoPlay = true;

  @ViewChild('tabsContainer') tabsContainer!: ElementRef;

  typeColors: Record<string, string> = {
    fullstack: '#00d4ff',
    backend: '#7c3aed',
    frontend: '#f59e0b',
    intern: '#10b981',
  };

  typeLabels: Record<string, string> = {
    fullstack: 'FullStack',
    backend: 'Backend',
    frontend: 'Frontend',
    intern: 'Intern',
  };

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.startTimeline();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startTimeline() {
    if (window.innerWidth > 768) {
      const total = this.experiences.length;

      this.interval = setInterval(() => {

        if (!this.autoPlay) return;

        this.activeIndex++;

        if (this.activeIndex >= total) {
          this.activeIndex = 0;
        }

        this.updateProgress();

      }, 10000);
    }
  }

  updateProgress() {
    const total = this.experiences.length - 1;
    this.progress = (this.activeIndex / total) * 100;
  }

  setActiveManual(index: number) {
    this.autoPlay = false;
    this.activeIndex = index;
    this.updateProgress();
    this.scrollToActiveMobileTab();

    setTimeout(() => {
      this.autoPlay = true;
    }, 6000);
  }

  onPageChange(event: any) {
    this.autoPlay = false;
    this.activeIndex = event.page;

    setTimeout(() => {
      this.autoPlay = true;
    }, 5000);
  }

  setActive(index: number): void {
    this.activeIndex = index;
  }

  getColor(type: string): string {
    return this.typeColors[type] || '#00d4ff';
  }

  scrollTabs(direction: number) {
    if (this.tabsContainer) {
      const scrollAmount = this.tabsContainer.nativeElement.clientWidth;
      this.tabsContainer.nativeElement.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  }

  private scrollToActiveMobileTab() {
    if (this.tabsContainer && window.innerWidth <= 768) {
      const activeElement = document.getElementById('exp-tab-' + this.activeIndex);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }
}
