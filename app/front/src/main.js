import Vue from "vue";
//import { createProvider } from "./vue-apollo";
import router from "./router";

import Root from "./Root.vue";

Vue.config.productionTip = false;

new Vue({
    // apolloProvider: createProvider(),
    router,
    render: h => h(Root)
}).$mount("#app");