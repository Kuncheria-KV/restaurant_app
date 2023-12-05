import {
    MaskDefinitions,
    combineMasks,
    createIdentityMask,
    createInverseMask,
    createMask,
    createSoftenMask,
    createStrengthenMask,
    skipMask,
  } from '@tamagui/create-theme'
  
  export const masks = {
    identity: createIdentityMask(),
    soften: createSoftenMask(),
    soften2: createSoftenMask({ strength: 2 }),
    soften3: createSoftenMask({ strength: 3 }),
    strengthen: createStrengthenMask(),
    inverse: createInverseMask(),
    inverseSoften: combineMasks(createInverseMask(), createSoftenMask({ strength: 2 })),
    inverseSoften2: combineMasks(createInverseMask(), createSoftenMask({ strength: 3 })),
    inverseSoften3: combineMasks(createInverseMask(), createSoftenMask({ strength: 4 })),
    inverseStrengthen2: combineMasks(
      createInverseMask(),
      createStrengthenMask({ strength: 2 })
    ),
  } satisfies MaskDefinitions
  