import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/model/user.model';
import { AuthService } from 'src/services/auth.service';
import { ValidationfieldsService } from 'src/services/Validation.fields.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  


public miFormulario:FormGroup;





  constructor(private fBuilder:FormBuilder, 
              private authServices:AuthService, 
              private router:Router,
              private validationfieldService:ValidationfieldsService) {

    this.miFormulario=fBuilder.group(
      {
        userName:[
            '', [
              Validators.required,
              Validators.pattern(this.validationfieldService.nombreApellidoPattern),
              Validators.minLength(3)
            ]
          ],
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
            ]  , 
          ],
          repeatPassword:[
            '',[ 
              Validators.required, 
            
            ]   
          ]  
      }, //validacion del formulario
      {
        validators: [
          this.passwordCheck('password', 'repeatPassword')
  
        ]
  
      }  

    )
     

   }

     // Metodo para validar que el password y el repeatpasswor sena iguales
     passwordCheck(password:string, repeatPassword:string){
      return (formGroup:FormGroup)=>{
 
       let passwordControl = formGroup.controls[password];
       let repeatPasswordControl = formGroup.controls[repeatPassword];
 
       if(passwordControl.value === repeatPasswordControl.value){
           repeatPasswordControl.setErrors(null)
 
       }else{
            repeatPasswordControl.setErrors({notEqual:true})
       }
 
 
      }
 
    } 
 
   //Metodo para rediccinaar al login
   navigateToLogin(){
      this.router.navigate(['/auth/login'])
   }


  register(){
    
    if(this.miFormulario.valid){
        console.log("formulario valido");
        console.log(this.miFormulario.value);
            this.authServices.register(this.miFormulario.value)
            .subscribe
            ((response:any)=>{
              console.log(response);
              if(response.status===200){

                  Swal.fire({
                    title: response.body.msg,
                    text: `${response.body.userName} Inicie sesión`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                  }).
                  then(()=>{
                    this.navigateToLogin()
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

                 Swal.fire({
                  title: 'Error!',
                  text: error['error'].msg,
                  icon: 'error',
                  confirmButtonText: 'OK'
                })
               }
              })

            
     }else{
      console.log("formulario invalido");
      console.log(this.miFormulario);
      
     }
  
    }



  fieldsErrors(field:string){
    return this.miFormulario.get(field)?.touched && 
           this.miFormulario.get(field)?.invalid

  }

  validationName(){
    return this.validationfieldService.nameErrorMsg(this.miFormulario)
  }
  
  validationEmail(){
    return this.validationfieldService.emailErrorMsg(this.miFormulario)
  }
  validationPassword(){
    return this.validationfieldService.passwordErrorMsg(this.miFormulario)
  }
}
