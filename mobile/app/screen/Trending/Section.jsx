import React, { useContext } from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import Icons from "../../../constants/Icons";
import SmallNews from "../../components/thumbnails/SmallNews";
import {useNavigation} from "@react-navigation/native";
import Fonts from '../../../constants/Fonts';
import { SampleContext } from '../../../context/SampleContext';
const Section = ({title, data}) => {
  const navigation = useNavigation()
  const { isDarkMode } = useContext(SampleContext);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Icons.Live width={ratioW(20)} height={ratioH(20)}
        fill={isDarkMode ? '#ffffff' : '#000000'}/>
        <Text style={[styles.title,
          {color: isDarkMode ? 'white' : 'black'}]}>
          {title}
        </Text>
      </View>
    )
  }
  const renderNews = () => {
    return (
      <View style={styles.news}>
        <FlatList
          data={data}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{height: ratioH(8)}}/>}
          renderItem={({item}) => {
            return (
              <SmallNews
                cover={item.cover}
                title={item.title}
                author={item.author}
                timestamp={item.timestamp}
                onPress={() => {
                  navigation.navigate('Article', item)
                }}
              />
            )
          }}
        />
        <TouchableOpacity
        style={[styles.more,
          {backgroundColor: isDarkMode ? '#121212' : '#dadada'}
        ]}>
          <Text style={[styles.moreTitle,
          ]}>
            Xem thêm
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={[styles.container,
      {backgroundColor: isDarkMode ? '#28231d' : '#ffffff'}
    ]}>
      {renderHeader()}
      {renderNews()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginLeft: ratioW(28),
    alignItems: 'center',
    marginTop: ratioH(16),
  },
  title: {
    fontSize: ratioW(18),
    ...Fonts.semiBold,
    color: 'black',
    marginLeft: ratioW(8),
  },
  news: {
    marginTop: ratioH(8),
    marginLeft: ratioW(16),
  },
  more: {
    width: ratioW(345),
    height: ratioH(21),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: ratioH(8),
    backgroundColor: '#dadada',
    borderRadius: ratioW(8),
    marginBottom: ratioH(8),
  },
  moreTitle: {
    color: '#FF3A44',
    fontSize: ratioW(12),
    ...Fonts.lightItalic
  }
})

export default Section
