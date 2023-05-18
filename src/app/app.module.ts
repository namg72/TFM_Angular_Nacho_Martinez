import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ComunModule } from './comun/comun.module';
import { PagesModule } from './pages/pages.module';
import { CestaModule } from './cesta/cesta.module';


@NgModule({
  declarations: [
    AppComponent,
   
    
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PagesModule,
    ComunModule,
    AuthModule,
    CestaModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
