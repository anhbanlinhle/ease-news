const baseEvent = (index) => {
  return {
    title: `event test title ${index}`,
    startDate: new Date(2024, 8, 24, 9, 0, 0),
    endDate: new Date(2024, 8, 24, 10, 0, 0),
    allDay: false,
    recurrence: "none",
    url: "",
    location: `event test location ${index}`,
    description: `event test description ${index}`
  }
}

const events = Array.from({length: 40}, (_, index) => baseEvent(index))

export default events
