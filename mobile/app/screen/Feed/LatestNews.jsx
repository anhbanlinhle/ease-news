import React, {useState} from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import BigNews from "../../components/thumbnails/BigNews";
import {useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";

const LatestNews = ({data}) => {
  const navigation = useNavigation();
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
              onPress={() => {
                navigation.navigate('Article', item)
              }}
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
