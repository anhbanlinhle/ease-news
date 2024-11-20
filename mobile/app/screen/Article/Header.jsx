import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import LinearGradient from "react-native-linear-gradient";
import Icons from "../../../constants/Icons";
import {useNavigation} from "@react-navigation/native";
import Tts from "react-native-tts";

const Header = ({onSpeech}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconBack}
        onPress={() => {
          Tts.stop()
          navigation.goBack()
        }}>
        <Icons.Back/>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSpeech} style={styles.iconSpeechContainer}>
        <LinearGradient colors={['#ff3a44', '#ff8086']} style={styles.iconSpeech}>
          <Icons.Speech/>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: ratioW(375),
    height: ratioH(44),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBack: {
    width: ratioH(30),
    height: ratioH(30),
    alignItems: 'center',
  },
  iconSpeechContainer: {
    position: 'absolute',
    right: ratioH(16),
    alignItems: 'center',
  },
  iconSpeech: {
    width: ratioH(30),
    height: ratioH(30),
    borderRadius: ratioW(16),
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Header
