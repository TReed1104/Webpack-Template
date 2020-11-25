import Vue from 'vue'
import router from './router/index.js'
import store from './store/store.js'
import App from './components/App.vue'
import './assets/app.scss'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})