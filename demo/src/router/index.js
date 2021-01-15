import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/view/First'
import Second from '@/components/view/Second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/first',
      name: 'First',
      component: First
    },{
      path: '/second',
      name: 'Second',
      component: Second
    }
  ]
})
