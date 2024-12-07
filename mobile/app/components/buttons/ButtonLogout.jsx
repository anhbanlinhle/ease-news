import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icons from "../../../constants/Icons";
import {ratioH, ratioW} from "../../../utils/converter";
import Fonts from '../../../constants/Fonts';

const ButtonLogout = () => {
  return (
    <TouchableOpacity
      style={styles.container}
    >
      <Text style={styles.title}>
        Đăng xuất
      </Text>
      <Icons.Logout style={styles.icon} width={ratioW(28)} height={ratioH(28)}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: ratioW(16),
    marginTop: ratioH(16),
    padding: ratioW(16),
    backgroundColor: '#FFB3B6',
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

export default ButtonLogout
