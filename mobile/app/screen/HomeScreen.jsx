import React from 'react'
import {View, StyleSheet} from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ChatScreen from "./ChatScreen";
import TabBar from "../components/CustomBottomTab/TabBar";
import ContactScreen from "./ContactScreen";
import CallScreen from "./CallScreen";
import StoryScreen from "./StoryScreen";

const TabScreens = [
  {
    route: "Contacts", label: "Contacts", screen: ContactScreen, color: '#C8ACD6'
  },
  {
    route: "Chats", label: "Chats", screen: ChatScreen, color: '#A393EB'
  },
  {
    route: "Calls", label: "Calls", screen: CallScreen, color: '#444aad'
  },
  {
    route: "Stories", label: "Stories", screen: StoryScreen, color: '#27296D'
  }
]

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Contacts'}
        tabBar={({state, descriptors, navigation}) => (
          <TabBar state={state} descriptors={descriptors} navigation={navigation}/>
        )}
      >
        {TabScreens.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.screen}
            options={{
              tabBarLabel: item.label,
              tabBarIcon: item.color,
            }}
          />
        ))}

      </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
})

export default HomeScreen
