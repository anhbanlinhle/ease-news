import React from 'react'
import {View, StyleSheet, Text, SafeAreaView} from 'react-native'
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import LatestNews from "./LatestNews";
import FavouriteNews from "./FavouriteNews";
import {ScrollView} from "react-native-gesture-handler";
import {ratioH} from "../../../utils/converter";

const FeedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
          <Filter/>
          <SearchBar/>
          <LatestNews/>
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
