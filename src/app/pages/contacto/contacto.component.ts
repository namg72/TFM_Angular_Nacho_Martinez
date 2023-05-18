import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationfieldsService } from 'src/services/Validation.fields.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent  {


  @ViewChild('send', { static: true }) send!: ElementRef;

  public accept:boolean=false;

  public fValid=false

  public miFormulario:FormGroup;

  

  constructor(private fBuilder:FormBuilder,
              private router:Router,
              private validationfieldService:ValidationfieldsService){

    this.miFormulario=this.fBuilder.group(
      {
        userName:[
          '',
         [ 
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.validationfieldService.nombreApellidoPattern)
        ]
        ],

        surName:[
          '',
          [
            Validators.required,
            Validators.pattern(this.validationfieldService.nombreApellidoPattern)
        ]
        ],

        email:[
          '',
          [
            Validators.required,
            Validators.pattern(this.validationfieldService.emailPattern)
          ]
        ],

        phone:[
          '',
          [
            
            Validators.minLength(9),
            Validators.pattern(this.validationfieldService.phonePattern)
          ]
        ],
        affair:[
          '',
          [
            Validators.required
          ]
            
        ],
        message:[
          '',
         [ 
            Validators.required,
            Validators.maxLength(300)
        ]
      ]
      }
    

    )

  }

  
 
  
  fieldsErrors(field:string){
    return this.miFormulario.get(field)?.touched && 
           this.miFormulario.get(field)?.invalid

  }



  validationName(){
    return this.validationfieldService.nameErrorMsg(this.miFormulario)
  }
  validationSurName(){
    return this.validationfieldService.surNameErrorMsg(this.miFormulario)
  }
  validationEmail(){
    return this.validationfieldService.emailErrorMsg(this.miFormulario)
  }
  validationPhone(){
    return this.validationfieldService.phoneErrorMsg(this.miFormulario)
  }
  validationAffair(){
    return this.validationfieldService.affairErrorMsg(this.miFormulario)
  }
  validationMessage(){
    return this.validationfieldService.messageErrorMsg(this.miFormulario)
  }
  



  checked(){

    if(this.accept==false){
      this.accept=true;
      this.send.nativeElement.disabled=false
      console.log(this.accept)
     
      
    }else{
      this.accept=false
      this.send.nativeElement.disabled=true
    }
    
  }

  

sendToMail(){
  if(!this.miFormulario.valid) {
   
    this.fValid=true

  }else{
    Swal.fire({
      title: 'Hemos recibido su menssaje',
      icon: 'success',
      text: 'Gracias por contactar con nostros',
      confirmButtonText: 'OK'
  }).then(()=>{

    this.router.navigate(['/'])
  })
  }
   
}

}
