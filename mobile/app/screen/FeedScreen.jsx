import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        Feed Screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default FeedScreen
