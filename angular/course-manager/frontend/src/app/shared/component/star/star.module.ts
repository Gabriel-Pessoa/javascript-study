import { NgModule } from "@angular/core";
import { StarComponent } from './star.component';

@NgModule({
    declarations: [
        StarComponent
    ],
    // Diz ao angular que vamos exportar algo, desse módulo, 
    // para o módulo que ele estar sendo importado esse componente.

    exports: [
        StarComponent
    ]
})
export class StarModule { }
