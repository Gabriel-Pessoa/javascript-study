function compras (t1,t2) {
    const tomarSorvete = t1 || t2 
    const comprarTv50 = t1 && t2
    const comprarTv32 = t1 != t2 
    const saudavel = !tomarSorvete
    
    return { tomarSorvete, comprarTv50, comprarTv32, saudavel} // Como a função permite apenas um retorno, 
    // jogamos tudo dentro de um objeto. Sabemos que objetos são composto de pares: chave/valor, como passamos 
    // a chave, o java preenche automoticamente o valor com a própria chave 
}

console.log('Os dois trabalhos foram concretizados!!', compras(true, true));
console.log('Apenas o primeiro trabalho foi concretizado!', compras(true, false));
console.log('Apenas o segundo trabalho foi concretizado!', compras(false, true));
console.log('Nenhum trabalho foi concretizado.', compras(false, false));