import React from 'react'
import {View, StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import LinearGradient from "react-native-linear-gradient";

const BigNews = ({cover, title, author, summary}) => {
  return (
    <TouchableOpacity style={styles.container}>
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
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.summary}>
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
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontSize: ratioH(16),
    fontWeight: 'bold',
    color: 'white',
  },
  summary: {
    fontSize: ratioH(10),
    color: 'white',
  }
})

export default BigNews
