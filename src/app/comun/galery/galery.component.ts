import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit{

  images:string[]=[
    "../../../assets/img/galeryImg1.jpg",
    "../../../assets/img/galeryImg2.jpg",
    "../../../assets/img/galeryImg3.jpg",
    "../../../assets/img/galeryImg4.jpg",
    "../../../assets/img/galeryImg5.jpg"
   ];

   cont:number=0;

   fin:number=this.images.length;

   imgSrc:string="../../../assets/img/galeryImg1.jpg"

   //Referenciamos el elmento img
   
   cambiarFoto() {

    this.cont++;

    if(this.cont== this.fin){
        this.cont=0;
      
    } 

    this.imgSrc=this.images[this.cont]
    
    
  }


  ngOnInit() {
       setInterval(()=>{
        this.cambiarFoto()}, 4000
       )
     
  } 

}
