import React from 'react'
import {View, StyleSheet} from 'react-native'
import Icons from "../../../constants/Icons";

const TabIcon = ({screen, color, size}) => {
  switch (screen) {
    case "Contacts":
      return (
        <View style={styles.container}>
          <Icons.Contact width={size} height={size} stroke={color} strokeWidth={"2.5"}/>
        </View>
      )
    case "Chats":
      return (
        <View style={styles.container}>
          <Icons.Chat width={size} height={size} stroke={color} strokeWidth={"2.5"}/>
        </View>
      )
    case "Calls":
      return (
        <View style={styles.container}>
          <Icons.Call width={size} height={size} stroke={color} strokeWidth={"2"}/>
        </View>
      )
    case "Stories":
      return (
        <View style={styles.container}>
          <Icons.Story width={size} height={size} fill={color} strokeWidth={"2"}/>
        </View>
      )
    default:
      return null
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})


export default TabIcon
