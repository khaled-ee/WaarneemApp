export const state = () => ({
  shifts: [],
  isShiftFormVisible: false,
})

export const mutations = {
  addShift(state, shift) {
    state.shifts.push(shift)
  },
  editShift(state, shiftData) {
    state.shifts[shiftData.shiftIndex] = shiftData.shift
  },
  deleteShift(state, shiftIndex) {
    state.shifts.splice(shiftIndex, 1)
    state.isShiftFormVisible = false
  },
  closeShiftForm(state) {
    state.isShiftFormVisible = false
  },
  openShiftForm(state) {
    state.isShiftFormVisible = true
  },
}

export const getters = {
  savedShifts: (state) => state.shifts,
  isShiftFormVisible: (state) => state.isShiftFormVisible,
}
