<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'SizeDetector',
  data () {
    return {
      currentSize: ''
    }
  },
  methods: {
    getSize () {
      const w = document.documentElement.clientWidth
      if (w >= 1200) { return 'xl' }
      if (w >= 992) { return 'lg' }
      if (w >= 768) { return 'md' }
      if (w >= 576) { return 'sm' }
      return 'xs'
    },
    onResize () {
      const size = this.getSize()
      if (size !== this.currentSize) {
        this.currentSize = size
        this.$emit('resized', size)
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  activated () {
    window.addEventListener('resize', this.onResize)
  },
  deactivated () {
    window.removeEventListener('resize', this.onResize)
  },
  destroyed () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>
