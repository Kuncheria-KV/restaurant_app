import { Button, Carousel, Paragraph, Stack, YStack, useMedia, useWindowDimensions } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  const media = useMedia()
  const { width: windowWidth } = useWindowDimensions()
  const link = useLink({
    href: '/',
  })
  console.log({size: media.sm})

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Carousel.Container width={media.sm ? windowWidth: 800} height={media.sm ? 200: 400}>
        <Carousel.Slider />
      </Carousel.Container>
    </YStack>
  )
}
