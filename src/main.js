import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAfhutSoE3QCdZkNvRpUe5vgA2w76vmwdA",
  authDomain: "chat-app-315e3.firebaseapp.com",
  databaseURL: "https://chat-app-315e3.firebaseio.com",
  projectId: "chat-app-315e3",
  storageBucket: "chat-app-315e3.appspot.com",
  messagingSenderId: "388255354019"
};
firebase.initializeApp(config);

new Vue({
  render: h => h(App),
}).$mount('#app')
