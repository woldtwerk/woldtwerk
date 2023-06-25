<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const open = ref(false)
const bp = useBreakpoints(breakpointsTailwind)

watchEffect(() => {
  bp.smaller('lg') && (open.value = false)
})

watch(open, () => {
  const nuxt = document.querySelector('#__nuxt')
  open.value
    ? nuxt?.setAttribute('inert', '')
    : nuxt?.removeAttribute('inert')
})

const links = [
  {
    label: 'Work',
    to: '/work',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'CV',
    to: '/cv',
  },
]

const openMenu = () => {
  open.value = true
}
</script>

<template>
  <header class="">
    <nav aria-label="main navigation" class="flex items-center text-xl uppercase">
      <ul class="flex gap-4 flex-grow">
        <li class="grid">
          <NuxtLink to="/" class="p-4">
            WW
          </NuxtLink>
        </li>
        <li v-for="link in links" :key="link.to" class="hidden lg:grid">
          <NuxtLink :to="link.to" class="p-4">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
      <DarkToggle />
      <button type="button" class="" @click="openMenu">
        <i class="i-mdi:menu inline-block" />
        <span class="sr-only">Open Menu</span>
      </button>
    </nav>
  </header>

  <Teleport to="body">
    <nav v-if="open" class="inset-0 fixed z-10 grid place-items-center bg-[--c-base] text-center">
      <button type="button" class="absolute top-8 right-8" @click="open = false">
        <i class="i-mdi:window-close inline-block text-3xl" />
        <span class="sr-only">Close Menu</span>
      </button>
      <ul>
        <li v-for="link in links" :key="link.to" class="grid">
          <NuxtLink :to="link.to" class="p-4 text-3xl" @click="open = false">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </Teleport>
</template>
