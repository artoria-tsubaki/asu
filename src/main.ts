import { createApp } from 'vue'
import MvFullPage from 'mv-full-page'
import "../node_modules/mv-full-page/dist-lib/style.css"
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(MvFullPage)

app.mount('#app')
