import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { VariablesComponent } from './componentes/variables/variables.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { EstructuralesComponent } from './componentes/estructurales/estructurales.component';
import { HttpComponent } from './componentes/http/http.component';

// Se importa el servicio
import { MutantesService } from './servicios/mutantes.service';
import { HttpClientModule } from '@angular/common/Http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VariablesComponent,
    AtributosComponent,
    EstructuralesComponent,
    HttpComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MutantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
