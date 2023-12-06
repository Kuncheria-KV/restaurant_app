import { ClothesScreen } from 'app/features/clothes/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Clothes',
        }}
        
      />
      <ClothesScreen />
    </>
  )
}
