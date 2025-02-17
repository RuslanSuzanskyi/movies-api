<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'SearchInput',
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const searchQuery = ref(props.modelValue || '');

    watch(searchQuery, (newQuery) => {
      emit('update:modelValue', newQuery);
    });

    return { searchQuery };
  },
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
