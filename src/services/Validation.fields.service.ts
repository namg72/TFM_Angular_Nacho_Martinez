import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationfieldsService {

  public nombrePattern:string ='(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$'.trim();
  public nombreApellidoPattern:string ='([a-zñáéíóúA-ZÑZÁÉÍÓÚ]+) ([a-zñáéíóúA-ZÑZÁÉÍÓÚ]+)'.trim();
  public emailPattern: string = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$";
  public phonePattern: string = "^[0-9]{9}$"
 



   nameErrorMsg(formulario:FormGroup):string {

    const errors= formulario.get('userName')?.errors

   if(errors?.['required']){
     return 'El nombre es obligatorio'
    
   }
   else if(errors?.['pattern']){
     return 'El nombre no tiene formato valido'
   }
   else if(errors?.['minlength']){
     return 'El nombre debe tener mas de 3 caracteres'
   }
   
   return '' 
   
}

surNameErrorMsg(formulario:FormGroup):string {

  const errors= formulario.get('surName')?.errors

 if(errors?.['required']){
   return 'El apellido es obligatorio'
 }
 else if(errors?.['pattern']){
   return 'El apellido no tiene formato valido'
 }
 
 return '' 
 
}

phoneErrorMsg(formulario:FormGroup):string {

  const errors= formulario.get('phone')?.errors

 if(errors?.['required']){
   return 'El telefono es obligatorio'
   
 }
 else if(errors?.['pattern']){
   return 'El telefono debe ser de 9 digitos'
 }
 
 return '' 
 
}

   emailErrorMsg(formulario:FormGroup):string {

    const errors= formulario.get('email')?.errors

   if(errors?.['required']){
     return 'El email es obligatorio'
   }
   else if(errors?.['pattern']){
     return 'El email no tiene formato valido'
   }
   
   return '' 
   
}

affairErrorMsg(formulario:FormGroup):string {

  const errors= formulario.get('affair')?.errors

 if(errors?.['required']){
   return 'El asunto no puede estar vacio'
 }
 
 return '' 
 
}
   messageErrorMsg(formulario:FormGroup):string {

    const errors= formulario.get('message')?.errors

   if(errors?.['required']){
     return 'EL area de mensage no puede estar vacia'
   }
   else if(errors?.['maxlength']){
     return 'Escriba un máximo de 300 caracteres'
   }
   
   return '' 
   
}

passwordErrorMsg(formulario:FormGroup):string {

  const errors= formulario.get('password')?.errors

 if(errors?.['required']){
   return 'La contraseña es obligatoria'
  
 }
 else if(errors?.['minlength']){
   return 'La contraseña debe tener mas de 5 caracteres'
 }
 
 return '' 
 
}


}
