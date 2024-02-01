import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      black: 'hsl(0 0% 0%)',
      white: 'hsl(0 0% 100%)',
      current: 'currentColor',
      base: {
        DEFAULT: '--c-base',
        content: '--c-base-content',
      },
    },
  },
  safelist: [
    'i-mdi:vuejs',
    'i-mdi:nuxt',
    'i-mdi:drupal',
    'i-mdi:symfony',
    'i-simple-icons:vite',
    'i-mdi:language-javascript',
  ],
  rules: [
    [/^slide-enter-(\d+)$/, ([_, n]) => ({
      '--enter-stage': n,
    })],
    [
      /^(\w*)-(.*)$/,
      ([, u, c], { theme }: { theme: Record<string, any> }) => {
        if (!u.match(/^(text|bg|border)/))
          return
        const color = c.split('-')

        const prop = {
          bg: 'background-color',
          text: 'color',
          border: 'border-color',
        }
        if (
          (color.length === 1 && theme.colors[c])
          || (color.length === 2 && theme.colors[color[0]] && theme.colors[color[0]][color[1]])
        ) {
          const cssvar
            = color.length === 1
              ? typeof theme.colors[c] === 'object'
                ? theme.colors[c].DEFAULT
                : theme.colors[c]
              : theme.colors[color[0]][color[1]]

          if (!cssvar || !cssvar.match(/^--/))
            return
          // @ts-expect-error idk man
          return { [prop[u]]: `hsl(var(${cssvar}) / var(--un-${u}-opacity, 1))` }
        }
      },
    ],
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
