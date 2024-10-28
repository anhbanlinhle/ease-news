import React, {useEffect, useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Text, Animated} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import TabItem from "./TabItem";

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <TabItem isFocused={isFocused} type={label} color={options.tabBarIcon}/>
            <View style={{height: ratioH(34)}}/>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: ratioW(375),
    height: ratioH(96),
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    borderRadius: ratioH(12),
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: "#a6a6a6"
  }
})

export default TabBar
