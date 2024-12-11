import React, { useContext } from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import Header from "../../components/Header";
import Info from "./Info";
import ButtonMore from "../../components/buttons/ButtonMore";
import ButtonLogout from "../../components/buttons/ButtonLogout";
import ButtonSwitch from "../../components/buttons/ButtonSwitch";
import {ratioH} from "../../../utils/converter";
import { SampleContext } from "../../../context/SampleContext";

const ProfileScreen = () => {
  const { isDarkMode } = useContext(SampleContext);
  const renderSeparator = () => {
    return (
      <View
        style={{
          height: ratioH(24),
        }}
      />
    )
  }
  return (
    <SafeAreaView style={[styles.container,
    {backgroundColor: isDarkMode ? '#28231d' : 'white'}]}>
      <Header title={'Cá nhân'}/>
      <Info/>
      <ButtonSwitch title={'Thông báo'}/>
      <ButtonMore
        title={'Ngôn ngữ'}
        onPress={() => console.log('Language')}
      />
      <ButtonMore
        title={'Bảo mật'}
        onPress={() => console.log('Security')}
      />
      {renderSeparator()}
      <ButtonMore
        title={'Quyền riêng tư'}
        onPress={() => console.log('Help')}
      />
      <ButtonMore
        title={'Điều khoản và Điều kiện'}
        onPress={() => console.log('Introduce')}
      />
      {renderSeparator()}
      <ButtonLogout/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
})

export default ProfileScreen
