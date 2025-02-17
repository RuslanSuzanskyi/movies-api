<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" @blur="validateField('username')" required>
      <span v-if="errors.username" class="error">{{ errors.username }}</span>
    </div>
    
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="validateField('email')" required />
      <span v-if="errors.email" class="error">{{ errors.email }}</span>
    </div>
    
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" @blur="validateField('password')" required />
      <span v-if="errors.password" class="error">{{ errors.password }}</span>
    </div>
    
    <button type="submit">Registration</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegistrationForm',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      errors: {
        username: '',
        email: '',
        password: '',
      }
    };
  },
  methods: {
    validateField(field: string) {
      if (field === 'username') {
        this.errors.username = this.username.length < 3 ? 'Username must be at least 3 characters' : '';
      } else if (field === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.errors.email = !emailRegex.test(this.email) ? 'Invalid email format' : '';
      } else if (field === 'password') {
        this.errors.password = this.password.length < 6 ? 'Password must be at least 6 characters' : '';
      }
    },
    validateForm() {
      this.validateField('username');
      this.validateField('email');
      this.validateField('password');
      return !this.errors.username && !this.errors.email && !this.errors.password;
    },
    handleSubmit() {
      if (this.validateForm()) {
        localStorage.setItem('user', JSON.stringify({
          username: this.username,
          email: this.email
        }));
        this.$router.push('/');
      } else {
        alert('Please correct errors before submitting');
      }
    }
  }
});
</script>

<style scoped>
form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--background-color);
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.1);
  font-family: var(--font-family);
  transition: all 0.3s ease-in-out;
}

div {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

input {
  padding: 1rem;
  border: 0.1rem solid var(--black-color);
  border-radius: 4px;
  font-size: 1.6rem;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: var(--link-color);
}

.error {
  color: red;
  font-size: 1.4rem;
  margin-top: 4px;
}

button {
  padding: 1.6rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--white-color);
  background-color: var(--link-color);
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

button:hover {
  background-color: #285f5a;
}

@media (max-width: 768px) {
  form {
    width: 100%;
    padding: 1.5rem;
    gap: 1rem;
  }

  label {
    font-size: 1.4rem;
  }

  input {
    padding: 8px;
    font-size: 1.4rem;
  }

  button {
    font-size: 1.6rem;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  form {
    padding: 1rem;
    border-radius: 6px;
  }

  label {
    font-size: 1.3rem;
  }

  input {
    font-size: 1.3rem;
    padding: 7px;
  }

  button {
    font-size: 1.5rem;
    padding: 8px;
  }
}
</style>
