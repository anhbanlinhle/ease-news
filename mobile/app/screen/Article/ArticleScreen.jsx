import React from 'react'
import {View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import {ScrollView} from "react-native-gesture-handler";
import {formatTimestamp, ratioH, ratioW} from "../../../utils/converter";
import LinearGradient from "react-native-linear-gradient";
import Header from "./Header";

const ArticleScreen = ({ route }) => {
  const navigation = useNavigation()
  const { author, categories, content, summary, cover, timestamp, title } = route.params

  const renderContent = () => {
    return (
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.content}>
        <Image
          source={{uri: cover}}
          style={styles.cover}
        />
        <View style={styles.mainContent}>
          <LinearGradient colors={['rgba(160, 160, 160, 1)', 'rgba(245, 245, 245, 1)']} style={styles.heading}>
            <Text style={styles.timestamp}>{formatTimestamp(timestamp)}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>Đăng bởi {author}</Text>
          </LinearGradient>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </ScrollView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {renderContent()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cover: {
    width: ratioW(375),
    height: ratioH(285)
  },
  content: {
  },
  heading: {
    width: ratioW(311),
    marginTop: ratioH(-64),
    borderRadius: ratioW(16),
    paddingHorizontal: ratioW(24),
  },
  title: {
    fontSize: ratioH(18),
    fontWeight: '400',
    marginTop: ratioH(12)
  },
  timestamp: {
    fontSize: ratioH(16),
    marginTop: ratioH(20),
    fontWeight: '400'
  },
  author: {
    marginTop: ratioH(8),
    fontWeight: '800',
    marginBottom: ratioH(16)
  },
  mainContent: {
    width: ratioW(375),
    borderTopLeftRadius: ratioW(16),
    borderTopRightRadius: ratioW(16),
    marginTop: ratioH(-20),
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column'
  },
  contentText: {
    fontSize: ratioH(14),
    fontWeight: '400',
    margin: ratioW(16),
    textAlign: 'justify',
    textAlignVertical: 'center',
  }
})

export default ArticleScreen
