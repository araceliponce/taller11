import { Component } from '@angular/core';

interface Registro{
  username: string,
  pass: string,
  pais: Listado,
  ofertas: boolean
}

enum Listado{
  ninguno = 0,
  peru = 1,
  argentina = 2
}

/* si coloco la interfaz en modelos/registro.ts  coloco: export interface Regist.... */
/* los objetos de tipo enum sirven para listados. si los colocas en .ts distintos colocar siempre 'export ' antes */

@Component({
  selector: 'app-un-form',
  templateUrl: './un-form.component.html',
  styleUrls: ['./un-form.component.css']
})
export class UnFormComponent {

  model: Registro = {username:'',pass:'',pais:Listado.peru, ofertas:false};

  /* el atributo pais no es un string, es un Listado, el valor por defecto va a ser , ofertas:false */

  Enviar(){
    console.log(this.model)
  }
  Cancelar(){
    this.model={username:'', pass:'', pais:Listado.peru, ofertas:false}
    console.log(this.model)
  }


  //usando interface listado
  paises: any[] =[];

  ngOnInit(){
    for(let item in Listado){
      /* item van a ser los atribtos que no sean numero, o sea solo los nombres de paises, en este caso */
      if(isNaN(Number(item))){
        this.paises.push({text:item, value:Listado[item]})
        /* array. push{text: 'peru',  value: el value de 'peru'} */
      }
    }
  }
}
