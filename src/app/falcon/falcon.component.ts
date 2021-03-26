import { Component, OnInit } from '@angular/core';

//Importamos el archivo JSON
import listaFalcon1 from 'src/assets/json/falcon1.json';


@Component({
  selector: 'app-falcon',
  templateUrl: './falcon.component.html',
  styleUrls: ['./falcon.component.css']
})
export class FalconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  falcon1: any = listaFalcon1;

}
