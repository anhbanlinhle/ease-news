import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import Icons from "../../../constants/Icons";
import Fonts from '../../../constants/Fonts';

const ButtonMore = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.title}>
        {title}
      </Text>
      <Icons.Right style={styles.icon} width={ratioW(28)} height={ratioH(28)}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: ratioW(16),
    marginTop: ratioH(16),
    padding: ratioW(16),
    backgroundColor: '#F3F4F6',
    width: ratioW(336),
    height: ratioH(56),
    borderRadius: ratioW(12),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#666C8E',
    fontSize: ratioH(18),
    ...Fonts.black,
    textAlign: 'center',
  },
  icon: {
    width: ratioW(24),
    height: ratioH(24),
  }
})

export default ButtonMore
