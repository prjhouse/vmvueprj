import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    page:"page1"
  },
  mutations: {
      changpage(str){
         this.page = str
      }
  }
})

export default store;