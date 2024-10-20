import React from 'react'
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList} from 'react-native'
import {ratioH, ratioW} from "../../utils/converter";
import Fonts from "../../constants/Fonts";
import Icons from "../../constants/Icons";
import chatData from "../../data/chats.json"
import ChatItems from "../components/ChatItems";
import LinearGradient from "react-native-linear-gradient";

const ChatScreen = () => {
  const renderHeader = () => {
    return (
      <LinearGradient
        colors={['#C8ACD6', '#A393EB', '#2E236C', '#17153B']}
        style={styles.headerContainer}
      >
        <TouchableOpacity style={styles.leftButton} hitSlop={10}>
          <Icons.Menu width={ratioH(28)} height={ratioH(28)} stroke={'#fff6e9'}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Chats</Text>
        <TouchableOpacity style={styles.rightButton} hitSlop={10}>
          <Icons.Edit width={ratioH(28)} height={ratioH(28)} stroke={'#fff6e9'} fill={'#fff6e9'}/>
        </TouchableOpacity>
      </LinearGradient>
    )
  }

  const renderBody = () => {
    return (
      <View style={styles.bodyContainer}>
        <FlatList
          data={chatData}
          renderItem={({item}) => (
            <ChatItems
              avatar={item.avatar}
              title={item.title}
              latestMessage={item.latestMessage}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }

  const renderFooter = () => {
    return (
      <SafeAreaView style={styles.footerContainer}>
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderBody()}
      {/*{renderFooter()}*/}
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: ratioH(100),
    width: '100%',
    paddingTop: ratioH(28),
    borderBottomLeftRadius: ratioH(28),
    borderBottomRightRadius: ratioH(28),
  },
  headerText: {
    fontSize: ratioH(28),
    color: '#ffffff',
    ...Fonts.black
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#8cbeea",
  },
  footerContainer: {
    height: ratioH(80),
    width: '100%',
    backgroundColor: '#001c4b',
    borderTopLeftRadius: ratioH(20),
    borderTopRightRadius: ratioH(20),
  },
  leftButton: {
    alignItems: "flex-start",
    width: ratioH(40),
    height: ratioH(40),
    justifyContent: 'center',
    margin: ratioW(20)
  },
  rightButton: {
    alignItems: "flex-end",
    width: ratioH(40),
    height: ratioH(40),
    justifyContent: 'center',
    margin: ratioW(20)
  }
})

export default ChatScreen
