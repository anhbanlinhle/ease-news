import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const TrendingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        Trending Screen
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

export default TrendingScreen
