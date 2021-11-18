import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
    
        <h1>{{title}}</h1>

        <h3> La base es: <strong>{{ base }} </strong> </h3 >

        <button (click)="acomular(base)" > +{{ base }}</button>

        <span> {{ numero }} </span>

        <button (click)="acomular(-base)" > -{{ base }}</button>`
})

export class ContadorComponent {
    title: string = 'ContadorApp';
    numero: number = 10;
    base: number = 1;

    acomular(valor: number) {
        this.numero += valor;

    }

}