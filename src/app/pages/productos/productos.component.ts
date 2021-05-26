import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Producto } from '../../models/producto';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  producto: Producto;
  productos: Producto[]= [];
  nuevo: boolean =false;
  update: boolean =false;

  formProducto:FormGroup;
  
  
  /* productForm = new FormGroup({
    nombre: new FormControl('Camiseta Seleccion Colombia'),
    precio: new FormControl(35000),
    stock: new FormControl(40)
  }); */

  constructor(public authService: AuthService,
    private router : Router) { 
    this.getProductos();
  }

  ngOnInit(): void {
    this.formProducto = new FormGroup({
      ID_PRODUCTO: new FormControl(),
      NOMBRE: new FormControl(),
      PRECIO: new FormControl(),
      STOCK: new FormControl()
    });
  }

  validaciones():boolean{
    console.log(this.formProducto.value);
    let addProd =this.formProducto.value
    if(addProd.NOMBRE==null || addProd.NOMBRE=="" || addProd.PRECIO==null || addProd.STOCK==null || !this.formProducto.valid){
      this.authService.showSwAlertError("Datos incorrectos","Verifique los datos antes de enviarlos");
      return false;
    }else if(addProd.PRECIO<0 || addProd.STOCK<0){
      this.authService.showSwAlertError("Datos negativos","El precio o stock debe tener valores positivos");
      return false;
    }
    else{
      return true
    }
  }
  
  addProducto(){
    let addProd =this.formProducto.value
    if(this.validaciones()){
      this.authService.showSwAlertSucces("Producto Agregado",`El producto "${addProd.NOMBRE}" fue agregado con exito`);
      this.authService.addProducto(addProd).subscribe((resp) => {
        console.log(resp);
        if(resp!="error"){
          this.getProductos();
          this.formProducto.reset('');
          this.nuevo=false;
        }else{
          console.log("F agregando");
        }
      },(error) => {
        console.error(error);
      });
    }   
  }

  getProductos(){
    this.authService.getProductos().subscribe((resp:any) =>{
      if(resp!=null){
        const data = resp;
        this.productos=data;
        console.log(this.productos); 
      }else{
        console.log("F");
      }
    });
  }

  getProducto(id: number){
    this.authService.getProducto(id).subscribe((resp:any) =>{
      if(resp!=null){
        const {ID_PRODUCTO ,NOMBRE, PRECIO, STOCK} = resp;
        this.producto=resp;
        this.formProducto.setValue({ID_PRODUCTO,NOMBRE, PRECIO, STOCK});
        this.update=true;
        console.log(this.producto); 
      }else{
        console.log("F solito");
      }
    },(error) => {
      console.error(error);
    });
  }

  updateProducto():void {
    const obj = this.formProducto.value;
    console.log(obj);
    if(this.validaciones()){
      this.authService.showSwAlertSucces("Producto Actualizado",`El producto "${obj.NOMBRE}" se actualizo con exito`);
      this.authService.updateProducto(obj).subscribe((resp) => { 
        console.log(resp);
        if(resp!=null){
          this.getProductos();
          this.formProducto.reset('');
          this.update=false;
        }else{
          console.log("F actualizando");
        }  
       },(error) => {
         console.error(error);
      });
    }
    
  }

  deleteProducto(id:number){
    Swal.fire({
      title: '¿Esta seguro que desea eliminar el producto?',
      showDenyButton: true,
      confirmButtonText: `Borrar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.authService.deleteProducto(id).subscribe((resp) => {  
          console.log(resp);
          Swal.fire('Borrado!', '', 'success')
          if(resp!="error"){
            this.getProductos();
          }else{
            console.log("F eliminando");
          }
        },(error) => {
          console.error(error);
      })

     }  

    });
  }

  changeUrl(flag,id?){
    this.cargarUsuario().then((res)=>{
      if(res!=null){
        if(res.ID_ROL!="admin"){
          Swal.fire({
            icon: 'error',
            title: 'Error. Permisos insuficientes',
            text: 'No puedes acceder a este apartado',
            showConfirmButton: false,
            timer: 1500
          }).then(()=>{
            window.location.reload();
          });
        }else{
          if(flag==0){
            this.router.navigate(['/productos/0']);
            this.nuevo=true;
          }else if(flag==-1){
            this.router.navigate(['/productos/-1']);
            this.deleteProducto(id);
          }else if(flag==1){
            this.router.navigate([`/productos/${id}`]);
            this.getProducto(id);
            this.update=true;
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Error. Ruta incorrecta',
              text: 'No existe la ruta',
              showConfirmButton: false,
              timer: 1500
            }).then(()=>{
              this.router.navigate(['/productos']);
            }).catch(()=> {return false});
          }
        }
      }
    });
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


}
