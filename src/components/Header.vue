<template>
  <header class="header">
    <h1>Chat</h1>
    <!-- ログイン時にはフォームとログアウトボタンを表示 -->
    <div v-if="uid" key="login">
      <!-- [{{ displayName }}] -->
      <div class="icon"><img :src="photoURL" width="40" height="40"></div>
      <button type="button" @click="doLogout" class="logout-button">ログアウト</button>
    </div>
    <!-- 未ログイン時にはログインボタンを表示 -->
    <div v-else key="logout">
      <button type="button" @click="doLogin">ログイン</button>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Header',
  props: ['uid', 'displayName', 'photoURL'],
  methods: {
    // ログイン処理
    doLogin() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider)
    },
    // ログアウト処理
    doLogout() {
      firebase.auth().signOut()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #f5f5f5;
  padding: 0.4em 0.8em;
}
.icon img {
  float: left;
  border-radius: 20px;
  vertical-align: top;
}
.logout-button {
  margin: 7px 0px 0px 10px;
}
</style>
