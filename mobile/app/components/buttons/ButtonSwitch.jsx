import React, {useState} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Switch} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import Fonts from '../../../constants/Fonts';
const ButtonSwitch = ({title}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <TouchableOpacity
      style={styles.container}
    >
      <Text style={styles.title}>
        {title}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#592086" }}
        thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: ratioW(16),
    marginTop: ratioH(16),
    padding: ratioW(16),
    backgroundColor: '#F3F4F6',
    width: ratioW(336),
    height: ratioH(56),
    borderRadius: ratioW(12),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#666C8E',
    fontSize: ratioH(18),
    ...Fonts.black,
    textAlign: 'center',
  },
})

export default ButtonSwitch
