import Vue from "vue"
import App from "./App"

import LoadingClick from "../dist/index"
import "../dist/base.css"

Vue.use(LoadingClick)

new Vue({
  el: "#app",
  components: {
    App
  },
  template: "<App/>"
})
