<template>
  <header class="header">
    <Container>
      <nav class="menu">
        <h1>
          <router-link to="/">
            Movies
          </router-link>
        </h1>
        <button @click="toggleTheme" class="theme-toggle-btn">
          {{ isDarkMode ? '☀️' : '🌙' }}
        </button>  
      </nav>
    </Container>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from './Container.vue';

export default defineComponent({
  name: 'Header',
  components: { Container },
  data() {
    return {
      isDarkMode: localStorage.getItem('theme') === 'dark',
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    },
  },
  mounted() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  },
});
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 6.4rem;
  background-color: var(--background-color);
  transition: background-color 0.3s ease-in-out;
  z-index: 100;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.4rem;
}

.theme-toggle-btn {
  border: none;
  font-size: 20px;
  background: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.theme-toggle-btn:hover {
  transform: scale(1.1);
}
</style>
