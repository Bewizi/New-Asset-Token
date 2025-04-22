<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import { ref } from 'vue'

const blogData = ref([
  {
    title: "Understanding Tokenized Real Estate Investments: A Beginner's Guide",
    image: '/images/blogs/Focused Student.png',
    altText: 'Focused Student',
  },
  {
    title: 'Evaluating the Potential Returns of Tokenized Real Estate Investments',
    image: '/images/blogs/Virtual Reality Exploration.png',
    altText: 'Virtual Reality Exploration',
  },
  {
    title: 'The Role of Smart Contracts in Tokenized Real Estate Investments',
    image: '/images/blogs/Contemporary Study.png',
    altText: 'Contemporary Study',
  },
  {
    title: 'Analyzing Market Trends for Tokenized Real Estate Investments',
    image: '/images/blogs/Upward Trend.png',
    altText: 'Upward Trend',
  },
])
</script>

<template>
  <AppContainer class="mt-40">
    <div>
      <h2 class="text-[#082552] font-semibold text-2xl lg:text-4xl mb-5">Featured Blogs</h2>
    </div>
    <section class="flex flex-col items-center gap-5 md:flex-row lg:flex-row">
      <div v-for="(blogs, index) in blogData" :key="index">
        <figure class="mb-2">
          <img :alt="blogs.altText" :src="blogs.image" loading="lazy" />
        </figure>
        <p class="text-[#082552]font-semibold leading-normal text-sm lg:text-lg">
          {{ blogs.title }}
        </p>
      </div>
    </section>
  </AppContainer>
</template>

<style scoped></style>
