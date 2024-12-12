import React, {useEffect, useState, useContext} from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import SmallNews from "../../components/thumbnails/SmallNews";
import Icons from "../../../constants/Icons";
import {useDispatch} from "react-redux";
import {getNewsByCategoryAction} from "../../../redux/reducers/newsSlice";
import {useNavigation} from "@react-navigation/native";
import Fonts from '../../../constants/Fonts';
import { SampleContext } from '../../../context/SampleContext';

const FavouriteNews = () => {
  const [newsData, setNewsData] = useState([]);
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const { isDarkMode } = useContext(SampleContext);

  useEffect(() => {
    dispatch(getNewsByCategoryAction({
      category: 'Gợi Ý',
      onSuccess: (data) => setNewsData(data),
      onFail: (error) => console.log(error)
    }))
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={[styles.title,
          {color: isDarkMode ? 'white' : 'black'}]}>
          Có thể bạn sẽ thích
        </Text>
        <Icons.Pin style={styles.icon}/>
      </View>
    )
  }

  const renderSmallNews = () => {
    return (
      <FlatList
        style={styles.news}
        data={newsData}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={{height: ratioW(8)}}/>}
        renderItem={({item}) => {
          return (
            <SmallNews
              cover={item?.cover}
              title={item?.title}
              author={item?.author}
              timestamp={item?.timestamp}
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
      {renderSmallNews()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ratioH(8),
    marginBottom: ratioH(8),
  },
  header: {
    width: ratioW(345),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: ratioH(24),
    ...Fonts.semiBold,
    color: 'black'
  },
  news: {
    marginTop: ratioH(16)
  },
  icon: {
    marginLeft: ratioW(16),
    width: ratioW(16),
    height: ratioH(16),
  }
})

export default FavouriteNews
