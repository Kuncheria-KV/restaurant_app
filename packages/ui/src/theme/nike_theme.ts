import { createSoftenMask, createThemeBuilder } from '@tamagui/theme-builder'
import { masks } from './masks';

const themesBuilder = createThemeBuilder()
  .addPalettes({
    dark: ['#03120E', '#0F1814', '#1A1D1A', '#202F2B', '#26413C', '#32494C', '#3E505B','#648083', '#779897', '#8AB0AB', '#FFF'],
    light: ['#FFF','#8AB0AB', '#779897', '#648083', '#3E505B', '#32494C', '#26413C', '#202F2B', '#1A1D1A', '#0F1814', '#03120E'],
  })
  .addMasks(masks)
  .addTemplates({
    base: {
      background: 0 ,
      backgroundFocus: 2,
      backgroundHover: 2,
      backgroundPress: 2,
      backgroundStrong: 2,
      backgroundTransparent: 3 ,
      borderColor: 4,
      borderColorFocus: 5,
      borderColorHover: 5,
      borderColorPress: 5,
      color: -0,
      colorFocus: -2,
      colorHover: -2,
      colorPress:-2,
      colorTransparent: -4,
      placeholderColor: 1,
      shadowColor: -4,
      shadowColorFocus: -4,
      shadowColorHover:-4 ,
      shadowColorPress:-6 ,
    },
  })
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
    subtle: {
      mask: 'soften',
    },
    alt: {
      mask: 'soften2',
    },
    active: {
      mask: 'soften3',
      skip: {
        color: 1,
      },
    },
  })

  export const themes = themesBuilder.build();