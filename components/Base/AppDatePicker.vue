<template>
  <div class="relative">
    <label
      :for="label"
      class="block leading-[18px] text-sm font-medium text-gray-700 text-start my-2"
    >
      {{ label }}
    </label>

    <client-only>
      <v-date-picker
        v-model="date"
        :mode="mode"
        :model-config="mode === 'date' ? modelConfig : timeModelConfig"
      >
        <template #default="{ inputValue, inputEvents }">
          <input
            :required="required"
            class="w-full bg-white border px-2 py-1 rounded border-gray-700"
            :value="inputValue"
            v-on="inputEvents"
          />
        </template>
      </v-date-picker>
      <p v-if="error" class="text-xs text-red-500 mt-1">
        {{ error }}
      </p>
    </client-only>
  </div>
</template>
<script>
export default {
  props: {
    required: {
      type: Boolean,
      default: () => false,
    },
    label: {
      type: String,
      default: () => '',
    },

    placeholder: {
      type: String,
      default: () => '',
    },
    rules: {
      type: String,
      default: () => '',
    },
    value: {
      type: String,
      default: () => '',
    },
    mode: {
      type: String,
      default: () => 'date',
    },
    error: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      modelConfig: {
        type: 'string',
        mask: 'DD-MM-YYYY', // Uses 'iso' if missing
      },
      timeModelConfig: {
        type: 'string',
        mask: 'h:mm A',
      },
    }
  },

  computed: {
    date: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  watch: {
    date() {
      this.$emit('input', this.date)
    },
  },
  created() {
    this.date = this.value
  },
}
</script>
