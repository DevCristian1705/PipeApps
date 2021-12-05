import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button' 
import { MenubarModule } from 'primeng/menubar' 
import { CardModule } from 'primeng/card' 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import {DialogModule} from 'primeng/dialog';
import { FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [],
  exports:[
    CommonModule,

    ButtonModule,
    MenubarModule,
    CardModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    FieldsetModule
  ]

})
export class PrimengModule { }
