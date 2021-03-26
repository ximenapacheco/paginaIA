import { Component, OnInit } from '@angular/core';

import listaStarship from 'src/assets/json/starship.json';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  starship: any = listaStarship;

}
