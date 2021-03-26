import { Component, OnInit } from '@angular/core';

//Importamos el archivo JSON
import listaFalcon9 from 'src/assets/json/falcon9.json'

@Component({
  selector: 'app-falcon9',
  templateUrl: './falcon9.component.html',
  styleUrls: ['./falcon9.component.css']
})
export class Falcon9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  falcon9: any = listaFalcon9;

}
