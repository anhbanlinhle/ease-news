import React from 'react'
import {View, StyleSheet, Text, Alert} from 'react-native'
import {useCalendarEvents} from "../../hooks/useCalendarEvents";

const StoryScreen = () => {
  const events = useCalendarEvents()

  return (
    <View style={styles.container}>
      <Text>
        {JSON.stringify(events)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default StoryScreen
