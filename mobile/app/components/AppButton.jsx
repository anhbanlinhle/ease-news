import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {ratioH, ratioW} from "../../utils/converter";
import Fonts from "../../constants/Fonts";

const AppButton = ({customStyles, label, onPress, enabled}) => {
  return (
    <TouchableOpacity
      style={[styles.container(enabled), customStyles]}
      onPress={onPress}
      disabled={!enabled}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: (enabled) => ({
    width: ratioW(343),
    height: ratioH(52),
    borderRadius: ratioW(8),
    marginVertical: ratioH(8),
    justifyContent: 'center',
    alignItems: 'center',
    opacity: enabled ? 1 : 0.5,
    backgroundColor: '#0c0404'
  }),
  text: {
    fontSize: ratioH(28),
    color: '#b9b9b9',
    ...Fonts.blackItalic
  }
})

export default AppButton
