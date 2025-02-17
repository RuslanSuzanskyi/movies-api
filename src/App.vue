<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  mounted() {
    const user = localStorage.getItem('user');
    if (!user) {
      this.$router.push('/registration');
    } else {
      this.$router.push('/');
    }
  }
});
</script>

<template>
  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback>
      <div class="loading"></div>
    </template>
  </Suspense>
</template>

<style scoped>
</style>
