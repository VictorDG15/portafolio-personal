import { Injectable, NgZone } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollAnimationService {
  private observer!: IntersectionObserver;

  constructor(private ngZone: NgZone) {}

  init(): void {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('aos-visible');
              entry.target.classList.remove('aos-hidden');
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
      );

      // Observe after a short delay to allow DOM rendering
      setTimeout(() => this.observeElements(), 300);
    });
  }

  observeElements(): void {
    document.querySelectorAll('.aos-hidden').forEach((el) => {
      this.observer.observe(el);
    });
  }

  disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
