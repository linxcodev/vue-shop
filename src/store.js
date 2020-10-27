import Vue from 'vue'
import Vuex from 'vuex'
import cart from './stores/cart'

Vue.use(Vuex)

export default new Vuex.Store({
 state: {

 },
 mutations: {
 },
 actions: {
 },
 getters: {
 },
 modules: {
   cart, // <= deklarasikan pada modules
 }
})
