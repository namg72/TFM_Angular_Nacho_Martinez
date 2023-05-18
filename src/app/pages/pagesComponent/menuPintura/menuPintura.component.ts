import { Component, EventEmitter, Output } from '@angular/core';
import { ProductosTipo } from 'src/model/productosTipo.model';
import { ProdutosService } from 'src/services/produtos.service';

@Component({
  selector: 'app-menuPintura',
  templateUrl: './menuPintura.component.html',
  styleUrls: ['./menuPintura.component.css']
})
export class MenuPinturaComponent  {

pinturaAlAgua:string[]=[]
pinturaAlDisolvente:string[]=[]
pincelesBrochasRodillos:string[]=[]
masillas:string[]=[]
anexosPintura :string[]=[]
adhesivos:string[]=[]

public subfamilia = {
  subfamilia: '',
};

  
productosPintura:ProductosTipo = new ProductosTipo()

@Output() onShow:EventEmitter<object> =new EventEmitter<object>()


 constructor(private productoService: ProdutosService){
  this.pinturaAlAgua=this.productosPintura.getSubfamilia('Pinturas al agua')
  this.pinturaAlDisolvente=this.productosPintura.getSubfamilia('Pinturas al disolvente')
  this.pincelesBrochasRodillos=this.productosPintura.getSubfamilia('Pinceles brochas y rodillos')
  this.masillas=this.productosPintura.getSubfamilia('Masillas')
  this.anexosPintura =this.productosPintura.getSubfamilia('Anexos pintura')
  this.adhesivos=this.productosPintura.getSubfamilia('Adhesivos')

  
 }

 show(seleccionado:string){

  this.subfamilia.subfamilia=seleccionado

    this.onShow.emit(this.subfamilia)        

}


  


}
