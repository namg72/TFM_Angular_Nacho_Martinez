import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './nosotros/historia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ComunModule } from '../comun/comun.module';
import { CommonModule } from '@angular/common';
import { ConsejosComponent } from './consejos/consejos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertProductoComponent } from './insert-producto/insert-producto.component';
import { TiendaComponent } from './tienda/tienda.component';
import { MenuPinturaComponent } from './pagesComponent/menuPintura/menuPintura.component';
import { MenuLimpiezaComponent } from './pagesComponent/menuLimpieza/menuLimpieza.component';
import { MenuLavanderiaComponent } from './pagesComponent/menuLavanderia/menuLavanderia.component';








@NgModule({
  declarations: [
    HomeComponent,
    HistoriaComponent,
    ContactoComponent,
    ConsejosComponent,
    InsertProductoComponent,
    TiendaComponent,
    MenuPinturaComponent,
    MenuLimpiezaComponent,
    MenuLavanderiaComponent,
   
    

  
  
   
   

  
  ],
  imports: [
    ComunModule,
    PagesRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  
  ],
  
})
export class PagesModule { }
