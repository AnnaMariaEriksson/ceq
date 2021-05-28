<template>
<div>
  <p class="text-center">Välj ditt program i listan nedan:</p>
<b-form-select :options="programmes" v-model="selected" name="program"></b-form-select>
</div>
</template>

<script>
import { programmes } from '../List'
export default {
  name: 'Programs',
  data () {
    return {
      selected: null
    }
  },
  computed: {
    programmes () {
      return programmes
    }
  }
}
</script>

<style scoped>

</style>
