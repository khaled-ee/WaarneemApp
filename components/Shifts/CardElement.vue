<template>
  <div class="bg-white mb-8 shadow-xl rounded-lg py-5 px-8">
    <div class="flex justify-between">
      <BaseAppTitle> {{ shift.title }} </BaseAppTitle>
      <i
        class="fa-solid fa-pen p-4 cursor-pointer"
        @click="$emit('editShift', shift)"
      ></i>
    </div>
    <BaseAppTitle thin small>{{ shift.description }} </BaseAppTitle>
    <BaseAppTitle class="mt-4"> Dates </BaseAppTitle>
    <div v-for="(date, dateI) in shift.dates" :key="dateI">
      <ShiftsListItem :date="date" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    shift: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
