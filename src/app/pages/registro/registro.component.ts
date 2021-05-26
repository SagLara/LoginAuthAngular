import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'; 
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formReg: FormGroup;

  user ={
    userName: 'pepe',
    pass: 'pass123',
    validpass: 'pass123'
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ){ 

  }

  ngOnInit(): void {
    this.formReg = new FormGroup({
      userName: new FormControl(this.user.userName),
      pass: new FormControl(this.user.pass),
      validpass: new FormControl(this.user.validpass),
    });
  }

  registrar(){
    const user = this.formReg.value;
    console.log(user.pass.value);
    console.log(user.validpass.value);
    if (user.pass.value!=user.validpass.value) {
      Swal.fire({
        icon: 'error',
        title: 'Error.',
        text: "Las contraseñas deben ser iguales",
        showConfirmButton: false,
        timer: 1500
      });
    }
    this.authService.registro(user).subscribe((res:any) =>{
      console.log(res);
      
      if(res==null){
        Swal.fire({
          icon: 'error',
          title: 'Error. Registro',
          text: "Ocurrio un error al crear el usuario ",
          showConfirmButton: false,
          timer: 1500
        });
      }else if(!res){
        Swal.fire({
          icon: 'error',
          title: 'Error. Usuario Duplicado',
          text: "El usuario ya existe ",
          showConfirmButton: false,
          timer: 1500
        });
      }
      else{
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado',
          text: res,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['#']);
      }  
    });
    
  }

}
