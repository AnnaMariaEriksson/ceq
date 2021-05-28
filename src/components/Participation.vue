<template>
  <div>
    <section class="participation">
      <b-form-group label="Ungefär hur stor andel av undervisningen har du deltagit i?">
        <b-form-radio-group name="naervaro" stacked align="start" :options="participation"/>
      </b-form-group>
    </section>
  </div>
</template>

<script>
import { participation } from '@/List'

export default {
  name: 'Participation',
  props: {},
  data () {
    return {}
  },
  created () {
  },
  computed: {
    participation () {
      return participation
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>

</style>
