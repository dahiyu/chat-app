<template>
  <header class="header">
    <h1>Chat</h1>
    <!-- ログイン時にはフォームとログアウトボタンを表示 -->
    <div v-if="uid" key="login">
      [{{ displayName }}]
      <button type="button" @click="doLogout">ログアウト</button>
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
  background: #3ab383;
  margin-bottom: 1em;
  padding: 0.4em 0.8em;
  color: #fff;
}
</style>
