import RNCalendarEvents from "react-native-calendar-events";
import {useEffect, useState} from "react";

const checkPermission = async () => {
  try {
    const permission = await RNCalendarEvents.checkPermissions();
    if (permission !== 'authorized') {
      return await requestPermission();
    }
    return permission
  }
  catch (e) {
    console.log(e)
  }
}
const requestPermission = async () => {
  try {
    return await RNCalendarEvents.requestPermissions();
  }
  catch (e) {
    console.log(e)
  }
}

export const useCalendarEvents = (startDate, endDate) => {
  const [eventsList, setEventsList] = useState([])

  useEffect( () => {
    const fetchEvents = async () => {
      const isAuthorized = await checkPermission()
      if (isAuthorized === 'authorized') {
        try {
          const events = await RNCalendarEvents.fetchAllEvents(
            startDate.toISOString(),
            endDate.toISOString()
          );
          setEventsList(events)
        }
        catch (e) {
          console.log(e)
        }
      }
    }
    fetchEvents()
  }, []);

  return eventsList
}

