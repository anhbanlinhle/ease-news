import React, {useEffect} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {ratioH, ratioW} from "../../utils/converter";
import Icons from "../../constants/Icons";
import LinearGradient from "react-native-linear-gradient";
import Tts from "react-native-tts"
import Fonts from '../../constants/Fonts';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          
        }}
        style={styles.iconContainer}>
        <LinearGradient colors={['#ff3a44', '#ff8086']} style={styles.icon}>
          <Text style={styles.iconText}>?</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: ratioH(8),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: '#FF3A44',
    fontSize: ratioH(24),
    ...Fonts.black,
  },
  iconContainer: {
    position: 'absolute',
    left: ratioH(16),
    alignItems: 'center',
  },
  icon: {
    width: ratioH(32),
    height: ratioH(32),
    borderRadius: ratioW(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: ratioH(16),
    ...Fonts.bold,
  }
})

export default Header
