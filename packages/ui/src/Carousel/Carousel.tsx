import React, { useState, useRef, useCallback, useEffect , useContext} from 'react'
import {
  View,
  Image,
  createStyledContext,
  withStaticProperties,
} from 'tamagui'
import { FlatList } from 'react-native'

const slideList = Array.from({ length: 30 }).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
  }
})

type CarouselStyleProps = {
    width: number,
    height: number
}

const CarouselStyledContext = createStyledContext<CarouselStyleProps>({
  width: 400,
  height: 200,
})

function Slide({ data }) {

const { width: windowWidth, height: windowHeight } = useContext(CarouselStyledContext)

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={{ uri: data.image }}
        style={{ width: windowWidth, height: windowHeight }}
      ></Image>
    </View>
  )
}

const CarouselComponent = () => {
const {width:windowWidth } = useContext(CarouselStyledContext)

  const [index, setIndex] = useState(0)
  const indexRef = useRef(index)
  indexRef.current = index
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width
    const index = event.nativeEvent.contentOffset.x / slideSize
    const roundIndex = Math.round(index)

    const distance = Math.abs(roundIndex - index)

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex)
    }
  }, [])

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((e) => e.id, []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  }

  return (
      <FlatList
        data={slideList}
        style={{ flex: 1, width: windowWidth}}
        onScroll={onScroll}
        renderItem={({ item }) => {
          return <Slide data={item} />
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        {...flatListOptimizationProps}
      />
  )
}

export const Carousel = withStaticProperties(CarouselComponent, {
  Container: CarouselStyledContext.Provider,
  Slider: CarouselComponent
})

// export const Carousel = CarouselComponent;
