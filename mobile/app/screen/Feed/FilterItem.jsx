import React, {forwardRef} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import {ratioH, ratioW} from "../../../utils/converter";
import Icons from "../../../constants/Icons";

const FilterItem = ({item, focus, onPress}) => {
  const renderContent = () => {
    if (item === 'Lọc') {
      return (
        <View style={styles.root}>
          <Icons.Filter fill={focus ? 'white' : 'black'} style={styles.icon}/>
          <Text style={styles.text(focus)}>{item}</Text>
        </View>
      )
    }
    return (
      <Text style={styles.text(focus)}>{item}</Text>
    )
  }
  if (focus) {
    return (
      <LinearGradient colors={['#ff3a44', '#ff8086']} style={styles.container(focus)}>
        {renderContent()}
      </LinearGradient>
    )
  }
  return (
    <TouchableOpacity
      style={styles.container(focus)}
      onPress={onPress}
    >
      {renderContent()}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: (focus) => ({
    height: ratioH(32),
    borderRadius: ratioW(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: focus ? '#ffb3b6' : '#e8e8ee',
    paddingHorizontal: ratioW(16),
  }),
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: ratioW(12),
    height: ratioH(12),
    marginRight: ratioW(4),
  },
  text: (focus) => ({
    fontSize: ratioH(12),
    fontFamily: "Arial",
    color: focus ? 'white' : 'black',
  })
})

export default  FilterItem
