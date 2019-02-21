<template>
  <div id="app">
    <Header v-bind="user"></Header>
    <!--　Firebase から取得したリストを描画（トランジション付き）　-->
    <transition-group v-if="user.uid" name="chat" tag="div" class="list content">
      <Message v-for="c in chat" v-bind="c" v-bind:key="c.key"></Message>
    </transition-group>
    <!-- 入力フォーム -->
    <Form v-if="user.uid" v-bind="user"></Form>
  </div>
</template>

<script>
import firebase from 'firebase'
import Header from './components/Header.vue'
import Message from './components/Message.vue'
import Form from './components/Form.vue'
export default {
  components: {
    Header,
    Message,
    Form
  },
  data() {
    return {
      user: {},  // ユーザー情報
      chat: [],  // 取得したメッセージを入れる配列
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {}
      const ref_message = firebase.database().ref('message')
      if (user) {
        this.chat = []
        // message に変更があったときのハンドラを登録
        ref_message.limitToLast(10).on('child_added', this.childAdded)
      } else {
        // message に変更があったときのハンドラを解除
        ref_message.limitToLast(10).off('child_added', this.childAdded)
      }
    })
  },
  methods: {
    // スクロール位置を一番下に移動
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight)
      })
    },
    // 受け取ったメッセージをchatに追加
    // データベースに新しい要素が追加されると随時呼び出される
    childAdded(snap) {
      const message = snap.val()
      this.chat.push({
        key: snap.key,
        name: message.name,
        image: message.image,
        message: message.message
      })
      this.scrollBottom()
    }
  }
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
.content {
  margin: 0 auto;
  padding: 10px 10px;
  max-width: 600px;
  background-color: #7193c1;
}
.list {
  margin-bottom: 80px;
}
/* トランジション用スタイル */
.chat-enter-active {
  transition: all 1s;
}
.chat-enter {
  opacity: 0;
  transform: translateX(-1em);
}
</style>
