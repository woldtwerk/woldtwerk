<script setup lang="ts">
interface Props {
  to?: string
  title: string
  icon: string
}

const props = defineProps<Props>()

const component = computed(() => {
  if (props.to)
    return resolveComponent('NuxtLink')
  return 'div'
})

const attrs = computed(() => {
  if (props.to) {
    return {
      to: props.to,
      target: '_blank',
    }
  }
  return {}
})
</script>

<template>
  <Component :is="component" v-bind="attrs" class="grid grid-cols-[4rem_1fr] items-center decoration-none p-4 hover:bg-opacity-10 hover:bg-base-content not-prose">
    <i :class="icon" class="text-3xl justify-self-center" />
    <div>
      <div class="text-lg">
        {{ title }}
      </div>
      <div class="text-sm [&>p]:my-0">
        <slot />
      </div>
    </div>
  </Component>
</template>
