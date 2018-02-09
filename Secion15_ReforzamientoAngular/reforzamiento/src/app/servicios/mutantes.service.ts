import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/Http";

@Injectable()
export class MutantesService {

  public mutantes:any[]=[]; // Definimos vector vacio

  constructor(private http:HttpClient) {
  console.log("Servicio de mutantes listo");
  this.cargarMutantes();
}

cargarMutantes(){
   this.http.get("assets/data/mutantes.json")
   .subscribe( respuesta =>{
       let data=respuesta;
        console.log(data)
      this.mutantes=data; }  );
}



}
