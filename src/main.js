import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
Vue.config.productionTip = false



//自定义指令
Vue.directive("rainbow", {
  bind(el){
    el.style.color = "#" + Math.random().toString(16).slice(2, 8);   
  }
})
Vue.directive("theme", {
  bind(el, binding){
    if(binding.value == "wide"){
      el.style.maxWidth = "1260px";
      
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = '560px';
    }

    if(binding.arg == 'column'){
      el.style.background = '#6677cc';
      el.style.padding = '20px'
    }
  }
})

//自定义过滤器
Vue.filter('to-uppercase', value=>{
  return value.toUpperCase();
})

Vue.filter('roughly', value=>{
  return value.slice(0,90) + '...';
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
