<template>
  <div :class="computedClasses">
    <label
      v-if="label"
      class="input-group__label text-sm leading-4 text-start mt-2"
      :for="computedId"
    >
      {{ label }}
    </label>
    <div class="relative">
      <textarea
        :id="computedId"
        v-model="localValue"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        class="input-group__input px-3 py-2 outline-none border-gray-700 text-left mt-2"
        :class="[error && 'error']"
        :required="required"
        v-bind="{ ...$props, ...$attrs }"
      />
      <slot></slot>
    </div>

    <p v-if="error" class="text-xs text-red-500">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    rules: {
      type: [String, Object],
      default: () => '',
    },
    required: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    computedClasses() {
      return ['input-group', `input-group--${this.type}`]
    },
    computedId() {
      if (this.id) return this.id
      return `${this.type}-${this.name}`
    },
    localValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style lang="sass" scoped>
.error
  border-color: theme('colors.red.300') !important
.input-group
  @apply text-gray-500 text-xs
  display: flex
  flex-direction: column
  width: 100%
  &__input
    width: stretch
    @apply border box-content rounded
</style>
