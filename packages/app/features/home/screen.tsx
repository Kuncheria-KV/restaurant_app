import React from 'react'
import { useLink } from 'solito/link'
import { Button, View, Text, Stack, XStack, YStack, styled, H1, H4 } from '@my/ui' // Ensure this import path is correct for your project
import { ThemeSwitch } from '@my/ui/src/ThemeSwitch/ThemeSwitch'

const StyledYStack = styled(YStack, {flex: 1, alignItems: "center", justifyContent:"center"})

export function HomeScreen() {

  // Link properties for navigation buttons
  const productsLinkProps = useLink({ href: '/products/' })
  const cartLinkProps = useLink({ href: '/cart/' })
  const profileLinkProps = useLink({ href: '/profile/' })


  return (
    <StyledYStack space>
      <H1>Welcome Nike</H1>
      <XStack space>
        <Button {...productsLinkProps}>Products</Button>
        <Button {...cartLinkProps}>Cart</Button>
        <Button {...profileLinkProps}>Profile</Button>
        <ThemeSwitch size="$5" />
      </XStack>
    </StyledYStack>
  )
}
