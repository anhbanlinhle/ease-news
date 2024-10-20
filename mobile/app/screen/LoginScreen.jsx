import React, {useEffect, useRef, useState} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Keyboard,
  Platform, Pressable
} from 'react-native'
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import {useNavigation} from "@react-navigation/native";
import {ratioH, ratioW} from "../../utils/converter";
import Icons from "../../constants/Icons";
import Loading from "../components/Loading";
import Fonts from "../../constants/Fonts";

const LoginScreen = () => {
  const navigation = useNavigation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [enableLogin, setEnableLogin] = useState(false)

  const loading = useRef(null)

  useEffect(() => {
    setEnableLogin(username.length > 0 && password.length > 0)
  }, [username, password]);

  const handleLogin = () => {
    Keyboard.dismiss()
    loading.current.show()
    setTimeout(() => {
      loading.current.hide()
      navigation.navigate('Home')
    }, 2000)
  }

  const renderLogo = () => {
    return (
      <View style={styles.logoContainer}>
        <Icons.Logo width={ratioH(200)} height={ratioH(200)}/>
      </View>
    )
  }

  const renderButtons = () => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}
      >
        <AppInput
          placeholder="username"
          customStyles={styles.textInputStyle}
          onChange={(text) => setUsername(text)}
        />
        <AppInput
          placeholder="password"
          customStyles={styles.textInputStyle}
          onChange={(text) => setPassword(text)}
          isPassword
        />
        <AppButton
          label='Chat!'
          customStyles={styles.buttonStyle}
          onPress={() => handleLogin()}
          enabled={enableLogin}
        />
      </KeyboardAvoidingView>
    )
  }

  const renderTermsAndConditions = () => {
    return (
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By using this app, you agree to our {' '}
        </Text>
        <TouchableOpacity>
          <Text style={styles.termsLink}>
            Terms & Conditions
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.container}
        onPress={Keyboard.dismiss}
      >
        {renderLogo()}
        {renderButtons()}
        {renderTermsAndConditions()}
      </Pressable>
      <Loading ref={loading}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8cbeea",
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyboardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: ratioH(48)
  },
  textInputStyle: {
    backgroundColor: '#fff6e9'
  },
  buttonStyle: {
    backgroundColor: '#001c4b',
    marginTop: ratioH(24)
  },
  termsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: ratioH(80)
  },
  termsText: {
    color: '#001c4b',
    ...Fonts.lightItalic
  },
  termsLink: {
    color: '#b85c3c',
    ...Fonts.lightItalic
  }
})

export default LoginScreen
