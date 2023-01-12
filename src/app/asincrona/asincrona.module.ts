import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsincronaFormComponent } from './asincrona-form/asincrona-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AsincronaFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AsincronaFormComponent
  ]
})
export class AsincronaModule { }
