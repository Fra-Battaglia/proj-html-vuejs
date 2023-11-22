import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as bootstrap from 'bootstrap'

const app = createApp(App)

app.config.globalProperties.window = window;
app.config.globalProperties.document = document;

app.mount('#app')
