import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent {

  constructor(private unFormBuilder: FormBuilder){}

  unRegistroForm = this.unFormBuilder.group({
    name: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z]')]}]
  })

  get name(){ return this.unRegistroForm.get('name'); }

  
}
