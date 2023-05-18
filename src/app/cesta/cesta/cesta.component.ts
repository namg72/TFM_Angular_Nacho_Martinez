import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/interfaces/producto.interface';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent  { 



productosCesta:Productos[]=[];

vacia:boolean=true
sumaNeto!:number;
gastosEnvio:number=15;
SinGastos=false
totalNeto!:number;
iva!:number;
totalCompra!:number;

constructor(private cartService:CartService ){
  
  this.productosCesta=this.cartService.productosCesta;
  
  if(this.productosCesta.length>0) this.vacia=false

  this.sumaNeto=this.SumaNetos()

  this.totalfactura(this.sumaNeto)
    
  console.log(this.productosCesta);
}

// Sumar producto 
sumar(producto:Productos){
   producto.cantidad! ++;
   producto.Total = producto.precioVenta! * producto.cantidad!;
   this.sumaNeto=this.SumaNetos()
   this.cartService.totalProductos++;
  
}

// Restar producto
restar(producto:Productos, n:any){
   producto.cantidad! --;
   producto.Total = producto.precioVenta! * producto.cantidad!;
   this.sumaNeto=this.SumaNetos();
   this.cartService.totalProductos--;

   if(producto.cantidad! < 1 ){

    this.productosCesta.splice(n,1);

   }
   if(this.cartService.productosCesta.length==0){
    this.vacia=true
  }

  
  }

// Eliminar producto
eliminar(id:string, n:number){
  const nuevoArray=this.productosCesta.filter(producto => producto.idProducto != id)

  this.cartService.productosCesta=nuevoArray
  this.productosCesta=this.cartService.productosCesta


  
  this.cartService.totalProductos -= n;
  this.sumaNeto=this.SumaNetos();
  this.totalfactura(this.sumaNeto);


  if(this.cartService.productosCesta.length==0){
    this.vacia=true
  }

}


// Suma de netos
SumaNetos(){
  let suma:number=0;
  
  for(let producto of this.productosCesta){
    suma += producto.Total!

  }
  this.totalNeto=suma;
  this.iva=this.totalNeto*0,21;
  this.totalCompra=this.totalNeto+this.iva

  

  this.totalfactura(suma)


  return suma



}

// Total de la factura
totalfactura(suma:number){

  

  if(suma>=100){
    this.SinGastos=true
    this.gastosEnvio=0
    this.totalNeto=this.sumaNeto;
  }else{
   this.SinGastos=false;
    this.gastosEnvio=15;
    this.totalNeto=this.sumaNeto+15;
  }
   



  this.totalNeto=suma+this.gastosEnvio
  this.iva=this.totalNeto*0.21
  this.totalCompra=this.totalNeto+this.iva
}


}







