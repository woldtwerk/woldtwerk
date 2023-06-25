import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  safelist: [
    'i-mdi:vuejs',
    'i-mdi:nuxt',
    'i-mdi:svelte',
    'i-mdi:drupal',
    'i-mdi:symfony',
  ],
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetTypography({
      cssExtend: {
        '.prose': {
          'max-width': 'unset',
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
