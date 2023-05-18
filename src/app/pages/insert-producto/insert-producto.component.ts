
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosTipo } from 'src/model/productosTipo.model';
import { ProdutosService } from 'src/services/produtos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-insert-producto',
  templateUrl: './insert-producto.component.html',
  styleUrls: ['./insert-producto.component.css']
})
export class InsertProductoComponent  implements OnInit{

  productoTipo:ProductosTipo= new ProductosTipo()
 

  miFormulario:FormGroup

  ivaDeCompra:number=0;
  ventaConIva:number=0;
 
  familiaTipo:string[]=[]
  familiaProducto:string=''
  subfamiliaTipo:string[]=[]
  familiaSelect:string=''


  constructor(private fBuilder:FormBuilder, private ProductosService: ProdutosService) {

  ;

    this.miFormulario=this.fBuilder.group(
      {
        tipoProducto:[
          "",[
            Validators.required
          ]
        ],
        familia:[
          "",[
            Validators.required
          ]
        ],
        subfamilia:[
          "",[
            Validators.required
          ]
        ],
        codigoBarras:[
          ""
        ],
        nombreProducto:[
          "",[
            Validators.required
          ]
        ],
         precioCompra:[
          ""
        ],
      
        precioVenta:[
          ""
        ] 
     
      }

    )


   }
  ngOnInit(): void {
   
     this.miFormulario.get('tipoProducto')?.valueChanges
         .subscribe(data=> {
          this.miFormulario.get('familia')?.reset()
          this.miFormulario.get('subfamilia')?.reset()
         })
         
     
  }

familia(){


  if(this.miFormulario.value.tipoProducto==='Pintura')  this.familiaTipo=this.productoTipo.getPinturasFamilia()
  else if(this.miFormulario.value.tipoProducto==='Limpieza') this.familiaTipo=this.productoTipo.getLimpiezaFamilia()
  else if (this.miFormulario.value.tipoProducto==='Lavandería') this.familiaTipo=this.productoTipo.getLavanderiaFamilia()
 
 }

 subfamilia(){
  this.familiaSelect=this.miFormulario.value.familia
  this.subfamiliaTipo=this.productoTipo.getSubfamilia(this.familiaSelect)
  if(this.miFormulario.get('familia')?.value===''){
     this.miFormulario.get('subfamilia')?.reset('')
  }
 } 
 

 send(){
  if(this.miFormulario.valid) {
    console.log("formulario valido");
   
    
    this.ProductosService.insertProducto(this.miFormulario.value)
    .subscribe
    ((response:any)=>{
      console.log(response);
      console.log(this.miFormulario);
  
      if(response.status==200){

        Swal.fire({
          title:`Producto: ${this.miFormulario.value.nombreProducto} insertado`,
          icon: 'success',
          confirmButtonText: 'OK'
      })
      this.resetFields()
      }
      
    },
    
    (err)=>{

      if(err.status==400){
          Swal.fire({
          title: 'Error!',
          text: `${err.error.msg}`,
          icon: 'error',
          confirmButtonText: 'Cerrar'
        })
     }
      console.log(err);
 
    }
    )
    
    //Vaciamos campos
  
 
  
    
  }else{
    Swal.fire({
      title: '!!Formulario invalido',
      text: `Revise los campos`,
      icon: 'error',
      confirmButtonText: 'OK'
  })
    console.log("formulario invalido");
    console.log(this.miFormulario);
  }
 
}

 ivaCompra() {
  
  this.ivaDeCompra=(this.miFormulario.value.precioCompra*0.21)

  
 }

 ivaVenta(){
  
  this.ventaConIva=(this.miFormulario.value.precioVenta*1.21)

 }

resetFields(){
  this.miFormulario.reset();
  this.ivaDeCompra=0;
  this.ventaConIva=0;
}

}
