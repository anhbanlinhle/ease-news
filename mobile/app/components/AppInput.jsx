import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import {ratioH, ratioW} from "../../utils/converter";
import Fonts from "../../constants/Fonts";

const AppInput = forwardRef(({placeholder, isPassword, onChange, customStyles}, ref) => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <View style={[styles.container(isFocus), customStyles]}>
      <TextInput
        style={styles.text}
        placeholder={placeholder}
        placeholderTextColor="#e5af7d"
        secureTextEntry={isPassword || false}
        textContentType={'none'}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChangeText={text => onChange(text)}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: (isFocus) => ({
    width: ratioW(343),
    height: ratioH(52),
    borderRadius: ratioW(8),
    marginVertical: ratioH(8),
    justifyContent: 'center',
    padding: ratioW(8),
    borderWidth: isFocus ? 2 : 0,
    borderColor: '#001c4b'
  }),
  text: {
    fontSize: ratioH(20),
    marginLeft: ratioW(8),
    color: '#b85c3c',
    ...Fonts.medium
  }
})

export default AppInput
