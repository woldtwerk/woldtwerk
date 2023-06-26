<script setup lang="ts">
import { describe } from 'node:test'

interface Props {
  to: string
  title: string
  icon: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="to" target="_blank" class="grid grid-cols-[4rem_1fr] items-center decoration-none p-4 hover:bg-opacity-10 hover:bg-base-content not-prose">
    <i :class="icon" class="text-3xl justify-self-center" />
    <div>
      <div class="text-lg">
        {{ title }}
      </div>
      <div class="text-sm [&>p]:my-0">
        <slot />
      </div>
    </div>
  </NuxtLink>
</template>
