import React, { useEffect, useState } from 'react'
import { YStack, Button, Text } from 'tamagui'
import { useRouter } from 'solito/router'

const WebTopNavigationBar = () => {
  const router = useRouter()
  const [activePath, setActivePath] = useState('/')

  const isActive = (path) => activePath === path

  return (
    <YStack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding="$4"
      backgroundColor="#000"
      width="100%"
    >
      <Text color="#fff" fontSize="$6">
        Nike Store
      </Text>
      <YStack flexDirection="row" alignItems="center">
        <Button
          onPress={() => {
            router.push('/')
            setActivePath('/')
          }}
          backgroundColor={isActive('/') ? '#6200EE' : 'transparent'}
          padding="$2"
          margin="$2"
        >
          <Text color="#fff">Home</Text>
        </Button>
        <Button
          onPress={() => {
            router.push('/clothes');
            setActivePath('/clothes');
          }}
          backgroundColor={isActive('/clothes') ? '#6200EE' : 'transparent'}
          padding="$2"
          margin="$2"
        >
          <Text color="#fff">Clothes</Text>
        </Button>
        <Button
          onPress={() => {
            router.push('/cart');
            setActivePath('/cart');
          }}
          backgroundColor={isActive('/cart') ? '#6200EE' : 'transparent'}
          padding="$2"
          margin="$2"
        >
          <Text color="#fff">Cart</Text>
        </Button>
        <Button
          onPress={() => {
            router.push('/sport');
            setActivePath('/sport');
          }}
          backgroundColor={isActive('/sport') ? '#6200EE' : 'transparent'}
          padding="$2"
          margin="$2"
        >
          <Text color="#fff">Sport</Text>
        </Button>
      </YStack>
    </YStack>
  )
}

export default WebTopNavigationBar
