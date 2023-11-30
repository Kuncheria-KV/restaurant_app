import { View, StyleSheet, Text } from 'react-native'

export function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CartScreen</Text>
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
