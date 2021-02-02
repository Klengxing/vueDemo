<template>
  <div class="first">
    <h1>{{ msg }}</h1>
    <h2>{{ $store.state.name }}</h2>
    <confirm text="注册" @message="getMeaasge"></confirm>
    <button @click="add()">打印vuex</button>
    <button @click="changeText()">改变文字</button>
    <p>
      <router-link to="/second">去第二个页面</router-link>
    </p>
  </div>
</template>

<script>
import Confirm from '../sub/Confirm'
import {a} from '../../assets/js/util.js'
import mock from '@/assets/js/mock.js'
import { get, post } from '@/assets/js/request'

export default {
  name: 'First',
  components: {
    Confirm
  },
  data() {
    return {
      msg: 'Welcome to FirstApp'
    }
  },
  methods: {
    add() {
      console.log(this.$store.state.name)
    },
    getMeaasge(val) {
      post('/login').then(res=>{
        console.log(res)
      })
      a()
      // alert(val)
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
