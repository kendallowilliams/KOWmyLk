import { Component, OnInit } from '@angular/core';
import { IAbout } from 'src/app/shared/models/interfaces/about.interface';
import { AboutService } from 'src/app/services/about.service';
import { Observable, of } from 'rxjs';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about$: Observable<IAbout> = of();
  test: KeyValue<string, string>;

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.about$ = this.aboutService.getAbout();
  }

}
