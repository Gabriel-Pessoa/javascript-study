import $ from 'jquery' // referenciei o $ ao jQuery

const loadHtmlSuccessCallbacks = [] // array de funções callbacks que serão chamadas quando uma requisição for bem sucedida

//add callbacks no array sem duplicidade
export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) { // teste para saber valor já está incluído
        loadHtmlSuccessCallbacks.push(callback)   
    }
}

// vai ler todos os atributos wm-include
function loadIncludes(parent) {
    if(!parent) parent = 'body' // parent não estiver setado
    $(parent).find('[wm-include]').each(function(i, e) { // procure dentro do parent todos que tem propriedade personalizada
        const url = $(e).attr('wm-include') // o valor do wm-include é a url

        $.ajax({
            url,
            success(data) { // sempre que carregar um html de forma bem sucedida
                $(e).html(data) // inclui o data dentro do elemento
                $(e).removeAttr('wm-include') // exclui para não haver nova interpretação
                
                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data)) //

                loadIncludes(e) // Recurssividade. Procura no elemento novos includes até os filhos dos filhos
            }
        })
    }) 
}

loadIncludes() // vazio ele usa o body como parent