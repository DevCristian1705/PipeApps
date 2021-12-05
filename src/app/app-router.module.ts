import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './Ventas/pages/basicos/basicos.component';
import { LibrosComponent } from './Ventas/pages/libros/libros.component';
import { NoComunesComponent } from './Ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './Ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './Ventas/pages/ordenar/ordenar.component';
import { UsuariosComponent } from './Ventas/pages/usuarios/usuarios.component';

const routes : Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch : 'full',
  },
  {
    path: 'numeros',
    component: NumerosComponent, 
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent, 
  },
  {
    path: 'ordenar',
    component: OrdenarComponent,
  },
  {
    path: 'libros',
    component: LibrosComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: '**',
    redirectTo : '',
  }


];

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule
  ]
})
export class AppRouterModule { }
