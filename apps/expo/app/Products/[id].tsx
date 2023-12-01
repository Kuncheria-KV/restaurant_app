import { ProductDetailScreen } from 'app/features/products/detail-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Products detail',
        }}
      />
      <ProductDetailScreen />
    </>
  )
}
