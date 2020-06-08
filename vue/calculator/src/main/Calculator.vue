<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" triple @onClick="clearMemory" />
    <Button label="/" operation @onClick="setOperation" />
    <Button label="7" @onClick="addDigit" />
    <Button label="8" @onClick="addDigit" />
    <Button label="9" @onClick="addDigit" />
    <Button label="*" operation @onClick="setOperation" />
    <Button label="4" @onClick="addDigit" />
    <Button label="5" @onClick="addDigit" />
    <Button label="6" @onClick="addDigit" />
    <Button label="-" operation @onClick="setOperation" />
    <Button label="1" @onClick="addDigit" />
    <Button label="2" @onClick="addDigit" />
    <Button label="3" @onClick="addDigit" />
    <Button label="+" operation @onClick="setOperation" />
    <Button label="0" double @onClick="addDigit" />
    <Button label="." @onClick="addDigit" />
    <Button label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
import Button from "../components/Button";
import Display from "../components/Display";

export default {
  // vai retornar o estado inicial da calculadora
  data: function() {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    };
  },
  // registrando componentes
  components: { Button, Display },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data()); // seta para função estado inicial
    },
    setOperation(operation) {
      if (this.current === 0) {
        //
        this.operation = operation;
        this.current = 1; // setar segunda posição do array para ser alterado
        this.clearDisplay = true; // limpa o display para começar a mostar o segundo valor da operação
      } else {
        const equals = operation === "="; // quando digito for igual, seta variável para true
        const currentOperation = this.operation; // operação atual
        const value1 = this.values[0]; // 

        switch (currentOperation) {
          case "+":
            this.values[0] = this.values[0] + this.values[1];
            break;
          case "-":
            this.values[0] = this.values[0] - this.values[1];
            break;
          case "*":
            this.values[0] = this.values[0] * this.values[1];
            break;
          case "/":
            this.values[0] = this.values[0] / this.values[1];
            break;
          default:
            this.values[0] = value1;
            console.log("Caiu no default!!!");
        }

        this.values[1] = 0; // seta o valor da segunda posição do array para entra de novo valor
        this.displayValue = this.values[0]; // renderiza no display o resultado do switch acima
        this.operation = equals ? null : operation;
        this.current = equals ? 0 : 1;
        this.clearDisplay = !equals

      }
    },
    addDigit(n) {
      // validação para não haver dois pontos na mesma expressão formando um valor inválido
      if (n === "." && this.displayValue.includes(".")) {
        return; // saia da função
      }

      if (n === "." && this.displayValue === "0") {
        return this.displayValue = "0."
      }

      
      const clearDisplay = this.displayValue === "0" || this.clearDisplay; // dois casos para setar variável para true

      const currentValue = clearDisplay ? "" : this.displayValue; // condição para setar string vazia (true) ou  valor atual (false)
      const displayValue = currentValue + n; // concatenação

      // setando variável do estado do objeto
      this.displayValue = displayValue;
      this.clearDisplay = false;

      // add digitos ao array values para operação matemática
      if (n !== ".") {
        const i = this.current; // valor de índice 0 ou 1
        const newValue = parseFloat(displayValue);
        this.values[i] = newValue;
      }

    }
  }
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>