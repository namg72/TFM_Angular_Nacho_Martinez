
import { Injectable } from '@angular/core';
import { Productos } from 'src/interfaces/producto.interface';


@Injectable({
  providedIn: 'root',
})
export class CartService {

//idUnicos: Productos[] = [];
productosCesta:Productos[]=[];
totalProductos:number = 0;

  //añadimos productos a la cesta de la compra
  addCart(producto: Productos) {

      
    
      //añadimoms el producto al array
      this.productosCesta.push(producto);

      //Calculamos el precito total de los productos del mismo tipo
        producto.Total=producto.precioVenta! * producto.cantidad!;
       
        
        //eliminamos filas repetidas
        let hash:any={};
        this.productosCesta=this.productosCesta.filter(o=> hash[o.idProducto]?   false: hash[o.idProducto ]= true);

        
        this.totalProductos=this.productosCesta.length; 


      }
 




      }



  
  





