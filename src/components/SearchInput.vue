<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      searchQuery: this.modelValue
    };
  },
  watch: {
    searchQuery(newQuery) {
      this.$emit('update:modelValue', newQuery);
    }
  }
});
</script>

<template>
  <input 
    v-model="searchQuery" 
    type="text" 
    placeholder="Search for a movie"
  />
</template>

<style scoped>
input {
  width: 100%;
  padding: 0.8rem;
  border: 0.1rem solid var(--text-color);
  border-radius: 0.4rem;
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>
