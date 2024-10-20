import React, {useEffect, useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Text, Animated} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import LinearGradient from "react-native-linear-gradient";
import TabItem from "./TabItem";

const width = ratioW(375)
const MARGIN = ratioW(28)
const BAR_WIDTH = width - MARGIN / 2
const ITEM_WIDTH = BAR_WIDTH/4

const TabBar = ({state, descriptors, navigation}) => {
  const [translateX] = useState(new Animated.Value(0))

  const translateTab = () => {
    Animated.spring(translateX, {
      toValue: state.index * ITEM_WIDTH,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    translateTab(state.index)
  }, [state.index]);

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={['#17153B', '#2E236C', '#A393EB', '#C8ACD6']}
        style={[StyleSheet.absoluteFillObject, styles.container]}/>
      <View style={styles.slidingTabContainer}>
        <Animated.View
          style={[
            styles.slidingTab(descriptors[state.routes[state.index].key].options.tabBarIcon),
            {transform: [{translateX}]}
          ]}
        />
      </View>
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
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: BAR_WIDTH,
    height: ratioH(68),
    position: 'absolute',
    alignSelf: 'center',
    bottom: MARGIN,
    borderRadius: ratioH(16),
    justifyContent: 'space-around',
  },
  slidingTabContainer: {
    width: ITEM_WIDTH,
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  slidingTab: (color) => ({
    width: ratioH(64),
    height: ratioH(64),
    borderRadius: ratioH(64),
    backgroundColor: color,
    bottom: ratioH(32),
    borderWidth: ratioW(8),
    borderColor: 'white',
  }),
})

export default TabBar
