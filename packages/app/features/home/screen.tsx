import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useLink } from 'solito/link'
import { Button } from '@my/ui' // Ensure this import path is correct for your project

export function HomeScreen() {
  // Link properties for navigation buttons
  const productsLinkProps = useLink({ href: '/products/' })
  const cartLinkProps = useLink({ href: '/cart/' })
  const profileLinkProps = useLink({ href: '/profile/' })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Nike</Text>
      <Button {...productsLinkProps} style={styles.link}>
        Products
      </Button>
      <Button {...cartLinkProps} style={styles.link}>
        Cart
      </Button>
      <Button {...profileLinkProps} style={styles.link}>
        Profile
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    marginBottom: 20,
  },
  link: {
    color: 'white',
    marginBottom: 20,
  },
})
