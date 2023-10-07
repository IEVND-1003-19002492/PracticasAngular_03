import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { PotenciasComponent } from './Potencia/potencias/potencias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Suma2Component } from './calculos/suma2/suma2.component';
import { CinepolisComponent } from './cinepolis/cinepolis/cinepolis.component';

import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    PotenciasComponent,
    Suma2Component,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
