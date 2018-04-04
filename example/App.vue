<template>
  <div>
    <!-- App -->
    <button v-loading-click="clickTest">
      Test
    </button>
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    clickTest() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 5000)
      })
    }
  }
}
</script>
