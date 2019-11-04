import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { AppRouter } from "./route-init"

Vue.config.productionTip = false


new Vue({ 
  vuetify, 

  render: (h) => h(App), router: AppRouter 

}).$mount("#app");


/*new Vue({
  vuetify,

  render: function(gimme_a_component) {
    return gimme_a_component(App);
  }
}).$mount("#app");*/