import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import Icons from "../../../constants/Icons";
import LinearGradient from "react-native-linear-gradient";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={'Tìm kiếm'}
        placeholderTextColor={'#b3b3b3'}
      />
      <Icons.Search width={16} height={16}/>
      <TouchableOpacity>
        <LinearGradient colors={['#ff3a44', '#ff8086']} style={styles.icon}>
          <Icons.Voice />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: ratioW(344),
    height: ratioH(32),
    flexDirection: 'row',
    borderRadius: ratioW(16),
    borderWidth: 2,
    borderColor: '#e8e8ee',
    marginLeft: ratioW(16),
    marginTop: ratioH(8),
    alignItems: 'center',
  },
  input: {
    width: ratioW(273),
    height: ratioH(40),
    marginLeft: ratioW(16),
  },
  icon: {
    width: ratioH(30),
    height: ratioH(30),
    borderRadius: ratioW(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: ratioW(8),
  }
})

export default SearchBar
