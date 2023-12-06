import { SportScreen } from 'app/features/sport/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Sport',
        }}
        
      />
      <SportScreen />
    </>
  )
}
