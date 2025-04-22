<script lang="ts" setup>
import { Button } from '@/components/ui/button'

defineProps<{
  className?: string
}>()
</script>

<template>
  <Button :class="className || 'bg-[#3A76F5] text-white hover:bg-[#3A76F5CC]/85'">
    <slot />
  </Button>
</template>

<style scoped></style>
