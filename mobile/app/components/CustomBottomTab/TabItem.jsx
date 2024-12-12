import React from 'react'
import {View, StyleSheet} from 'react-native'
import TabIcon from "./TabIcon";

const TabItem = ({isFocused, type}) => {
  return (
    <View style={styles.container}>
      <TabIcon
        screen={type}
        focus={isFocused}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default TabItem
