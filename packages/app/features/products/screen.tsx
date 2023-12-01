import { Button } from '@my/ui'
import { View, StyleSheet, Text } from 'react-native'
import { useLink } from 'solito/link'

export function ProductsScreen() {

  const productDetailsLinkProps = useLink({ href: '/products/123' })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProductsScreen</Text>
      <Button {...productDetailsLinkProps} >
        Product Detail
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
  },
})
