import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { GaleryComponent } from './galery/galery.component';
import { NavbarComponent } from './navbar/navbar.component';
import {  RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavbarComponent,
    GaleryComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    RouterModule
   
  ],

  exports:[
    NavbarComponent,
    GaleryComponent,
    FooterComponent
  ]
})
export class ComunModule { }
