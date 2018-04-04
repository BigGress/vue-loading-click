import makeDir from "./loadingClick";

export default {
  install(Vue, config) {
    Vue.directive('loadingClick', makeDir(config))
  }
}