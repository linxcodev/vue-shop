import Vue from 'vue'

const Helper = {
  install(Vue) {
    Vue.prototype.appName = process.env.VUE_APP_NAME
    Vue.prototype.getImage = function (image) {
      return process.env.VUE_APP_BACKEND_URL + "/storage/" + image
    }
  }
}

Vue.use(Helper)
