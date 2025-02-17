<script lang="ts">
import { defineComponent } from 'vue';
import SearchInput from './SearchInput.vue';
import MovieFilter from './MovieFilter.vue';

export default defineComponent({
  name: 'SearchFilter',
  components: { SearchInput, MovieFilter },
  props: {
    query: String,
    filter: String,
  },
  emits: ['update:query', 'update:filter'],
});
</script>

<template>
  <div class="search-filter">
    <SearchInput :modelValue="query" @update:modelValue="$emit('update:query', $event)" />
    <MovieFilter :modelValue="filter" @update:modelValue="$emit('update:filter', $event)" />
  </div>
</template>

<style scoped>
.search-filter {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
</style>
