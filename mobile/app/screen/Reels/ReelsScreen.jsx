import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from "../../components/Header";
import { SampleContext } from '../../../context/SampleContext';

const ReelsScreen = () => {
  const { isDarkMode } = useContext(SampleContext);

  return (
    <SafeAreaView style={[styles.container,
      {backgroundColor: isDarkMode ? '#28231d' : '#ffffff'}
    ]}>
      <Header title={'Hình ảnh'}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ReelsScreen
