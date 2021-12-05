import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'; 
import { MenuComponent } from './menu/menu.component';
import { PrimengModule } from '../Primeng/primeng.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [ 
    CommonModule,
    PrimengModule
  ], 
  exports:[
    MenuComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule { }
