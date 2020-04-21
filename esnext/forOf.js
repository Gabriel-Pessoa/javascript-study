for ( let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map','Set','Promise']

for (let i in assuntosEcma ) {
    console.log(i)
}

for ( let letra of assuntosEcma ) {
    console.log(letra)
}

const assuntosMap = new Map([
    ['Map', { abordado:true}],
    ['Set', {abordado:true}],
    ['Promisse', {abordado:true}]
])

for (let chave of assuntosMap) {
    console.log(chave)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}   

for (let [ch, vl] of assuntosMap.entries()) { // operador destructuring chave/valor
    console.log(ch, vl)
}

const s = new Set(['a','b','c'])

for (let letra of s) {
    console.log(letra)
}



