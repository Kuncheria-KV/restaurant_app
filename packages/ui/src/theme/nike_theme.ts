import { createSoftenMask, createThemeBuilder } from '@tamagui/theme-builder'
import { masks } from './masks'
import { palettes } from './palettes'
import { componentThemeDefinitions } from './componentThemeDefinitions'
import { maskOptions, templates } from './templates'

const colorThemeDefinition = (colorName: string) => [
  {
    parent: 'light',
    palette: colorName,
    template: 'colorLight',
  },
  {
    parent: 'dark',
    palette: colorName,
    template: 'base',
  },
]

const themesBuilder = createThemeBuilder()
  .addPalettes(palettes)
  .addMasks(masks)
  .addTemplates(templates)
  .addMasks({
    soften: createSoftenMask(),
  })
  .addThemes({
    light: {
      template: 'base',
      palette: 'light',
    },
    dark: {
      template: 'base',
      palette: 'dark',
    },
  })
  .addChildThemes({
    orange: [  {
      parent: 'light',
      palette: 'orange',
      template: 'colorLight',
    },
    {
      parent: 'dark',
      palette: 'orange',
      template: 'base',
    }],
    green: colorThemeDefinition('green'),
  })
  .addChildThemes({
    subtle: {
      mask: 'soften',
      ...maskOptions.alt,
    },
    alt: {
      mask: 'soften2',
      ...maskOptions.alt,
    },
    active: {
      mask: 'soften3',
      skip: {
        color: 1,
      },
    },
  })
  .addChildThemes(componentThemeDefinitions, {
    // to save bundle size but make alt themes not work on components
    // avoidNestingWithin: ['alt1', 'alt2'],
  })

export const themes = themesBuilder.build()
