import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsejosComponent } from './consejos/consejos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HistoriaComponent } from './nosotros/historia.component';
import { HomeComponent } from './home/home.component';
import { InsertProductoComponent } from './insert-producto/insert-producto.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ValidarTokenGuard } from '../guards/validar-token.guard';
import { IsAdminGuard } from '../guards/is-admin.guard';




const routes: Routes = [
  {path:'', 
    children:[
      
      {path:'home', component:HomeComponent},
      {path:'nosotros', component:HistoriaComponent},
      {path:'consejos', component:ConsejosComponent},
      {path:'contacto', component:ContactoComponent},
      {path:'insert', component:InsertProductoComponent, canActivate:[IsAdminGuard]},
      {path:'tienda', component:TiendaComponent, canActivate:[ValidarTokenGuard]},
      {path:'**', redirectTo:'home'},
      
    ]

  },
  

 
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
