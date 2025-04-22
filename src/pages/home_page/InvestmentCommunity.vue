<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import { Button } from '@/components/ui/button'
import AppLink from '@/components/AppLink.vue'
</script>

<template>
  <AppContainer class="mt-40">
    <div class="flex flex-wrap md:flex-nowrap min-h-[50vh]">
      <section class="bg-[#3A76F5] md:p-24 rounded-tl-md">
        <div class="pt-14 text-white text-center pb-14 md:text-start lg:pb-0">
          <h1 class="lg:max-w-7xl text-4xl md:text-6xl font-euclid-a-medium leading-normal mb-5">
            Join The Housing Revolution Today!
          </h1>
          <p class="lg:max-w-md leading-normal mb-10 font-euclid-a-regular">
            Join our investor community and stay engaged with discussions, updates, and insights
            about the real estate market and tokenization trends.
          </p>
          <Button
            class="bg-transparent hover:bg-transparent font-euclid-a-medium py-2 px-4 border border-white md:text-2xl lg:text-base"
          >
            <AppLink to="">Join Community</AppLink>
          </Button>
        </div>
      </section>
      <section class="bg-[#EBF1FE] p-24 rounded-br-md hidden lg:block">
        <div class="max-w-2xl">
          <div class="grid grid-cols-2 gap-4">
            <img
              alt="Three individuals standing side by side"
              class="bg-white p-2 rounded-lg shadow-lg"
              src="/images/general/Trio%20in%20Suits.png"
            />
            <img
              alt="Two professionals standing confidently in front of a staircase"
              class="bg-white p-2 rounded-lg shadow-lg -mt-5"
              src="/images/general/Professional%20Partnership.png"
            />
            <img
              alt="Three individuals in business attire standing confidently on outdoor steps of a building"
              class="bg-white p-2 w-48 h-48 rounded-lg shadow-lg col-span-2 justify-self-center"
              src="/images/general/Business%20Trio%20on%20Steps.png"
            />
          </div>
        </div>
      </section>
    </div>
  </AppContainer>
</template>

<style scoped></style>
