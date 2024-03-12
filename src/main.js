import './assets/main.css'

import { createApp} from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'
import VueSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import router from './router'
import './registerServiceWorker'

const app = createApp(App).use(autoAnimatePlugin).component('VueSelect', VueSelect)

app.use(router)

app.mount('#app')
