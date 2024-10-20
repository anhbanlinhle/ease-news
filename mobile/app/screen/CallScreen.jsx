import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Alert, FlatList, Text, SafeAreaView} from 'react-native'
import AppButton from "../components/AppButton";
import {getEmailClients, openComposer, openInbox} from "react-native-email-link";
import Mailer from "react-native-mail";

const emailBody = `
  <b>a bold text</b>
  <br/>
  <span style="color: red">a red text</span>
  <br/>
  <h1>a title</h1>
`

const CallScreen = () => {
  const handleSendEmail = () => {
    Mailer.mail({
      subject: 'mail using react-native-mail',
      recipients: ['vietlinhlv.uet@gmail.com'],
      body: emailBody
      ,
      customChooserTitle: 'mail using react-native-mail', // Android only (defaults to "Send Mail")
      isHTML: true,
    }, (error, event) => {
      Alert.alert(
        error,
        event,
        [
          {text: 'Ok', onPress: () => console.log(event, '\n', error)},
          {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
        ],
        {cancelable: true}
      )
    });
  }

  const handleSendEmailLink = () => {
    openComposer({
      to: "vietlinhlv.uet@gmail.com",
      subject: "mail using react-native-mail-link",
      body: emailBody,
    }).
    catch((e) => Alert.alert('Error', e.message))
  }

  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <AppButton
        label={'react-native-email-link'}
        onPress={() =>  handleSendEmailLink()}
        customStyles={{backgroundColor: 'blue'}}
        enabled={true}
      />

      <AppButton
        label={'react-native-email'}
        onPress={() => handleSendEmail()}
        enabled={true}
        customStyles={{backgroundColor: 'blue'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default CallScreen
