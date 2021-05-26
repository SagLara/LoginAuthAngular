import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'; 
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  user ={
    userName: 'alberto',
    pass: 'pass'
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ){ 

  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      userName: new FormControl(this.user.userName),
      pass: new FormControl(this.user.pass),
    });
  }

  login(){
    const user = this.formLogin.value;
    this.authService.login(user).subscribe((res:any) =>{
      if(res.token==undefined){
        Swal.fire({
          icon: 'error',
          title: 'Error.',
          text: res,
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        localStorage.setItem('token', res.token);
        environment.CERRAR_SESION=true;
        this.router.navigate(['home']);
      }  
    });
    
  }

}
