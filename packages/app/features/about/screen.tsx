import { View, StyleSheet, Text } from 'react-native'

export function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Our Restaurant</Text>
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
