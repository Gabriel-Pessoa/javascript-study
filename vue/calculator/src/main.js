import Vue from 'vue'
import App from './App'

new Vue({
    // função render método da instancia Vue, recebe uma callback como parâmetro
     // retorna callback e como parâmetro o App importado 
     render: h => h(App)   
}).$mount('#app') // seletor de elemento, que recebe como parâmetro o id do nó que irá injetar o conteúdo