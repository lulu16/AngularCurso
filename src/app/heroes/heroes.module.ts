import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
        //componentes
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        //modulos
        CommonModule //SIRVE para usar LAS DIRECTIVAS ngFor, ngIF
    ]
})

export class HeroesModule{}