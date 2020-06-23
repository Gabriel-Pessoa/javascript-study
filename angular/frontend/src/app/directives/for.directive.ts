import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit { //implementando ciclo de vida de inicialização

  // criando input para interpretação da diretiva. Dizendo que após o 'in' é esperado um array de número
  @Input('myForIn') numbers: number[];

  //posso implementar um número grande de input em cadeia
  //@Input('myForUsando') text: string;

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { 

  }

  //implementando método de inicialização
  ngOnInit():void {
    for(let number of this.numbers) {
      //criei um container(espécie de div) que envolve o template, repetindo o template de forma limitada pelo for.
      this.container.createEmbeddedView(this.template, { $implicit: number }); // o segundo parâmetro da função create é um objeto com atributo imnplicito que irá sofrer uma interpolação no html
    }
    //console.log(this.numbers);
   // console.log(this.text);
  }

}
