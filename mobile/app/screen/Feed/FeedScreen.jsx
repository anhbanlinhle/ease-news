import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Text, SafeAreaView} from 'react-native'
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import LatestNews from "./LatestNews";
import FavouriteNews from "./FavouriteNews";
import {ScrollView} from "react-native-gesture-handler";
import {ratioH} from "../../../utils/converter";
import {useDispatch} from "react-redux";
import {getNewsAction, getNewsByCategoryAction} from "../../../redux/reducers/newsSlice";

const FeedScreen = () => {
  const dispatch = useDispatch();
  const [currentFilter, setCurrentFilter] = useState('Lọc');
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    if (currentFilter === 'Lọc') {
      dispatch(getNewsAction({
        onSuccess: (data) => {
          setNewsData(data)
        },
        onError: (error) => {
          console.log(error)
        }
      }))
    }
    else {
      dispatch(getNewsByCategoryAction({
        category: currentFilter,
        onSuccess: (data) => {
          setNewsData(data)
        },
        onError: (error) => {
          console.log(error)
        }
      }))
    }
  }, [currentFilter]);

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
          <Filter onChange={setCurrentFilter}/>
          <SearchBar/>
          <LatestNews data={newsData}/>
          <FavouriteNews/>
        </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: ratioH(96),
  },
})

export default FeedScreen
