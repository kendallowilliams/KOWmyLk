import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPortfolio } from '../shared/models/interfaces/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) { }

  getPortfolio(): Observable<IPortfolio> {
    return this.http.get<IPortfolio>('assets/data/json/portfolio.json');
  }
}
