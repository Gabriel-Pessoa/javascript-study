import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App)
    // render(creteElement) {
    //     return createElement(App)
    // } 
}).$mount("#app")