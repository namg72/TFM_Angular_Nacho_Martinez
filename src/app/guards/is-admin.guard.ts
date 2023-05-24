import { compileNgModule } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}

  canActivate(): Observable<boolean>  | boolean   {
   

    return this.authService.isAdmin()
        .pipe(
          tap(valid => {

            if(valid){
              this.authService.admin=true
              console.log('amin: '+ this.authService.admin);
            }


            if (!valid){
              Swal.fire({
                title: 'Error!',
                text: 'Debes ser administrdor para entrar aqui ',
                icon: 'error',
                confirmButtonText: 'Cerrar'
              })
              this.router.navigateByUrl('/auth/login');
            }
          }
         
          
          )
          
          
        )

  }
  
}
