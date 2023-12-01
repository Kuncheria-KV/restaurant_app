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
  View,
  ScrollView,
} from '@my/ui'
import { ColorSelector } from '@my/ui'
import { ProductCard } from '@my/ui/src'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'
import Recommendations from './Recomendations'

const { useParam } = createParam<{ id: string }>()

export function ProductDetailScreen() {
  const [id] = useParam('id')
  const media = useMedia()
  const { width: windowWidth } = useWindowDimensions()
  const link = useLink({
    href: '/',
  })

  return (
    <ScrollView>
      <YStack>
        <Stack jc="space-around" flexDirection={media.sm ? 'column' : 'row'}>
          <View height={media.sm ? 300 : 400}>
            <Carousel.Container width={media.sm ? windowWidth : 800} height={media.sm ? 300 : 400}>
              <Carousel.Slider />
            </Carousel.Container>
          </View>
          <YStack padding="$4">
            <H1>NIKE Jordans</H1>
            <H4>Basketball Shoe</H4>
            <H2 marginTop={24}>MRP: 21,000</H2>
            <Text>incl. of taxes</Text>
            <Text>(Also includes all applicable duties)</Text>

            <ColorSelector colors={['red', 'blue', 'green', 'yellow']} marginTop="$5" />

            <Paragraph width={media.sm ? windowWidth - 20 : 600} marginTop={24}>
              Zion's third signature shoe celebrates the dedication he puts in to crafting his
              singular game. Packed with court-ready tech, it's designed for ballers who are masters
              of both land and air. Stay low and contained, then explode skywards, with a cushioned
              return to earth. The Zion 3 helps hold you down—so you can fly your own way.
            </Paragraph>
          </YStack>
        </Stack>
        <H3 paddingLeft="$4" marginTop="$4">Recommendations:</H3>
        <Recommendations horizontal marginTop="$4" marginBottom="$8"/>
      </YStack>
    </ScrollView>
  )
}
