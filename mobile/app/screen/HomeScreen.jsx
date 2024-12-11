import React from 'react'
import {View, StyleSheet} from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabBar from "../components/CustomBottomTab/TabBar";
import TabScreens from "../components/CustomBottomTab/TabScreen";

const HomeScreen = () => {
  const Tab = createBottomTabNavigator()

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Feed'}
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
  },
})

export default HomeScreen
