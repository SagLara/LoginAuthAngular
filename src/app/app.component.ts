import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import Swal from 'sweetalert2'; 
import { environment } from "../environments/environment";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Login Auth Angular';
  private sesion$ = new Subject<boolean>();


  constructor(private router : Router,
    private authService: AuthService,) {
  }

  logOut(){
    if(this.authService.isAuth()){
      Swal.fire({
        title: '¿Desea cerrar sesión?',
        text: "¿Esta segur@ de terminar la sesión de la aplicación?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Log Out!',
            'Su sesión ha finalizado.',
            'success'
          );
          localStorage.removeItem('token');
          this.router.navigateByUrl('#');
        }
      });
    }else{
      this.router.navigate(['#']);
    }
    
  }

}
