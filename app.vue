<script setup lang="ts">
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <div id="app" class="font-sans overflow-x-hidden min-h-screen flex flex-col">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
