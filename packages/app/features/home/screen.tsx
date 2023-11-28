import { View, StyleSheet, Text } from 'react-native'
import { useLink } from 'solito/link'
import { Button } from '@my/ui'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/about/',
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Our Restaurant</Text>
      <Button {...linkProps}>About Us</Button>
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
  },
  link: {
    color: 'blue',
    marginBottom: 40
  },
})
