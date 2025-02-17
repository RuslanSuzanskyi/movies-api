<template>
  <div class="layout">
    <Header />
    <main>
      <Container>
        <RouterView />  
      </Container>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Container from '@/components/Container.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'Layout',
  components: {
    Header,
    RouterView,
    Footer,
    Container
  }
})
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>

