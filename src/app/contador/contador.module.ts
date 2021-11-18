import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        //componentes
        ContadorComponent
    ],
    exports:[
        //para poder usar fuera de componente
        ContadorComponent
    ]
    })

export class ContadorModule{}