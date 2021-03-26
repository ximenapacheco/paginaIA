import { Component, OnInit } from '@angular/core';

import listaHeavy from 'src/assets/json/heavy.json'

@Component({
  selector: 'app-heavy',
  templateUrl: './heavy.component.html',
  styleUrls: ['./heavy.component.css']
})
export class HeavyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heavy: any = listaHeavy;
}
