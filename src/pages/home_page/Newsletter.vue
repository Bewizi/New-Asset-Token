<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import { Button } from '@/components/ui/button'
import AppLink from '@/components/AppLink.vue'
</script>

<template>
  <AppContainer class="mt-40">
    <section class="flex items-center justify-between gap-10">
      <figure class="hidden lg:block">
        <img alt="Mail Box" src="/images/general/mail-box.png" />
      </figure>
      <div class="max-w-2xl mx-auto px-5 md:px-0">
        <h1
          class="text-2xl md:text-4xl font-euclid-a-semibold text-[#082552] leading-normal mb-2 dark:text-white"
        >
          Never Miss a Beat in the World of Tokenized Real Estate
        </h1>
        <p class="text-[#010813CC] mb-10 dark:text-white font-euclid-a-regular">
          Be the first to know about new investment opportunities before they're released to the
          public.
        </p>

        <!-- input -->
        <div
          class="border border-[#01081380] p-2 rounded max-w-xl flex justify-between mb-2 dark:border-white"
        >
          <input
            class="bg-transparent outline-none focus:outline-none border-none"
            placeholder="Enter Email address"
            type="text"
          />
          <span>
            <Button class="text-white hover:bg-[#3A76F5]/85 bg-[#3A76F5]">
              <AppLink to="">Subscribe</AppLink>
            </Button>
          </span>
        </div>
        <p class="text-[#010813CC] dark:text-white font-euclid-a-regular">
          For information on how we process your data, see our
          <AppLink class="text-[#3A76F5]" to=""> Privacy Policy</AppLink>
        </p>
      </div>
    </section>
  </AppContainer>
</template>

<style scoped></style>
