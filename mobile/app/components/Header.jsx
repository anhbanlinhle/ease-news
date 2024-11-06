import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {ratioH, ratioW} from "../../utils/converter";
import Icons from "../../constants/Icons";
import LinearGradient from "react-native-linear-gradient";

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.iconContainer}>
        <LinearGradient colors={['#ff3a44', '#ff8086']} style={styles.icon}>
          <Icons.Speech/>
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
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',
    right: ratioH(16),
    alignItems: 'center',
  },
  icon: {
    width: ratioH(30),
    height: ratioH(30),
    borderRadius: ratioW(16),
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Header
