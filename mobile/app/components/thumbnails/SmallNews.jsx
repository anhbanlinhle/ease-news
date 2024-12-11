import React, { useContext } from 'react'
import {View, StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native'
import {formatTimestamp, ratioH, ratioW} from "../../../utils/converter";
import LinearGradient from "react-native-linear-gradient";
import Fonts from '../../../constants/Fonts';
import { SampleContext } from '../../../context/SampleContext';
const SmallNews = ({cover, title, author, timestamp, onPress}) => {
  const { isDarkMode } = useContext(SampleContext);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}>
      <ImageBackground
        source={{uri: cover}}
        style={styles.container}
        width={ratioW(305)}
        height={ratioH(100)}
        borderRadius={ratioW(16)}
      />
      <LinearGradient
      colors={[!isDarkMode ? 'rgba(98, 98, 98, 0.35)' : 'rgba(157, 157, 157, 0.35)',
      !isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)']}
      style={styles.fade}/>
      <View style={styles.header}>
        <Text style={[styles.title,
          {color: !isDarkMode ? 'white' : 'black'}]}>
          {title}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.author,
          {color: !isDarkMode ? 'white' : 'black'}]}>
          {author}
        </Text>
        <Text style={[styles.timestamp,
          {color: !isDarkMode ? 'white' : 'black'}]}>
          {formatTimestamp(timestamp)}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: ratioW(345),
    height: ratioH(128),
    borderRadius: ratioW(16),
  },
  fade: {
    position: 'absolute',
    width: ratioW(345),
    height: ratioH(128),
    borderRadius: ratioW(16),
  },
  header: {
    position: 'absolute',
    width: ratioW(313),
    top: ratioH(8),
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: ratioW(8),
    marginHorizontal: ratioW(8),
  },
  footer: {
    position: 'absolute',
    width: ratioW(345),
    bottom: ratioH(0),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: ratioH(16),
  },
  title: {
    fontSize: ratioH(16),
    ...Fonts.extraBold,
    color: 'white',
  },
  timestamp: {
    fontSize: ratioH(12),
    ...Fonts.boldItalic,
    color: 'white',
    alignSelf: 'flex-end',
  },
  author: {
    fontSize: ratioH(12),
    ...Fonts.black,
    color: 'white',
  },

})

export default SmallNews
