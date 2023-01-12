import { Component } from '@angular/core';


interface datosDePersona{
  nombre: string,
  email: string,
  mensaje: string
}

@Component({
  selector: 'app-asincrona-form',
  templateUrl: './asincrona-form.component.html',
  styleUrls: ['./asincrona-form.component.css']
})
export class AsincronaFormComponent {
required: any;
minlength: any;


  ngAfterViewInit(){
    console.log('hi')
  }

    /* 
  ngOnInit() is called after ngOnChanges() was called the first time. ngOnChanges() is called every time inputs are updated by change detection.

  ngAfterViewInit() is called after the view is initially rendered. This is why @ViewChild() depends on it. You can't access view members before they are rendered.
  */


  /* RESOLUCION */

  model: datosDePersona = {nombre:'',email:'',mensaje:''};

  /* el atributo pais no es un string, es un Listado, el valor por defecto va a ser , ofertas:false */

  allOk: boolean = false;

  EnviarDatos(){
    console.log(this.model);
    this.allOk = true
    if(this.allOk){
      alert('Registro exitoso')
    }
  }

}
