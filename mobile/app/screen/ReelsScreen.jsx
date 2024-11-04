import React from 'react'
import {View, StyleSheet, Text, SafeAreaView} from 'react-native'
import Header from "../components/Header";

const ReelsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Video'}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export default ReelsScreen
