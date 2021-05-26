import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginGuard } from './guards/login.guard';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { RoleGuard } from './guards/role.guard';
import { InformesComponent } from './pages/informes/informes.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [

  {
    path : 'login', 
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path : 'login/registro', 
    component: RegistroComponent,
    canActivate: [LoginGuard]
  },
  {
    path : 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'clientes', 
    component: ClientesComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'informes', 
    component: InformesComponent,
    canActivate: [RoleGuard],
    data: {expectedRole: 'admin'}
  },
  {
    path : 'productos', 
    component: ProductosComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'productos/:id', 
    component: ProductosComponent,
    canActivate: [RoleGuard],
    data: {expectedRole: 'admin'}
  },
  {path : '', pathMatch:'full', redirectTo: 'login'},
  {path : '**', pathMatch:'full', redirectTo: 'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
