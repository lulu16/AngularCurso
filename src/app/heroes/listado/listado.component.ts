import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
 
export class ListadoComponent  {

  Heroes:string[]=['Spiderman','Iroman','Superman']
  heroeBorrado:string='';

  borrarHeroe(){
    //this.Heroes.splice(2); //deja los elementos de indico en el numero7
    this.heroeBorrado =this.Heroes.shift()|| ''; //borrar el primer elemento del arreglo, regrea un underfine o string
    
  }
  

}
