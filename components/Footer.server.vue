<script setup lang="ts">
const links = [
  {
    label: 'Github',
    to: 'https://github.com/woldtwerk',
    icon: 'i-mdi:github',
  },
  {
    label: 'LinkedIn',
    to: 'https://www.linkedin.com/in/willi-woldt-5b4178233/',
    icon: 'i-mdi:linkedin',
  },
  {
    label: 'Twiiter',
    to: 'https://twitter.com/woldtwerk',
    icon: 'i-mdi:twitter',
  },
  {
    label: 'Drupal',
    to: 'https://www.drupal.org/u/woldtwerk',
    icon: 'i-mdi:drupal',
  },
]

const year = useDateFormat(useNow(), 'YYYY')
</script>

<template>
  <footer class="grid justify-center gap-4 p-4">
    <small>
      @ {{ year }} Willi Woldt. All rights reserverd.
    </small>
    <nav aria-label="Socials">
      <ul class="flex gap-4 justify-center">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to" :class="link.icon" target="_blank">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>
