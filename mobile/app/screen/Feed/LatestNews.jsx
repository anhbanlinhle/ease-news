import React from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import BigNews from "./BigNews";

const data = [
  {
    cover: "https://s3-alpha-sig.figma.com/img/1b25/3b61/593c0eac981b4da390568868d72bc803?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msisILkLMuCy75khAtMh14wkPee2LfLqLnuQKvpzCWihE2qZwx6UnU4UOk4SzI5iyF-Olu7g-pUx-RWlL2fbH0GVce91UnJckIgmLqEBrUvSA16T7mwOSShuQc-gsZVumOPLV~rTw36AYrYwGdnJnBzja4cBW8I4cOA26e7gqtwQJe41udqxBZLkEdVIUIbuIIn5sHeC~ClRGNLmuJfF9KMUMHilK~97s7xvYW-amFynxeMvlwZQ6yOuWRVAOGdLslqOJwOGBTEsvYMs63LNu9RQION68ZtP8iYPOJlixRhEAP8C4YOxjqMfh1EBUWW6VELpaRRd472rxoghe5KQNA__",
    title: `Crypto investors should be prepared to lose all their money, BOE governor says`,
    author: "Ryan Browne",
    summary: `“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”`,
  },
  {
    cover: "https://s3-alpha-sig.figma.com/img/1b25/3b61/593c0eac981b4da390568868d72bc803?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msisILkLMuCy75khAtMh14wkPee2LfLqLnuQKvpzCWihE2qZwx6UnU4UOk4SzI5iyF-Olu7g-pUx-RWlL2fbH0GVce91UnJckIgmLqEBrUvSA16T7mwOSShuQc-gsZVumOPLV~rTw36AYrYwGdnJnBzja4cBW8I4cOA26e7gqtwQJe41udqxBZLkEdVIUIbuIIn5sHeC~ClRGNLmuJfF9KMUMHilK~97s7xvYW-amFynxeMvlwZQ6yOuWRVAOGdLslqOJwOGBTEsvYMs63LNu9RQION68ZtP8iYPOJlixRhEAP8C4YOxjqMfh1EBUWW6VELpaRRd472rxoghe5KQNA__",
    title: `Crypto investors should be prepared to lose all their money, BOE governor says`,
    author: "Ryan Browne",
    summary: `“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”`,
  },
  {
    cover: "https://s3-alpha-sig.figma.com/img/1b25/3b61/593c0eac981b4da390568868d72bc803?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msisILkLMuCy75khAtMh14wkPee2LfLqLnuQKvpzCWihE2qZwx6UnU4UOk4SzI5iyF-Olu7g-pUx-RWlL2fbH0GVce91UnJckIgmLqEBrUvSA16T7mwOSShuQc-gsZVumOPLV~rTw36AYrYwGdnJnBzja4cBW8I4cOA26e7gqtwQJe41udqxBZLkEdVIUIbuIIn5sHeC~ClRGNLmuJfF9KMUMHilK~97s7xvYW-amFynxeMvlwZQ6yOuWRVAOGdLslqOJwOGBTEsvYMs63LNu9RQION68ZtP8iYPOJlixRhEAP8C4YOxjqMfh1EBUWW6VELpaRRd472rxoghe5KQNA__",
    title: `Crypto investors should be prepared to lose all their money, BOE governor says`,
    author: "Ryan Browne",
    summary: `“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”`,
  },
  {
    cover: "https://s3-alpha-sig.figma.com/img/1b25/3b61/593c0eac981b4da390568868d72bc803?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msisILkLMuCy75khAtMh14wkPee2LfLqLnuQKvpzCWihE2qZwx6UnU4UOk4SzI5iyF-Olu7g-pUx-RWlL2fbH0GVce91UnJckIgmLqEBrUvSA16T7mwOSShuQc-gsZVumOPLV~rTw36AYrYwGdnJnBzja4cBW8I4cOA26e7gqtwQJe41udqxBZLkEdVIUIbuIIn5sHeC~ClRGNLmuJfF9KMUMHilK~97s7xvYW-amFynxeMvlwZQ6yOuWRVAOGdLslqOJwOGBTEsvYMs63LNu9RQION68ZtP8iYPOJlixRhEAP8C4YOxjqMfh1EBUWW6VELpaRRd472rxoghe5KQNA__",
    title: `Crypto investors should be prepared to lose all their money, BOE governor says`,
    author: "Ryan Browne",
    summary: `“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”`,
  },
  {
    cover: "https://s3-alpha-sig.figma.com/img/1b25/3b61/593c0eac981b4da390568868d72bc803?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msisILkLMuCy75khAtMh14wkPee2LfLqLnuQKvpzCWihE2qZwx6UnU4UOk4SzI5iyF-Olu7g-pUx-RWlL2fbH0GVce91UnJckIgmLqEBrUvSA16T7mwOSShuQc-gsZVumOPLV~rTw36AYrYwGdnJnBzja4cBW8I4cOA26e7gqtwQJe41udqxBZLkEdVIUIbuIIn5sHeC~ClRGNLmuJfF9KMUMHilK~97s7xvYW-amFynxeMvlwZQ6yOuWRVAOGdLslqOJwOGBTEsvYMs63LNu9RQION68ZtP8iYPOJlixRhEAP8C4YOxjqMfh1EBUWW6VELpaRRd472rxoghe5KQNA__",
    title: `Crypto investors should be prepared to lose all their money, BOE governor says`,
    author: "Ryan Browne",
    summary: `“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”`,
  }
]

const LatestNews = () => {
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Tin tức mới nhất</Text>
      </View>
    )
  }

  const renderBigNews = () => {
    return (
      <FlatList
        style={styles.news}
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{width: ratioW(8)}}/>}
        renderItem={({item}) => {
          return (
            <BigNews
              cover={item.cover}
              title={item.title}
              author={item.author}
              summary={item.summary}
              />
          )
        }}
      />
    )
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderBigNews()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ratioH(8),
  },
  header: {
    width: ratioW(345),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: ratioH(24),
    fontWeight: '400',
    color: 'black'
  },
  news: {
    marginTop: ratioH(8),
    marginLeft: ratioW(16),
  }
})

export default LatestNews
