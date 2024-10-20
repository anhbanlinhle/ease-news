import React, {useEffect, useRef, useState} from 'react'
import {View, StyleSheet, Text, FlatList, SafeAreaView} from 'react-native'
import AppButton from "../components/AppButton.jsx";
import {useCalendarEvents} from "../../hooks/useCalendarEvents.js";
import RNCalendarEvents from "react-native-calendar-events";
import Loading from "../components/Loading.jsx";
import events from "../../data/events";

const ContactScreen = () => {
  const [calendarPermission, setCalendarPermission] = useState('undetermined')
  const [defaultCalendar, setDefaultCalendar] = useState(null)

  const loading = useRef(null)

  useEffect(() => {
    const checkPermission = async () => {
      try {
        const permission = await RNCalendarEvents.checkPermissions();
        if (permission !== 'authorized') {
          setCalendarPermission(await RNCalendarEvents.requestPermissions())
        }
        else {
          setCalendarPermission(permission)
          const _defaultCalendar = await RNCalendarEvents.findCalendars()
          setDefaultCalendar(_defaultCalendar[0])
        }
      }
      catch (e) {
        console.log(e)
      }
    }
    checkPermission()
  }, [calendarPermission]);

  const handleSaveEventsToCalendar = async () => {
    loading.current.show()
    for (let event of events) {
      try {
        await RNCalendarEvents.saveEvent(event.title, {
          calendarId: defaultCalendar.id,
          startDate: event.startDate.toISOString(),
          endDate: event.endDate.toISOString(),
          allDay: event.allDay,
          recurrence: event.recurrence,
          url: event.url,
          location: event.location,
          description: event.description,
          notes: event.description
        })
      }
      catch (e) {
        console.log(e)
      }
    }
    loading.current.hide()
  }

  return (
    <SafeAreaView style={styles.container}>
      {/*<Text>{JSON.stringify(defaultCalendar)}</Text>*/}
      {/*<Text>{calendarPermission}</Text>*/}
      <AppButton
        label="Save Events to Calendar"
        onPress={handleSaveEventsToCalendar}
        enabled={calendarPermission === 'authorized'}
      />
      <Loading ref={loading}/>
    </SafeAreaView>
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

export default ContactScreen
