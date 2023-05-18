import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductosTipo } from 'src/model/productosTipo.model';
import { ProdutosService } from 'src/services/produtos.service';

@Component({
  selector: 'app-menuLavanderia',
  templateUrl: './menuLavanderia.component.html',
  styleUrls: ['./menuLavanderia.component.css']
})
export class MenuLavanderiaComponent implements OnInit {
  productoLavanderia:ProductosTipo = new ProductosTipo()

  public subfamilia = {
    subfamilia: '',
  };


  lavanderiaDomestica:string[]=[];
  lavanderiaIndustrial:string[]=[];
  
   
 
 @Output() onShow:EventEmitter<object> =new EventEmitter<object>()
 
 
  constructor(){
   this.lavanderiaDomestica=this.productoLavanderia.getSubfamilia('Lavandería doméstica')
   this.lavanderiaIndustrial=this.productoLavanderia.getSubfamilia('Lavandería indutrial')

   
  }
  ngOnInit(): void {
    console.log(this.subfamilia);
    console.log(this.lavanderiaDomestica)
    console.log(this.lavanderiaIndustrial)
  }
 
  show(seleccionado:string){
 
   this.subfamilia.subfamilia=seleccionado
 
     this.onShow.emit(this.subfamilia)        
 
 }

}
