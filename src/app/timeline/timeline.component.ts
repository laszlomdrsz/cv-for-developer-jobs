import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  /* Idővonal */
  currentYear = new Date().getFullYear();

  @Input() timelineElements: Array<{
    title: string,
    position?: string,
    date?: string,
    description?: string,
    image?: string
  }>;

  constructor() { }

  ngOnInit(): void {
  }

}
