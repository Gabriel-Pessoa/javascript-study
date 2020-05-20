(function ($) {
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({ // usei extend para definir propriedades padrões, caso o usuário
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)  

        const horaDezena = $('<span class="digito">').html('0') // criei um span com class="digio" inicio com valor zero
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0') 

        const separadorHora = $('<span class="separador">').html(':') // separador para o temporizador
        const separadorMinuto = $('<span class="separador">').html(':')

        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem) // criei uma  div com a class=mesagem 

        $(this).addClass('temporizador') // para que o elemento tenha a class e o css possa aplicar estilo através da classe
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, 
            minutoUnidade, separadorMinuto, segundoDezena, segundoUnidade, mensagem)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/) // regex para captura os digitos do temporizador     
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        //console.log(horarioAlvo)

        let temporizador = setInterval(()=> {
            const agora = new Date()
            const alvo = new Date()   
            alvo.setHours(horarioAlvo[1]) //seta horas
            alvo.setMinutes(horarioAlvo[2]) // seta minutos
            alvo.setSeconds(horarioAlvo[3]) // seta segundos

            const diferencaEmMili = alvo.getTime() - agora.getTime()
            if(diferencaEmMili >= 0) { // condição para pegar diferencaEmMili seja positiva
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString()) // regex captura novamente digito do temporizador e o iso string trás a hora sem gmt, separando por hora, minuto esegundo
                //console.log(diferenca)

                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            }
            else { // caso a diferença seja menor que zero. , negativo
               clearInterval(temporizador) 
            }

        }, 1000)
        
        return this    
    }
})(jQuery)