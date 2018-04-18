// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});


