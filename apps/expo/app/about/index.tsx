import { AboutScreen } from 'app/features/about/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'About',
        }}
      />
      <AboutScreen />
    </>
  )
}
