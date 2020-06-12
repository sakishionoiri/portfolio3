import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
const config = {
  apiKey: 'AIzaSyAlvxrEzEtATaUlfgZ5K3y5CP8K6qggoS8',
  projectId: 'test-2cd33',
  authDomain: 'test-2cd33.firebaseapp.com',
  databaseURL: 'https://test-2cd33.firebaseio.com',
  storageBucket: 'test-2cd33.appspot.com',
}

firebase.initializeApp(config);

export default firebase;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
