import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="clothes"
        options={{
          tabBarLabel: 'Clothes',
          title: 'Clothes',
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: 'Cart',
          title: 'Cart',
        }}
      />
      <Tabs.Screen
        name="sport"
        options={{
          tabBarLabel: 'Sport',
          title: 'Sport',
        }}
      />
    </Tabs>
  )
}
