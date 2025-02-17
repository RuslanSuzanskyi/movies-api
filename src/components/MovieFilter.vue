<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MovieFilter',
  props: {
    modelValue: {
      type: String,
      default: 'all'
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      selectedFilter: this.modelValue
    };
  },
  watch: {
    selectedFilter(newFilter) {
      this.$emit('update:modelValue', newFilter);
    }
  }
});
</script>

<template>
  <select v-model="selectedFilter">
    <option value="all">All</option>
    <option value="popular">Popular</option>
    <option value="now_playing">Now Playing</option>
    <option value="top_rated">Top Rated</option>
    <option value="upcoming">Upcoming</option>
  </select>
</template>

<style scoped>
select {
  padding: 0.8rem;
  border: 0.1rem solid var(--text-color);
  background-color: var(--background-color);
  color: var(--text-color);
  border-radius: 4px;
}

option {
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>
