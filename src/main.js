import Vue from 'vue'
import App from './App.vue'

//store.js에서 export한 변수 사용 가능..
import {store} from './store/store' 

Vue.config.productionTip = false

new Vue({
  //향상된 객체 리터럴 ( 모두 같은 이름 사용하기 때문에) + 라우터도 마찬가지로 등록 가능 
  store,
  render: h => h(App),
}).$mount('#app')
