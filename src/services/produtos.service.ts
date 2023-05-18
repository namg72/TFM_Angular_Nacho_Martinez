import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/enviroment';
import {Productos} from '../interfaces/producto.interface'


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http:HttpClient) { }

  // Busquea productos
  searchProducts(nombreProducto:object){

    return this.http.post<Productos[]>(environment.URL_SEARCH_PRODUCT, nombreProducto);
  }

  // Busqueda productos por nombre
  searchProductsBy(nombreProducto:object){

    return this.http.post<Productos[]>(environment.URL_SEARCH_PRODUCT_BY , nombreProducto);
  }

  // Busqueda producto por familia
  searchSubfamilia(subfamilia:object){

    return this.http.post<Productos[]>(environment.URL_SEARCH_SUBFAMILIA,subfamilia);
  }

  // insertamos productos en la bd
  insertProducto(producto:Productos){
    return this.http.post(environment.URL_INSERT_PRODUCT, producto, {
     observe:'response'
   })
 }
 

}
