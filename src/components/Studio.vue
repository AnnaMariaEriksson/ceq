<template>
  <div>
    <section class="studio">
      <b-form-group label="Atelje (endast A-prog)">
        <b-radio-group name="atelje" :options="studio"/>
      </b-form-group>
    </section>
  </div>
</template>

<script>
import { studio } from '@/List'

export default {
  name: 'Studio',
  props: {},
  data () {
    return {}
  },
  created () {
  },
  computed: {
    studio () {
      return studio
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>

</style>
