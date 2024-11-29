import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Text, SafeAreaView} from 'react-native'
import {ScrollView} from "react-native-gesture-handler";
import {ratioH} from "../../../utils/converter";
import Header from "../../components/Header";
import Section from "./Section";
import {useDispatch} from "react-redux";
import {getNewsByCategoryAction} from "../../../redux/reducers/newsSlice";

const TrendingScreen = () => {
  const [newsData, setNewsData] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewsByCategoryAction({
      category: 'Xu Hướng',
      onSuccess: (data) => setNewsData(data),
      onFail: (error) => console.log(error)
    }))
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header title={'Xu hướng'}/>
        <Section title={'ĐANG ĐƯỢC QUAN TÂM'} data={newsData.slice(0,3)}/>
        <Section title={'NÓNG 24H'} data={newsData.slice(3,6)}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: ratioH(96),
  }
})

export default TrendingScreen
