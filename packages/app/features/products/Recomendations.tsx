import React from 'react'
import {  ScrollView , ProductCard, useMedia} from '@my/ui'


const Recommendations = ScrollView.styleable((props , ref) => {
    const media = useMedia()

  return (
    <ScrollView {...props} ref= {ref} space showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCard
            key={index}
            animation="bouncy"
            size="$4"
            width={media.sm ?175 : 250}
            height={media.sm ? 210: 300}
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            theme="green"
          />
        ))}
    </ScrollView>
  )
})


export default Recommendations
