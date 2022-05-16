import Vue from 'vue'
import App from './App.vue'
/* Import di Bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const bootstrap = require('bootstrap')
Vue.use(bootstrap)
/* Import del font da fontsource */
import "@fontsource/pt-sans"
import "@fontsource/josefin-sans/400.css"
import "@fontsource/josefin-sans/700.css"
/* Import di Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faGem, faChartLine, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add icons to the library */
library.add(faTwitter, faGlobe, faGem, faChartLine, faChevronRight)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)




Vue.config.productionTip = false
7
new Vue({
  render: h => h(App),
}).$mount('#app')
