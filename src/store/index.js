import Vue from 'vue'
import Vuex from 'vuex'
import avatar from './modules/avatar'
import userStore from './modules/userStore'
import translation from './modules/translation'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    avatar,
    userStore,
    translation
  }
})
