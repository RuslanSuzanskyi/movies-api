<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Container'
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 122rem;
  padding: 0 1rem;
}
</style>