<template>
  <button
    class="font-bold rounded w-full h-10"
    :class="[
      colorConfig[color],
      disabled ? 'cursor-not-allowed bg-gray-500' : 'cursor-pointer',
    ]"
    v-bind="{ ...$props, ...$attrs }"
  >
    <div class="inline-block">{{ text }}</div>
    <slot></slot>
    <BaseLoadingSpinner v-show="isLoading" class="h-4 w-4 mx-4 my-1 absolute" />
  </button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'gray',
    },
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
  },

  data() {
    return {
      colorConfig: {
        gray: 'bg-gray-600 text-white',
        white: 'bg-white-600 text-gray-700 border-2 border-gray-600',
      },
    }
  },
}
</script>
