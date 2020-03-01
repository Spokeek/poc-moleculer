import Vue from "vue";
//import { createProvider } from "./vue-apollo";
import router from "./router";

import Root from "./Root.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
    // apolloProvider: createProvider(),
    router,
    vuetify,
    render: h => h(Root)
}).$mount("#app");