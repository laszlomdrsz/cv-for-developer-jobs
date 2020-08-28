import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idovonal',
  templateUrl: './idovonal.component.html',
  styleUrls: ['./idovonal.component.scss']
})
export class IdovonalComponent implements OnInit {

  /* Idővonal */
  currentYear = new Date().getFullYear();

  @Input() idovonalElemek: Array<{
    cim: string,
    datum: string,
    leiras?: string
  }>;

  constructor() { }

  ngOnInit(): void {
  }

}
