import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormReactivoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FormReactivoComponent
  ]
})
export class RetoModule { }
