import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'; 
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService : AuthService, 
    private router :Router
  ){
    
  }

  canActivate(route:ActivatedRouteSnapshot):boolean {
    const expectedRole = route.data.expectedRole;
    if(this.authService.isAuth()){
      const token = localStorage.getItem('token');

      const info:any = decode(token);
      const { NOMBRE_USUARIO, ID_ROL } = info.data;
  
      console.log(ID_ROL);
  
      if(ID_ROL!=expectedRole){
        Swal.fire({
          icon: 'error',
          title: 'Error. Faltan Permisos',
          text: 'El usuario no esta autorizado para continuar',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          this.router.navigate(['/home']);
          return false;
        }).catch(()=> {return false});
        return false;
      }
      return true;
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error. No esta Autenticado',
        text: 'El usuario no esta autorizado para continuar',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.router.navigate(['#']);
      }).catch(()=> {return false});
      return false;
    }
    
  }
  
}
