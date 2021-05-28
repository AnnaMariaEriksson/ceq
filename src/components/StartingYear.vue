<template>
  <div>
    <section class="StartingYear">
      <b-form-group label="År du började">
        <b-form-radio-group name="antaar" :options="startingYear"/>
      </b-form-group>
    </section>
  </div>
</template>

<script>
import { startingYear } from '@/List'

export default {
  name: 'StartingYear',
  props: {},
  data () {
    return {}
  },
  created () {
  },
  computed: {
    startingYear () {
      return startingYear
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>

</style>
