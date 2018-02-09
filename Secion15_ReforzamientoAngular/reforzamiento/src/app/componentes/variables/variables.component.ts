import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent  {

nombre:String='Logan';
nota:number=10;

  constructor() { }

  cambiarNombre(){
    this.nombre='Julian';
  }



}
