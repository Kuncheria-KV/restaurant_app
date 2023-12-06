import { CartScreen } from 'app/features/cart/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Cart',
        }}
      />
      <CartScreen />
    </>
  )
}
