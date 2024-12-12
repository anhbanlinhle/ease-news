import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from "../../components/Header";
import { SampleContext } from '../../../context/SampleContext';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import Sentence from './Sentence';
import { ratioH } from '../../../utils/converter';

const ReelsScreen = () => {
  const { isDarkMode } = useContext(SampleContext);
  const route = useRoute();
  const content = route?.params?.content;
  const [sentences, setSentences] = useState([]);

  useEffect(() => {
    setSentences(content?.split("."));
  }, [content]);

  const renderItem = ({ item }) => {
    return (
      <Sentence sentence={item}/>
    )
  }

  return (
    <SafeAreaView style={[styles.container,
      {backgroundColor: isDarkMode ? '#28231d' : '#ffffff'}
    ]}>
      <Header title={'Hình ảnh'}/>
      <FlatList
        data={sentences}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingBottom: ratioH(16),
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: ratioH(72),
  },
})

export default ReelsScreen
