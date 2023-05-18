import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate {
  constructor(private authService: AuthService, private router:Router){}

  canActivate(): Observable<boolean>  | boolean  {
    
    return this.authService.validarToken()
              .pipe(
                tap(valid => {
                  if (!valid){
                    this.router.navigateByUrl('/auth/login');
                  }
                })
              )

  } 
  
}
   