<script lang="ts">
import Container from '@/components/Container.vue';
import RegistarionForm from '@/components/RegistarionForm.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Registration',
  components: {
    Container,
    RegistarionForm
  }
});
</script>

<template>
  <Container>
    <div class="form-wrapper">
      <RegistarionForm />
    </div>
  </Container>
</template>

<style scoped>
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
