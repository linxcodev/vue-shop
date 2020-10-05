import Vue from 'vue';
import Axios from 'axios';

Vue.prototype.axios = Axios;

Axios.defaults.baseURL = process.env.VUE_APP_API_URL
