import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ubicacion } from 'src/app/models/ubicacion';
import { AuthService } from '../../services/auth.service';
import { Informe } from '../../models/informe';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  informe: Informe=null;
  location: Ubicacion=null;
  informes: Informe[]= [];


  constructor(public authService: AuthService) { 
    this.getInformes();
  }

  ngOnInit(): void {

  }

  getInformes(){
    this.authService.getInformes().subscribe((resp:any) =>{
      console.log(resp);
      
      if(resp!=null){
        const data = resp;
        this.informes=data;
        console.log(this.informes); 
      }else{
        console.log("F");
      }
    });
  }
}
