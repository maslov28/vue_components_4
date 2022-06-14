<template>
  <button>
    <slot>OK</slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    loading: Boolean
  }
}
</script>

<style>

</style>