// node não reconhece esse sistema de import
import Pessoa from './pessoa'
import './modulos/moduloA' // ponto de entrada para chegar no módulo A que faz referência ao módulo B através do import
import './assets' // ponto de entrada para procurar por index
const atendente = new Pessoa
console.log(atendente.cumprimentar())