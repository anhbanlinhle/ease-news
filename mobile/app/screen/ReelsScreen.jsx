import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const ReelsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        Reels Screen
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

export default ReelsScreen
