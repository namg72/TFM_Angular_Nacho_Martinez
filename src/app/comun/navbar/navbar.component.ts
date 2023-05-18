import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { CartService } from 'src/services/cart.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar2.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  iconoLogin='< i class="fa-sharp fa-solid fa-user fa-2x">'

  usuario=false;
  admin=false

  constructor(private router:Router, public authService:AuthService, public cartService:CartService ){
   
   }
  ngOnInit(): void {
    this.isUsuario()
    this.isAdmin()
    
  }

  
  irLogin(){
    if(!this.usuario){
      this.router.navigateByUrl("/auth/login")
    }
   
  }

   isUsuario(){
    if(localStorage.getItem('userName')){
      this.usuario= true
    }
     else{
      this.usuario= false 
     }
    
    }
   
    isAdmin(){
      if(localStorage.getItem('rol')=='admin'){
        this.admin=true
      }
    }

    cerrarSesion(){
      localStorage.clear()
      this.usuario=false
      this.admin=false
      this.authService.nombreSesion='Inicie Sesión'
      this.router.navigateByUrl("/home")
    }

}
