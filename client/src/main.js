import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';


Vue.use(Element);

import App from './App.vue';
Vue.config.productionTip = false;

locale.use(lang);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
