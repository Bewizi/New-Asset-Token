<script lang="ts" setup>
import { FormControl, FormField, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import AppLink from '@/components/AppLink.vue'

const form = ref({
  email: '',
  password: '',
})

const handleSubmit = () => {
  try {
    console.log('Form Submitted', form.value)
    form.value = {
      email: '',
      password: '',
    }
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <section class="max-w-sm mx-auto mt-40">
    <!--    logo-->
    <div class="flex items-center justify-center">
      <img alt="Auth Image" height="" src="/images/assset-token-logo.png" />
    </div>
    <!--    logo-->
    <form @submit.prevent="handleSubmit">
      <FormField name="email">
        <div>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              id="email"
              v-model="form.email"
              placeholder="Enter your email address"
              type="email"
            />
          </FormControl>
        </div>

        <div>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input
              id="password"
              v-model="form.password"
              placeholder="Enter your password"
              type="password"
            />
          </FormControl>
        </div>
      </FormField>
      <div class="mt-5">
        <Button class="w-full">Login</Button>
      </div>
    </form>

    <!--    -->
    <section class="flex justify-between">
      <div>
        <AppLink to="">Go Back Home</AppLink>
      </div>

      <div>
        <AppLink to="/auth/forgot-password">Forgot Password?</AppLink>
        <br />
        <AppLink to="/auth/register">Don't have an account? Sign Up</AppLink>

        <div class="flex">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
      </div>
    </section>
    <!--    -->
  </section>
  <h1>This is the login page</h1>
</template>

<style scoped></style>
