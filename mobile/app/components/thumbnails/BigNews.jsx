import React from 'react'
import {View, StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import LinearGradient from "react-native-linear-gradient";
import Fonts from '../../../constants/Fonts';

const BigNews = ({cover, title, author, summary, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <ImageBackground
        source={{uri: cover}}
        style={styles.container}
        borderRadius={ratioW(16)}
      />
      <LinearGradient colors={['rgba(98, 98, 98, 0.35)', 'rgba(0, 0, 0, 1)']} style={styles.fade}/>

      <View style={styles.header}>
        <Text style={styles.author}>
          {author}
        </Text>
        <Text
          numberOfLines={2}
          style={styles.title}
        >
          {title}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text
          numberOfLines={3}
          style={styles.summary}
        >
          {summary}
        </Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: ratioW(321),
    height: ratioH(240),
    borderRadius: ratioW(16),
  },
  fade: {
    position: 'absolute',
    width: ratioW(321),
    height: ratioH(240),
    borderRadius: ratioW(16),
  },
  header: {
    position: 'absolute',
    width: ratioW(305),
    top: ratioH(72),
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: ratioH(16),
  },
  footer: {
    position: 'absolute',
    width: ratioW(305),
    bottom: ratioH(8),
    alignItems: 'center',
    justifyContent: 'center',
    padding: ratioH(8),
  },
  author: {
    fontSize: ratioH(10),
    ...Fonts.black,
    color: 'white',
  },
  title: {
    fontSize: ratioH(16),
    ...Fonts.extraBold,
    color: 'white',
  },
  summary: {
    fontSize: ratioH(10),
    ...Fonts.boldItalic,
    color: 'white',
    textAlign: 'justify',
  }
})

export default BigNews
