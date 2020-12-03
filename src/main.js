import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import './styles/global.scss';
import router from './router';
import VueInputeFacade from 'vue-input-facade';

Vue.use(VueInputeFacade);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
