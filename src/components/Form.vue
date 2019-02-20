<template>
  <form action="" @submit.prevent="doSend" class="form">
    <textarea v-model="input" :disabled="!uid" @keydown.enter.exact.prevent="doSend"></textarea>
    <button type="submit" :disabled="!uid" class="send-button">Send</button>
  </form>
</template>

<script>
// firebase モジュール
import firebase from 'firebase'
export default {
  name: 'Form',
  props: ['uid', 'displayName', 'photoURL'],
  data() {
    return {
      input: '' // 入力したメッセージ
    }
  },
  methods: {
    doSend: function() {
      if (this.uid && this.input.length) {
        // firebase にメッセージを追加
        firebase.database().ref('message').push({
          message: this.input,
          name: this.displayName,
          image: this.photoURL
        }, () => {
          this.input = ''
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  height: 80px;
  width: 100%;
  background: #f5f5f5;
}
.form textarea {
  border: 1px solid #ccc;
  border-radius: 2px;
  height: 4em;
  width: calc(100% - 6em);
  resize: none;
}
.send-button {
  height: 4em;
}
</style>
