import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Observable, of } from 'rxjs';
import { IPortfolio } from 'src/app/shared/models/interfaces/portfolio.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio$: Observable<IPortfolio> = of();

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolio$ = this.portfolioService.getPortfolio();
  }

}
