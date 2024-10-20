import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Animated, Text} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import TabIcon from "./TabIcon";
import Fonts from "../../../constants/Fonts";

const TabItem = ({isFocused, type, color}) => {
  const [translateY] = useState(new Animated.Value(0))
  const translateIcon = (val) => {
    Animated.spring(translateY, {
      toValue: val,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    if (isFocused) {
      translateIcon(-ratioH(22))
    }
    else {
      translateIcon(0)
    }
  }, [isFocused]);

  return (
    <View>
      <Animated.View style={{ transform: [{translateY}]}}>
        <TabIcon
          screen={type}
          color={isFocused ? 'white' : color}
          size={ratioW(24)}
        />
      </Animated.View>
      <Text style={[styles.tabLabel, { color: isFocused ? 'white' : color }]}>
        {type}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  tabLabel: {
    ...Fonts.medium,
    marginTop: ratioH(4),
  }
})

export default TabItem
