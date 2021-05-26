import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  getUserName(){
    return this.http.get(`${this.url}/home`);
  }

  getPublic(){
    return this.http.get(`${this.url}/home/public`);
  }

  login(user:any){
    return this.http.post(`${this.url}/login`,user);
  }

  registro(user:any){
    return this.http.post(`${this.url}/login/registro`,user);
  }

  getCliente(id:number){
    return this.http.get(`${this.url}/clientes/cliente/${id}`);
  }

  getClientes(){
    return this.http.get(`${this.url}/clientes`);
  }

  addProducto(obj:any){
    return this.http.post(`${this.url}/productos/add`,obj);
  }

  updateProducto(obj:any){
    return this.http.put(`${this.url}/productos/update`,obj);
  }

  deleteProducto(id:number){
    return this.http.get(`${this.url}/productos/delete/${id}`);
  }

  getProducto(id:number){
    return this.http.get(`${this.url}/productos/${id}`);
  }

  getProductos(){
    return this.http.get(`${this.url}/productos`);
  }

  getInformes(){
    return this.http.get(`${this.url}/informes`);
  }


  isAuth():boolean{
    const token = localStorage.getItem('token');
    if(token==null ){
      return false;
    }else if(this.jwtHelper.isTokenExpired(token)){
      return false;
    }
    return true;
  }

   /**
    *
    * Muestra un SweetAlert de Error
    * 
    * @param titulo
    * @param error
    * 
    */
    showSwAlertError(titulo, error: any) {
      Swal.fire({
          icon: "error",
          title: "ERROR. " + titulo,
          html: error,
          confirmButtonText: "Aceptar",
      });       
    }
  
    /**
      *
      * Muestra un SweetAlert de Error
      * 
      * @param titulo
      * @param error
      * 
      */
     showSwAlertSucces(titulo, msj: any) {
      Swal.fire({
          icon: "success",
          title: titulo,
          html: msj,
      });       
    }

}
