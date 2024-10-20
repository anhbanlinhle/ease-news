import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {formatTimestamp, ratioW} from "../../utils/converter";
import Fonts from "../../constants/Fonts";

const ChatItems = ({avatar, title, latestMessage}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: avatar}} style={styles.avatar}/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {title}
        </Text>
        <View style={styles.contentContainer}>
          <Text
            style={styles.content}
            numberOfLines={1}
          >
            {latestMessage.content}
          </Text>
          <Text style={styles.time}>
            {formatTimestamp(latestMessage.timestamp)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: ratioW(375),
    alignItems: 'center',
    borderRadius: ratioW(16),
    marginVertical: ratioW(10),
  },
  avatar: {
    backgroundColor: 'gray',
    width: ratioW(56),
    height: ratioW(56),
    borderRadius: ratioW(56),
    marginLeft: ratioW(16),
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: ratioW(12),
  },
  title: {
    fontSize: ratioW(20),
    ...Fonts.medium
  },
  contentContainer: {
    flexDirection: 'row',
    maxWidth: '70%',
  },
  content: {
    fontSize: ratioW(20),
    ...Fonts.regular
  },
  time: {
    fontSize: ratioW(20),
    ...Fonts.thin,
    marginHorizontal: ratioW(8),
  }
})

export default ChatItems
