

import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductosTipo } from 'src/model/productosTipo.model';
import { ProdutosService } from 'src/services/produtos.service';
import { Productos } from 'src/interfaces/producto.interface';
import Swal from 'sweetalert2';
import { CartService } from 'src/services/cart.service';
import { compileNgModule } from '@angular/compiler';



@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component..html',
  styleUrls: ['./tienda.component.css'],
 
  
})
export class TiendaComponent  {

searchProduct: string = '';
productosTipo:ProductosTipo=new ProductosTipo()
menuPintura=false
menuLimpieza=false
menuLavanderia=false
noFound = false;
msgNoFound: string = '';
mayor_menor=false;
menor_mayor=false;
orderSelected=""
productos:Productos[]=[]

nombre="pepe"

public nombreProducto = {
  nombreProducto: '',
};

constructor(private http:HttpClient, private router:Router, private productoService:ProdutosService, private cartService:CartService){}

 
// Seleccion tipo de proudcto
tipoSeleccionado(tipo:string){
  this.menuPintura=false

  if(tipo==='Pintura')
    
    this.menuPintura=true
  else
     this.menuPintura=false

  if(tipo==='Limpieza')
    
      this.menuLimpieza=true
   else
      this.menuLimpieza=false
  if(tipo==='Lavandería')
  
        this.menuLavanderia=true

  else
       this. menuLavanderia=false

}

//metodo buscar producto por subfamilia
show(subfamilia:object){
       
    this.productoService.searchSubfamilia(subfamilia)
      .subscribe(
        (response)=>{
          this.productos=response

  },
  (error: HttpErrorResponse) => {
    
    this.noFound=false
    this.ProductNotFound(error);
    
  } 
      )

  }


// metodo para buscar productos por nombre 
   search(){
    
   this.LimpiarListado()

    this.nombreProducto.nombreProducto=this.searchProduct

    this.productoService.searchProducts(this.nombreProducto)
      .subscribe(
        (response)=>{
          this.productos=response

      }
      ,
      (error: HttpErrorResponse) => {
        this.LimpiarListado()
        this.noFound=false
        this.ProductNotFound(error);
        
      } 
      )

   }

  // Activamos mensaje de error si no hay productos que listar
  ProductNotFound(error: HttpErrorResponse) {
  this.noFound = true; 
  this.LimpiarListado()
    if (error.status === 404) {
      this.msgNoFound = error.error.msg;
    }
  }

  // limpieza listado productos
  LimpiarListado(){
    this.productos=[];
  }

  

  // Añadir producto a la cesta y modal
  addCart(producto:Productos){

    producto.cantidad=1

    this.cartService.addCart(producto)
    

    Swal.fire({
      icon: 'success',
      title: producto.nombreProducto,
      text: 'Se ha añadido a tu carro de compra',
      
    })
  }
  
  

  //Ordenacion del listado de productos
  orderProducts(selected:string){

  if(selected ==="0"){
    this.productos.sort((x, y)=> x.nombreProducto.localeCompare(y.nombreProducto))
  }
   else if(selected ==="1"){
      this.productos.sort((x, y)=>x.precioVenta! - y.precioVenta!)
    }
    else if(selected ==="2"){
      this.productos.sort((x, y)=>y.precioVenta! - x.precioVenta!)
   }
  }
}