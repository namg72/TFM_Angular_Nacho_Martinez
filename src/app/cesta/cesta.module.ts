import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CestaRoutingModule } from './cesta-routing.module';
import { CestaComponent } from './cesta/cesta.component';
import { ComunModule } from "../comun/comun.module";


@NgModule({
    declarations: [
        CestaComponent
    ],
    imports: [
        CommonModule,
        CestaRoutingModule,
        ComunModule
    ]
})
export class CestaModule { }
