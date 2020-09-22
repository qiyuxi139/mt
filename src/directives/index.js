import Vue from 'vue'

Vue.directive('document-click', {
  bind (el, binding) {
    document.addEventListener('click', binding.value, false)
  }
})
