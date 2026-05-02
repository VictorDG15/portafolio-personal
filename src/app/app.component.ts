import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollAnimationService } from './services/scroll-animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showScrollTop = false;
  private scrollListener!: () => void;

  constructor(private scrollAnimService: ScrollAnimationService) { }

  ngOnInit(): void {
    this.scrollAnimService.init();

    this.scrollListener = () => {
      this.showScrollTop = window.scrollY > 400;
      this.scrollAnimService.observeElements();
    };

    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollListener);
    this.scrollAnimService.disconnect();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
