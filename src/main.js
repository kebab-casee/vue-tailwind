import { createApp } from "vue";

import App from "./App.vue";
import "./style.css";
import ContactUs from "./components/contact-us.vue";
import ButtonCounter from "./components/button-counter.vue";

const app = createApp(App);

app.component("contact-us", ContactUs);
app.component("button-counter", ButtonCounter);

app.mount("#app");
