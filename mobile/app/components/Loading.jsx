import React, {forwardRef, useImperativeHandle, useState} from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'

const Loading = forwardRef(({}, ref) => {
  const [isActive, setIsActive] = useState(false)

  useImperativeHandle(ref, () => ({
    show: () => setIsActive(true),
    hide: () => setIsActive(false),
  }), [])

  return (
    <View
      style={[StyleSheet.absoluteFill, styles.container(isActive)]}
      pointerEvents={'none'}
    >
      <ActivityIndicator size='large' color="#ff8086"/>
    </View>
  )
})

const styles = StyleSheet.create({
  container: (isActive) => ({
    flex: 1,
    backgroundColor: 'rgba(22,50,73,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: isActive ? 1 : 0,
  }),
})

export default Loading
