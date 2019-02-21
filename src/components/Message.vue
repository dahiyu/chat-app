<template>
  <section class="item">
    <div class="item-image"><img :src="image" width="40" height="40"></div>
    <div class="item-detail">
      <div class="item-name">{{ name }}</div>
      <div class="item-message">
        <nl2br tag="div" :text="message"/>
      </div>
    </div>
  </section>
</template>

<script>
// 改行を <br> タグに変換するモジュール
import Nl2br from 'vue-nl2br'

export default {
  components: {
    Nl2br
  },
  name: 'Message',
  props: ['name', 'image', 'message']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.8em;
}
.item-image img {
  border-radius: 20px;
  vertical-align: top;
}
.item-detail {
  margin: 0 0 0 1.4em;
}
.item-name {
  font-size: 75%;
}
.item-message {
  position: relative;
  display: inline-block;
  padding: 0.8em;
  /* background: #deefe8; */
  background: #84e248;
  border-radius: 4px;
  line-height: 1.2em;
}
.item-message::before {
  position: absolute;
  content: " ";
  display: block;
  left: -16px;
  bottom: 12px;
  border: 4px solid transparent;
  /* border-right: 12px solid #deefe8; */
  border-right: 12px solid #84e248;
}
</style>
