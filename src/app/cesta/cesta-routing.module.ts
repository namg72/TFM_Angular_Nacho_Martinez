import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CestaComponent } from './cesta/cesta.component';

const routes: Routes = [
  {
    path: '',
    children:[
      { path: 'cestaCompra', component: CestaComponent}
    
    ]
  }  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CestaRoutingModule { }
