<template>
  <section class="Spinner"></section>
</template>

<script>
export default {
  name: 'LoadingSpinner',
}
</script>

<style lang="scss" scoped>
.Spinner {
  display: inline-block;
  border-radius: 2em;
  border-color: transparent transparent currentColor currentColor;
  border-style: solid;
  border-width: 0.15em;
  animation: spinner-rotation 0.75s infinite;
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

@keyframes spinner-rotation {
  to {
    transform: rotate(360deg);
  }
}
</style>
