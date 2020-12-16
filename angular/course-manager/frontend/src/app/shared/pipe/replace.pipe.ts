import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace' // o mesmo nome utilizado no pipe da tag
})
export class ReplacePipe implements PipeTransform {
    // o primeiro argumento da função é justamento o valor acessado para transformação
    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }
}