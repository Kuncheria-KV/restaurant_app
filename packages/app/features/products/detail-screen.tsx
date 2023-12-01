import {
  Button,
  Carousel,
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Spacer,
  Text,
  Stack,
  XStack,
  YStack,
  useMedia,
  useWindowDimensions,
} from '@my/ui'
import { ColorSelector } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function ProductDetailScreen() {
  const [id] = useParam('id')
  const media = useMedia()
  const { width: windowWidth } = useWindowDimensions()
  const link = useLink({
    href: '/',
  })
  console.log({ size: media.sm })

  return (
    <YStack>
      <XStack jc="space-around">
        <Stack>
          <Carousel.Container width={media.sm ? windowWidth : 800} height={media.sm ? 200 : 400}>
            <Carousel.Slider />
          </Carousel.Container>
        </Stack>
        <YStack >
          <H1>NIKE Jordans</H1>
          <H4>Basketball Shoe</H4>
          <H2 marginTop={24}>MRP: 21,000</H2>
          <Text>incl. of taxes</Text>
          <Text>(Also includes all applicable duties)</Text>

          <ColorSelector colors={['red', 'blue', 'green', 'yellow']} marginTop="$5" />

          <Paragraph width={600} marginTop={24}>
            Zion's third signature shoe celebrates the dedication he puts in to crafting his
            singular game. Packed with court-ready tech, it's designed for ballers who are masters
            of both land and air. Stay low and contained, then explode skywards, with a cushioned
            return to earth. The Zion 3 helps hold you down—so you can fly your own way.
          </Paragraph>
        </YStack>
      </XStack>
    </YStack>
  )
}
