<template>
  <div
    class="py-2 px-6 rounded-md my-4 bg-gray-600 text-white flex justify-between"
  >
    <p>{{ date.date }}</p>
    <p>{{ date.startTime }}</p>
    <p>{{ date.endTime }}</p>
    <p>{{ date.type }}</p>

    <p class="w-1/4">test</p>

    <p>€ {{ date.price }}</p>
  </div>
</template>
<script>
export default {
  props: {
    date: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
