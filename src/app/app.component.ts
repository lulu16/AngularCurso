import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  //template se usa para escribiir dentro codigo de html <h1>Lucy Marisol</h1>
})
export class AppComponent {
  title: string = 'ContadorApp';
  numero: number = 10;
  base: number = 1;

  sumar() {

    this.numero += 1;
  }
  restar() {

    this.numero -= 1;
  }


  acomular(valor: number) {
    this.numero += valor;

  }
}
