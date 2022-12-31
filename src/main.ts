import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
const el = document.createElement("div");
el.setAttribute("id", "chu2track");
document.body.append(el);
app.mount("#chu2track");
