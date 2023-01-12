import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnFormComponent } from './un-form/un-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UnFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UnFormComponent
  ]
})
export class EnClaseModule { }
