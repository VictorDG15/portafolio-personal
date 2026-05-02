import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  educationList = this.portfolioService.getEducation();
  certifications = this.portfolioService.getCertifications();

  constructor(private portfolioService: PortfolioService) {}
}
