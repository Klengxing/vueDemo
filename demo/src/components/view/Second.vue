<template>
  <div class="second">
    <h1>{{ msg }}</h1>
    <p class="link"><router-link to="/first">去第一个页面</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Second',
  data () {
    return {
      msg: 'Welcome to SecondApp'
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.second{
  font-size: 30px;
  .link{
    a{
      color: red;
    }
  }
}
</style>
