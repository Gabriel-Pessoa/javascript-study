class Lancamento {
    constructor (nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor (mes,ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
       lancamentos.forEach( l => this.lancamentos.push(l)) // Irá percorrer cada valor do array lancamentos(passado como parâmentro na função) e add no array anônimo criado no construtor
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach( l => {  // Para cada objeto do array do construtor    
            valorConsolidado += l.valor // irá pegar o atributo valor desse objeto e add ao valor consolidado
        })
       return valorConsolidado
    }

}

const salario = new Lancamento('Sálario', 45000)
const contaLuz = new Lancamento('Conta de luz', -220) // Quando eu quero que o lançamento seja uma dívida, lanço negativo, se for um saldo, lanço positivo


const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario,contaLuz)
contas.sumario();
