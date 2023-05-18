import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environment/enviroment';
import { AuthResponse } from 'src/interfaces/auth.Response.interface';
import { User } from 'src/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

public nombreSesion= localStorage.getItem('userName') || 'Inicie Sesión'

admin=false

constructor(private http:HttpClient) {}


  logIn(user:User){
    return this.http.post(environment.URL_LOGIN_USER, user,{
      observe:'response'
    })

  }
 
  register(user:User){

    return this.http.post(environment.URL_INSERT_USER, user,{
      observe:'response'
    })
  }
   
  validarToken(){
  
    const url= environment.URL_RENEW_LOGIN


    const headers= new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')
    return this.http.get<AuthResponse>(url, {headers})
        .pipe( 
          tap(resp=>{
            this.nombreSesion=resp.username
            if(resp.admin==true){
              this.admin=true
              
            }
          }),
          map(resp => {
              return resp.ok
          }),
          catchError(err => of(false))
        )

  }
  isAdmin(){
  
    const url= environment.URL_RENEW_LOGIN


    const headers= new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')
    return this.http.get<AuthResponse>(url, {headers})
        .pipe( 
          tap(resp=>{
            this.nombreSesion=resp.username
           
          }),
          map(resp => {


              return resp.admin
          }),
          catchError(err => of(false))
        )

  }

}
