import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const route:Routes=[
  { 
    path: 'pages',
        loadChildren: ()=> import('./pages/pages.module').then(m => m.PagesModule),
        
  },
 
  { 
    path: 'auth',
        loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  
  { 
    path: 'cesta',
        loadChildren: ()=> import('./cesta/cesta.module').then(m => m.CestaModule)
  },
  
 


]

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
