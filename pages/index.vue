<template>
  <div class="h-screen">
    <div class="flex text-center w-full">
      <div class="w-1/2 ml-auto">
        <div class="mt-4 mb-16">
          <BaseAppTitle underline> Filter </BaseAppTitle>
        </div>
        <div class="flex justify-between my-6">
          <BaseAppTitle underline> Shifts </BaseAppTitle>
          <div class="w-36">
            <BaseAppButton @click.native="openCreatShift"
              >Add Shift</BaseAppButton
            >
          </div>
        </div>
        <div class="h-[80vh] whitespace-nowrap overflow-y-auto no-scrollbar">
          <div
            v-for="(shift, shiftI) in $store.getters['shifts/savedShifts']"
            :key="shiftI"
          >
            <ShiftsCardElement
              :shift="shift"
              @editShift="openEditShiftForm($event, shiftI)"
            />
          </div>
        </div>
      </div>
      <div class="w-1/4 m-8">
        <ShiftsShiftForm
          v-if="$store.getters['shifts/isShiftFormVisible']"
          :shift="editShiftFormObject"
          :shift-index="shiftIndex"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: function () {
    return {
      editShiftFormObject: null,
      shiftIndex: null,
    }
  },

  methods: {
    openEditShiftForm(shift, shiftIndex) {
      this.editShiftFormObject = shift
      this.shiftIndex = shiftIndex
      this.$store.commit('shifts/openShiftForm')
    },
    openCreatShift() {
      this.editShiftFormObject = null
      this.shiftIndex = null
      this.$store.commit('shifts/openShiftForm')
    },
  },
}
</script>
