import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAbout } from '../shared/models/interfaces/about.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor(private http: HttpClient) { }

  getAbout(): Observable<IAbout> {
    return this.http.get<IAbout>('assets/data/json/about.json');
  }
}
