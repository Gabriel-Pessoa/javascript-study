// Teste callback no browser
document.getElementsByTagName("body")[0].onclick = function (e) { // A função aqui é o callback, e 
    console.log('Evento ocorreu!! ')                             // e sua causa é o evento 'e'
}
