import { Component, ViewChild } from '@angular/core';
import { Carousel } from 'primeng/carousel';
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
  videoDialog = false;
  selectedVideo: string | null = null;
  selectedProject: Project | null = null;
  @ViewChild('carousel') carouselRef!: Carousel;
  filters = ['all', 'Backend', 'FullStack', 'Mobile', 'Analytics'];
  hoveredProject: Project | null = null;

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

  openVideo(project: Project): void {
    if (project.demoType !== 'video' || !project.demoUrl) return;

    this.selectedProject = project;
    this.selectedVideo = project.demoUrl;
    this.videoDialog = true;
  }

  closeVideo(): void {
    this.videoDialog = false;
    this.selectedVideo = null;
    this.selectedProject = null;
  }

  handleHover(project: Project, isEnter: boolean, event: Event): void {
    const container = event.currentTarget as HTMLElement;
    const video = container.querySelector('video') as HTMLVideoElement;
    const hasVideo = project.demoType === 'video' && !!project.demoUrl && project.demoUrl !== '#';

    if (isEnter) {
      // Detener carrusel manipulando el intervalo interno de PrimeNG
      if (this.carouselRef) {
        this.carouselRef.autoplayInterval = 0;
        (this.carouselRef as any).stopAutoplay?.();
        clearInterval((this.carouselRef as any).interval);
        (this.carouselRef as any).interval = null;
      }

      if (hasVideo && video) {
        this.hoveredProject = project;
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    } else {
      // Reanudar carrusel
      if (this.carouselRef) {
        this.carouselRef.autoplayInterval = 4000;
        (this.carouselRef as any).startAutoplay?.();
      }

      if (hasVideo && video) {
        this.hoveredProject = null;
        video.pause();
        video.currentTime = 0;
      }
    }
  }

  stopPreview(event: Event): void {
    const video = (event.currentTarget as HTMLElement).querySelector('video') as HTMLVideoElement;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
  }

  private getPreviewVideo(event: Event): HTMLVideoElement | null {
    return (event.currentTarget as HTMLElement).querySelector('video');
  }

}
