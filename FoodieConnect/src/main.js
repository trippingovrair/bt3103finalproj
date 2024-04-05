import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.mount("#app");

// or:

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router/index.js'

// import './assets/main.css'
// createApp(App).use(router).mount('#app')
