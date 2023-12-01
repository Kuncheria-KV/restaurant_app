import React from 'react'
import { Stack, XStack, XStackProps, styled } from 'tamagui'

const Circle = styled(Stack, {
  borderRadius: 100_000_000,

  variants: {
    pin: {
      top: {
        position: 'absolute',
        top: 0,
      },
    },

    centered: {
      true: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },

    size: {
      '...size': (size, { tokens }) => {
        return {
          width: tokens.size[size] ?? size,
          height: tokens.size[size] ?? size,
        }
      },
    },
  } as const,
})

type ColorSelectorProps = {
  colors: string[]
}

type CustomProps = XStackProps & ColorSelectorProps;

export const ColorSelector = XStack.styleable<CustomProps>(({ colors , ...xStackProps }: CustomProps, ref) => {
  return (
    <XStack space {...xStackProps} ref={ref}>
      {colors.map((color) => (
        <Circle centered size="$1" backgroundColor={color} key={color} />
      ))}
    </XStack>
  )
})

// const StyledSelector = styled(ColorSelector)

// export {StyledSelector as ColorSelector}
