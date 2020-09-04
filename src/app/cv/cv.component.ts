import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  cvData: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(async params => {
      let lang = params.lang;
      if (!lang) { lang = 'en'; }
      try {
        this.cvData = await import(`../data/${lang}.json`);
      } catch (error) {
        this.cvData = await import('../data/en.json');
      }
    });
  }

}
