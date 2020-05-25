import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300 // duração animação em milisegundos

function filterByCity(city) {
    // percorre todos os elementos com propridade personalizada
    $('[wm-city]').each(function (i, e) {
        // definindo alvo
        const isTarget = $(this).attr('wm-city') === city || city === null // seta variável para true, null ou false. Se parâmetro da função for igual ao atributo ou atributo é igual nulo seta para true, senão false

        if (isTarget) {
            $(this).parent().removeClass('d-none') // remove class="d-none", permitindo estilos de grid e organizando itens em exibição
            $(this).fadeIn(duration)
        }
        else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none') // esconde estilos de grid das imagens para não causar buracos na exibição
            })
        }
    })
}

// add plugin ao jQuery
$.fn.cityButtons = function () { 
    const cities = new Set // Cria um botão associado para cada cidade, não permite repetição por conta da sintaxe do Set

    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city')) // add cidades sem duplicidades a variável cities (set) 
    })

    const btns = Array.from(cities).map(city => { // Converte cities (new Set) em array, aplica o método map
        const btn = $('<button>')   // cria um nó button para cada elemento 
            .addClass(['btn', 'btn-info']).html(city) // add classes bootstrap ao nó criado acima
        btn.click(e => filterByCity(city))
        return btn
    })

    // button que representa seleção de todas as cidades
    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active'])// por padrão é active
        .html('Todas') // Equivalente à innerHTML

    btnAll.click(e => filterByCity(null)) // atribuição null ao parâmetro da função filterByCity, retornando todas as cidades

    btns.push(btnAll) // add btnAll ao Array de btns

    const btnGroup = $('<div>').addClass(['btn-group'])

    btnGroup.append(btns) // add ao nó o array de buttons

    $(this).html(btnGroup) // injetando o grupo de botões

    return this
}

onLoadHtmlSuccess(function() {
    $('[wm-city-buttons]').cityButtons() // Onde está dentro html essa propriedade? Para poder injetar os buttons das cidades
})

