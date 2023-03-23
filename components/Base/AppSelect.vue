<template>
  <div>
    <label class="typo__label text-start"></label>
    <multiselect
      v-model="localValue"
      :allow-empty="false"
      :options="options"
    ></multiselect>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(value) {
        if (value) {
          this.$emit('input', value)
        } else {
          this.$emit('input', this.options[0])
        }
      },
    },
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
