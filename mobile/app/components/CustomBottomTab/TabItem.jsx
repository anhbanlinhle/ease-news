import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import TabIcon from "./TabIcon";
import Fonts from "../../../constants/Fonts";

const TabItem = ({isFocused, type, color}) => {
  return (
    <View style={styles.container}>
      <TabIcon
        screen={type}
        color={isFocused ? '#FF3a44' : color}
        size={ratioW(24)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  tabLabel: {
    ...Fonts.medium,
    marginTop: ratioH(4),
  }
})

export default TabItem
