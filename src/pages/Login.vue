<script lang="ts" setup>
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import AppLink from '@/components/AppLink.vue'
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-vue-next'
import { Label } from '@/components/ui/label'

const showPassword = ref<boolean>(true)

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
    <div class="flex items-center justify-center mb-10">
      <img alt="Auth Image" height="" src="/images/assset-token-logo.png" />
    </div>
    <!--    logo-->
    <form @submit.prevent="handleSubmit">
      <div>
        <label class="text-[#6C82A3] font-euclid-a-regular">Email</label>
        <div class="relative">
          <Mail class="absolute top-[12px] left-3 text-[#6C82A3]" />
          <Input
            id="email"
            v-model="form.email"
            class="placeholder:text-[#6C82A3] font-euclid-a-regular pl-14 py-6"
            placeholder="Enter your email address"
            type="email"
          />
        </div>
      </div>

      <div class="mt-5">
        <label class="text-[#6C82A3] font-euclid-a-regular">Password</label>
        <div class="relative">
          <LockKeyhole class="text-[#6C82A3] absolute top-[12px] left-3" />
          <Input
            id="password"
            v-model="form.password"
            :type="showPassword ? 'password' : 'text'"
            class="placeholder:text-[#6C82A3] font-euclid-a-regular pl-14 py-6"
            placeholder="Enter your password"
          />
          <button
            class="absolute top-[12px] right-3 cursor-pointer"
            type="button"
            @click="showPassword = !showPassword"
          >
            <Component :is="showPassword ? EyeOff : Eye" class="text-[#6C82A3]" />
          </button>
        </div>
      </div>

      <div class="mt-5">
        <Button
          class="w-full bg-[#8DB0F9] hover:bg-[#3A76F5] transition-all duration-300 font-euclid-a-regular"
          >Login
        </Button>
      </div>
    </form>

    <!--    -->
    <section class="flex justify-between mt-3.5">
      <div>
        <AppLink class="text-[#082552] font-euclid-a-regular text-sm" to="/">Go Back Home</AppLink>
        <br />
        <AppLink class="text-[#082552] font-euclid-a-regular text-sm" to="/auth/register"
          >Don't have an account? Sign Up
        </AppLink>
      </div>

      <div>
        <AppLink class="text-[#082552] font-euclid-a-regular text-sm" to="/auth/forgot-password"
          >Forgot Password?
        </AppLink>
        <br />

        <div class="flex mt-2 gap-2">
          <input type="checkbox" />
          <p class="text-[#082552] font-euclid-a-regular text-sm">Remember me</p>
        </div>
      </div>
    </section>
    <!--    -->
  </section>
</template>

<style scoped></style>
