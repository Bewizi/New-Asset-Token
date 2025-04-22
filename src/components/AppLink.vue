<script lang="ts" setup>
const props = defineProps<{
  to: string
}>()
</script>

<template>
  <router-link :to="props.to">
    <slot></slot>
  </router-link>
</template>

<style scoped></style>
