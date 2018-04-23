// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import en from '../static/lang/en'
import zhCHS from '../static/lang/zhCHS'
import zhCHT from '../static/lang/zhCHT'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.lang,
  messages:{
    'en': en,
    'zhCHS': zhCHS,
    'zhCHT': zhCHT,
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});



