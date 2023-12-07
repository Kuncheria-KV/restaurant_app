import { View, Button, YStack, ProductListCard, Text, BottomSheet, useMedia, useWindowDimensions, H1 } from '@my/ui'
import { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { useLink } from 'solito/link'
import { ChevronDown } from '@tamagui/lucide-icons'

export function ProductsScreen() {
  const media = useMedia()
  const link = useLink({ href: '/' })
  const [isOpen, setIsOpen] = useState(false)

  const list = [
    {
      id: 123,
      productName: 'Nke air',
      price: 200,
      image:
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 126,
      productName: 'Nke jordan',
      price: 300,
      image:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/53bdca6c-d7ad-478e-8509-a1d81465471e/elevate-3-basketball-shoes-QT43Gj.png',
    },
    {
      id: 124,
      productName: 'Nke rebound',
      price: 100,
      image:
        'https://reviewed-com-res.cloudinary.com/image/fetch/s--M_iYml0Y--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_972,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1686778972972/nike-sneakers-hero.jpg',
    },
    {
      id: 125,
      productName: 'Nke 123',
      price: 230,
      image:
        'https://c.static-nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/123-joyride-cdp-apla-xa-xp.jpg',
    },
    {
      id: 127,
      productName: 'Nke air',
      price: 200,
      image:
        'https://images-cdn.ubuy.co.in/63ae7ea58a0a9f48bd43fa12-nike-air-force-1-custom-sneakers-blood.jpg',
    },
    {
      id: 128,
      productName: 'Nke jordan',
      price: 300,
      image:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
    },
    {
      id: 129,
      productName: 'Nke rebound',
      price: 100,
      image:
        'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww',
    },
    {
      id: 120,
      productName: 'Nke 123',
      price: 230,
      image:
        'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_776%2Cy_755/MTk0Njk2MDgyNjkxNzI4NTQ2/ja-morant-shoe.jpg',
    },
    {
      id: 121,
      productName: 'Nke air',
      price: 200,
      image:
        'https://media.wired.co.uk/photos/606d9f466a2b7484dab92d87/4:3/w_2664,h_1998,c_limit/nike_air_zoom_alphafly_next_percent_original.jpg',
    },
    {
      id: 122,
      productName: 'Nke jordan',
      price: 300,
      image:
        'https://www.financialexpress.com/wp-content/uploads/2022/12/1670241339_image-1.png?w=620',
    },
    {
      id: 130,
      productName: 'Nke rebound',
      price: 100,
      image:
        'https://assets.ajio.com/medias/sys_master/root/20230524/p67l/646e3b31d55b7d0c63d67f1b/-473Wx593H-469473252-white-MODEL.jpg',
    },
    {
      id: 131,
      productName: 'Nke 123',
      price: 230,
      image:
        'https://t4.ftcdn.net/jpg/04/52/72/61/360_F_452726181_FFmFlJ5Cr7S95ZadL0oshDj4UkQADkPZ.jpg',
    },
  ]
  const { width } = useWindowDimensions()

  return (
    <YStack f={1} jc="center" ai="center" space>
      <View
        style={[styles.titleContainer, {width}]}
      >
        <H1>Products</H1>
        <Button onPress={() => setIsOpen(true)}>Filters</Button>
      </View>
      {media.sm ? (
        <FlatList
          horizontal={false}
          data={list}
          renderItem={({ item }) => <ProductListCard product={item} />}
        />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {list.map((item) => (
            <ProductListCard key={item.id}  width={400} product={item} />
          ))}
        </View>
      )}

      <Button {...link}>Go Home</Button>
      <BottomSheet
        isOpen={isOpen}
        toggleSheet={() => {
          setIsOpen(!isOpen)
        }}
      >    
        <>
          <Text color="#FFF">No filters available</Text>
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setIsOpen(!isOpen)
            }}
          />
        </>
        </BottomSheet>
    </YStack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 10,
    paddingTop: 20,
  },
})
