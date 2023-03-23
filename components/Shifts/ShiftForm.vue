<template>
  <form @submit.prevent="saveShift">
    <div class="min-h-screen flex flex-col bg-white py-12 px-4">
      <BaseAppTitle required>{{ shift ? 'Edit' : 'Create' }} </BaseAppTitle>
      <BaseAppInput v-model="shiftForm.title" required label="Title" />
      <BaseAppTextArea
        v-model="shiftForm.description"
        required
        label="Description"
      />
      <BaseAppDatePicker
        class="mt-8"
        label="Dates"
        :required="shift ? false : true"
        @input="addShiftDate"
      />

      <div
        v-for="(date, dateI) in shiftForm.dates
          ? shiftForm.dates.slice().reverse()
          : shiftForm.dates"
        :key="dateI"
        class="flex flex-col p-1 my-4"
      >
        <p class="text-start font-bold">
          {{ date.date }}
        </p>
        <div class="flex flex-col bg-gray-600 p-1 mt-1">
          <div class="flex">
            <div class="flex flex-col w-1/3 mx-1">
              <label class="text-sm leading-4 text-start mt-2 text-white">
                Start Time
              </label>
              <BaseAppDatePicker
                v-model="shiftForm.dates[dateI].startTime"
                required
                mode="time"
              />
            </div>
            <div class="flex flex-col w-1/3 mx-1">
              <label class="text-sm leading-4 text-start mt-2 text-white">
                End Time
              </label>
              <BaseAppDatePicker
                v-model="shiftForm.dates[dateI].endTime"
                required
                mode="time"
                :error="
                  shiftForm.dates[dateI].endTime <
                  shiftForm.dates[dateI].startTime
                    ? 'End Time Greater Than Start Time'
                    : ''
                "
              />
            </div>
            <div class="flex flex-col w-1/3 mx-1">
              <label class="text-sm leading-4 text-start mt-2 text-white"
                >Price
              </label>
              <BaseAppInput v-model="shiftForm.dates[dateI].price" required />
            </div>
          </div>
          <label class="text-sm leading-4 text-start my-2 text-white"
            >Type
          </label>
          <BaseAppSelect
            v-model="shiftForm.dates[dateI].type"
            required
            class="mb-2"
            :options="['Consultation', 'Telephone', 'Ambulance']"
          />
        </div>
      </div>

      <div class="flex mt-auto space-x-2">
        <BaseAppButton
          v-if="shift"
          color="white"
          type="button"
          @click.native="$store.commit('shifts/deleteShift', shiftIndex)"
          >Delete</BaseAppButton
        >
        <BaseAppButton type="submit">Save</BaseAppButton>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    shiftIndex: {
      type: Number,
      default: () => null,
    },
    shift: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      shiftForm: {
        title: '',
        description: '',
        dates: [],
      },
    }
  },
  watch: {
    shift() {
      if (this.shift) {
        this.shiftForm = JSON.parse(JSON.stringify(this.shift))
      } else {
        this.clearShift()
      }
    },
  },
  mounted() {
    if (this.shift) {
      this.shiftForm = JSON.parse(JSON.stringify(this.shift))
    }
  },

  methods: {
    saveShift() {
      if (this.shift) {
        this.$store.commit('shifts/editShift', {
          shift: this.shiftForm,
          shiftIndex: this.shiftIndex,
        })
      } else {
        this.$store.commit('shifts/addShift', this.shiftForm)
      }
      this.clearShift()
      this.$store.commit('shifts/closeShiftForm')
    },
    clearShift() {
      this.shiftForm = {
        title: '',
        description: '',
        dates: [],
      }
    },
    addShiftDate(date) {
      if (!date) {
        return
      }
      this.shiftForm.dates.push({
        date,
        startTime: '',
        endTime: '',
        price: 0,
        type: '',
      })
    },
  },
}
</script>
