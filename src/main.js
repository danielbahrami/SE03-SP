import Vue from "vue";
import router from "@/router";
import App from "@/App";

Vue.config.productionTip = false;

import Modal from "@burhanahmeed/vue-modal-2";

Vue.use(Modal, {
  componentName: "ModalVue",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
