import { Component } from '@angular/core';

// Importar el servicoo
import {MutantesService} from "../../servicios/mutantes.service";
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent  {

  constructor(private _ms:MutantesService) { }





}
