import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'] // Recebe um array por padrão pq podemos ter mais de uma folha de estilo
})
export class StarComponent implements OnChanges {

    @Input() // Decorator. Criar uma variável que recebe valor de outro componente.
    rating: number = 0;
    
    starWidth: number;

    // Um hook de ciclo de vida que é chamado quando qualquer 
    // propriedade ligada a dados de uma diretiva muda
    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }
}