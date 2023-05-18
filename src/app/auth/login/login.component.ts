import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { ValidationfieldsService } from 'src/services/Validation.fields.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{


  

  public miFormulario:FormGroup

  constructor(private fBuilder:FormBuilder, 
              private http:HttpClient, 
              private router:Router ,
              private authService:AuthService,
              private validationfieldService:ValidationfieldsService){

    this.miFormulario=this.fBuilder.group(
      {
        email:[
            '', [
              Validators.required,
              Validators.pattern(this.validationfieldService.emailPattern)
            ]
          ],
          password:[
            '',[
              Validators.required, 
              Validators.minLength(6)
            ]   
          ]  
      }
    )
  }
  ngOnInit(): void {
    this.miFormulario.get('email')?.reset() }
 
//metodo para navaegar por codigo iyectando el servicio Router de Angular
navigateToHome(){
  this.router.navigate([''])
 }


 login(){
   
    
    if(this.miFormulario.valid){
      
        this.authService.logIn(this.miFormulario.value)
        .subscribe
        ((response:any)=>{
          
          console.log(response);
          if(response.status===200){
            //guardamos el token y el rol en el localstorage
            localStorage.setItem('token', response.body.token);
            localStorage.setItem('userName', response.body.userName);
            localStorage.setItem('rol', response.body.rol)
            
            
            //personalizamos el nombre de la sesion
            
            this.authService.nombreSesion=response.body.userName
           
            Swal.fire({
              title: 'Te has logeado con exito',
              text: response.body.msg,
              icon: 'success',
              confirmButtonText: 'OK'
            }).
            then(()=>{
              this.navigateToHome()
              } 
            )
          }
       
        },
       (error)=>{
          console.log(error);
          if(error.status===500){
            Swal.fire({
              title: 'Algo ha ocurrido',
              confirmButtonText:'Ok'
            })
          }
          if(error.status===404){
            console.log('Contraseña o usuario incorrecto');
            console.log(error['error']);
          
              Swal.fire({
                title: 'Error!',
                text: 'Nombre de usuario o contraseña incorrecta ',
                icon: 'error',
                confirmButtonText: 'Cerrar'
              })
                
          }
          if(error.status===0){
            
          
              Swal.fire({
                title: 'Error!',
                text: 'No se ha podido conectar al servidor ',
                icon: 'error',
                confirmButtonText: 'Cerrar'
              })
                
          }
        }
   )
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'Nombre de usuario o contraseña incorrecta ',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
      
    }
  }


  fieldsErrors(field:string){
    return this.miFormulario.get(field)?.touched && 
           this.miFormulario.get(field)?.invalid

  }

  validationEmail(){
    return this.validationfieldService.emailErrorMsg(this.miFormulario)
  }
  validationPassword(){
    return this.validationfieldService.passwordErrorMsg(this.miFormulario)
  }

   
  }
  
  
