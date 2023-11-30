import { ProductsScreen } from 'app/features/products/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Products',
        }}
      />
      <ProductsScreen />
    </>
  )
}
