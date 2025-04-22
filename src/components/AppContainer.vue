<script lang="ts" setup>
defineProps<{
  className?: string
}>()
</script>

<template>
  <section :class="className || 'max-w-7xl mx-auto px-5 sm:px-6 lg:px-8'">
    <slot />
  </section>
</template>

<style scoped></style>
