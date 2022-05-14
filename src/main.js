import Vue from 'vue'
import App from './App.vue'
/* Import di Bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const bootstrap = require('bootstrap')
Vue.use(bootstrap)
/* Import del font da fontsource */
import "@fontsource/josefin-sans"
import "@fontsource/josefin-sans/100.css"
import "@fontsource/josefin-sans/300.css"
import "@fontsource/josefin-sans/500.css"
import "@fontsource/josefin-sans/700.css"

Vue.config.productionTip = false
7
new Vue({
  render: h => h(App),
}).$mount('#app')
