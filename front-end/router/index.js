import Vue from 'vue'
import VueRouter from 'vue-router'

import AllCodes from '@/components/CodeComponents/Allcodes'
import SearchCode from '@/components/CodeComponents/Searchcode'
import AddCode from '@/components/CodeComponents/Addcode'
import DeleteCode from '@/components/CodeComponents/Deletecode'
import UpdateCode from '@/components/CodeComponents/Updatecode'
import SearchValueSet from '@/components/ValuesetComponents/SearchValueSet'
import FindCodesFromValueSet from '@/components/ValuesetComponents/FindCodesFromValueSet'
import AddValueSet from '@/components/ValuesetComponents/AddValueSet'

Vue.use(VueRouter)

const routes = [
  {
    path: '/allcodes',
    name: 'AllCodes',
    component: AllCodes
  },
  {
    path: '/searchcode',
    name: 'SearchCode',
    component: SearchCode
  },
  {
    path: '/addcode',
    name: 'AddCode',
    component: AddCode
  },
  {
    path: '/deletecode',
    name: 'RemoveCode',
    component: DeleteCode
  },
  {
    path: '/updatecode',
    name: 'UpdateCode',
    component: UpdateCode
  },
  {
    path: '/SearchValueSet',
    name: 'SearchValueSet',
    component: SearchValueSet
  },
  {
    path: '/FindCodesFromValueSet',
    name: 'FindCodesFromValueSet',
    component: FindCodesFromValueSet
  },
  {
    path: '/AddValueSet',
    name: 'AddValueSet',
    component: AddValueSet
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
