<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import SelectedCase from '@/pages/home_page/components/SelectedCase.vue'
</script>

<template>
  <AppContainer class="mt-40">
    <section class="border-2 border-[#6C82A3] pt-10">
      <h1
        class="text-center text-[#082552] text-4xl md:text-5xl font-euclid-a-medium mb-10 max-w-2xl mx-auto leading-snug"
      >
        Get Started Now and Own a Piece of Tomorrow
      </h1>

      <img
        alt="A joyful family carrying boxes into their new home"
        src="/images/general/happy-family.png"
      />

      <SelectedCase case="Mine" />
    </section>
  </AppContainer>
</template>

<style scoped></style>
