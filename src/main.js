import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Button, Sidebar, SidebarItem } from 'vant'
import router from './router'
import store from './store'
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Button)
app.use(Sidebar)
app.use(SidebarItem)

app.mount('#app')
