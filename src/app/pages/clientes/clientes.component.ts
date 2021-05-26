import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { Ubicacion } from 'src/app/models/ubicacion';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente: Cliente=null;
  location: Ubicacion=null;
  clientes: Cliente[]= [];

  constructor(public authService: AuthService) { 
    this.getClientes();
  }

  ngOnInit(): void {

  }

  getClientes(){
    this.authService.getClientes().subscribe((resp:any) =>{
      console.log(resp);
      
      if(resp!=null){
        const data = resp;
        this.clientes=data;
        console.log(this.clientes); 
      }else{
        console.log("F");
      }
    });
  }
}
