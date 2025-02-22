import React, {useState, useContext} from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import BigNews from "../../components/thumbnails/BigNews";
import Fonts from '../../../constants/Fonts';
import {useNavigation} from "@react-navigation/native";
import { SampleContext } from '../../../context/SampleContext';
const LatestNews = ({data}) => {
  const navigation = useNavigation();
  const { isDarkMode } = useContext(SampleContext);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={[styles.title,
          {color: isDarkMode ? 'white' : 'black'}]}>
          Tin tức mới nhất
        </Text>
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
    ...Fonts.semiBold,
  },
  news: {
    marginTop: ratioH(8),
    marginLeft: ratioW(16),
  }
})

export default LatestNews
