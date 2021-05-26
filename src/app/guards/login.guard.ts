import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService : AuthService, 
    private router :Router
  ){
    
  }

  canActivate():boolean {
    if(this.authService.isAuth()){
      Swal.fire({
        icon: 'error',
        title: 'Ya esta logeado',
        text: 'Debe cerrar sesión para ir a la ruta',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.router.navigate(['/home']);
      }).catch(()=> {return false});
      return false;
    }
    return true;
  }
  
}
