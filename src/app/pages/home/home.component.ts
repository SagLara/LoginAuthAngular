import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  infoPokemon={
    id:0,
    nombre: '' ,
    tipos:{
      primario:'',
      secundario:'',
    },
    img: '',
    img_back: '',
    shiny:'',
    shiny_back:'',
  };

  user:any={};

  constructor(
    private authService: AuthService,
  ) 
  {
    this.cargarUsuario().then((result) => {
      if(result!=null){
        this.user.userName=result.NOMBRE_USUARIO;
        this.user.rol=result.ID_ROL;
      }
      this.cargarPokemon().then((res)=>{
        if(result!=null){
          this.infoPokemon.id=res.id;
          this.infoPokemon.nombre=res.name;
          this.infoPokemon.tipos.primario=res.types[0].type.name;
          this.infoPokemon.tipos.secundario=res.types[1].type.name;
          this.infoPokemon.img=res.sprites.front_default;
          this.infoPokemon.shiny=res.sprites.front_shiny;
          this.infoPokemon.img_back=res.sprites.back_default;
          this.infoPokemon.shiny_back=res.sprites.back_shiny;
        }
      });
    });
  }

  ngOnInit(): void {
  }

  cargarUsuario(): Promise<any>{
    return new Promise((resolve,reject) =>{
      this.authService.getUserName().subscribe((user:any)=>{
        if(user!=null){
          console.log(user);
          
          resolve(user);
        }else{
          resolve(null);
        }
      });
    })
  }

  cargarPokemon(): Promise<any>{
    return new Promise((resolve,reject) =>{
      this.authService.getPublic().subscribe((pokeInfo:any)=>{
        if(pokeInfo!=null){
          resolve(pokeInfo);
        }else{
          resolve(null);
        }
      });
    });
    
  }


}
