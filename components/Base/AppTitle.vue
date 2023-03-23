<template>
  <h3
    class="text-gray-700 py-1 text-3xl font-bold flex justify-between"
    :class="{
      'underline decoration-4 decoration-red-400': underline,
      'font-normal': thin,
      'text-2xl': small,
    }"
  >
    {{ text }}
    <slot></slot>
  </h3>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    underline: {
      type: Boolean,
      default: false,
    },
    thin: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {}
  },
}
</script>
