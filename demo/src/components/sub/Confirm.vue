<template>
  <div class="confirm-button">
    <h1>{{ msg }}</h1>
    <button @click="getButtonClick">{{text || '确认'}}</button>
    <button @click="reloadMy">刷新我自己</button>
  </div>
</template>

<script>
    export default {
        name: 'confirm-button',
        props: ["text"],
        data() {
            return {
                msg: '我是子页面',
                msg2: '我是子页面2号',
            }
        },
        methods: {
            getButtonClick() {
                this.$emit("message", this.msg)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
