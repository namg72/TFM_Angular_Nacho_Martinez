import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Productos } from 'src/interfaces/producto.interface';
import { ProductosTipo } from 'src/model/productosTipo.model';
import { ProdutosService } from 'src/services/produtos.service';

@Component({
  selector: 'app-menuLimpieza',
  templateUrl: './menuLimpieza.component.html',
  styleUrls: ['./menuLimpieza.component.css']
})
export class MenuLimpiezaComponent implements OnInit {

  public subfamilia = {
    subfamilia: '',
  };



productoLimpieza:ProductosTipo = new ProductosTipo()



 limpiadores:string[]=[]
 celulosa:string[]=[]
 anexosLimpieza:string[]=[]
  

@Output() onShow:EventEmitter<object> =new EventEmitter<object>()


 constructor(){
  this.limpiadores=this.productoLimpieza.getSubfamilia('Limpiadores')
  this.celulosa=this.productoLimpieza.getSubfamilia('Celulosa')
  this.anexosLimpieza=this.productoLimpieza.getSubfamilia('Anexos limpieza')

  
 }
  ngOnInit(): void {
   console.log(this.subfamilia)
   console.log(this.limpiadores)
   console.log(this.celulosa)
   console.log(this.anexosLimpieza)
  }

 show(seleccionado:string){

  this.subfamilia.subfamilia=seleccionado

    this.onShow.emit(this.subfamilia)        

}



}
