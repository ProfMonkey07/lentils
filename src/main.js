import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
createApp(App).use(router).mount("#app");
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default{
    components: {VueperSlides, VueperSlide}
}