import Vue from 'vue'
import Router from 'vue-router'
import Setting from '@/components/Setting'
import Mirror from '@/components/Mirror'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/Mirror',
      name: "Mirror",
      component: Mirror,
    }
  ]
})
