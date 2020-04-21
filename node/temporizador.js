const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 3', function () { // Explicando Regex: a cada 5 segundos(*/5), na hora (20) no dia 03 da semana(quarta)
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout( function() {
    tarefa1.cancel() // Cancela a tarefa acima 
    console.log('Cancelando tarefa 1...')
}, 20000)

// setImmediate (executa com temporizador zerado)
// setInterval (dispara uma função de tempo e tempo)

const regra = new schedule.RecurrenceRule()

regra.dayOfWeek = [ new schedule.Range(1, 5) ] // Determina o intervalo da semana que a tarefa será executada, dia 1 segunda até dia 5 sexta
regra.hour = 20 // Regra para hora atual exata que irá executa a tarefa
regra.second = 30 //  no segundo 30 irá executar

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})