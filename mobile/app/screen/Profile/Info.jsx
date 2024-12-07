import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import Fonts from '../../../constants/Fonts';

const Info = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t1.6435-9/117172758_625165341745963_5097463066387294827_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEMn34f7YNtYZD0t7U_xtQA1zw_L2ctSq7XPD8vZy1KrpeNUf5Qbixr1al8q7yDdUwtCpFpzAOWJek5qV54RG6K&_nc_ohc=W6NeOrRnb7EQ7kNvgEMLGKE&_nc_zt=23&_nc_ht=scontent.fhan18-1.fna&_nc_gid=A7BA-RNKtRSP9FO1l3qOXYf&oh=00_AYBlW5h8TSSX1uq8KogJmiTI-WDB8MQTXKOTJ6s8GvqfDQ&oe=674F2A84'}}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Viet Linh</Text>
        <Text style={styles.email}>vietlinhlv.uet@gmail.com</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: ratioH(24),
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: ratioW(16),
  },
  avatar: {
    width: ratioW(72),
    height: ratioH(72),
    borderRadius: ratioW(50),
  },
  info: {
    marginLeft: ratioW(24),
    flexDirection: 'column',
  },
  name: {
    color: '#333647',
    fontSize: ratioH(16),
    ...Fonts.extraBold,
  },
  email: {
    color: '#7c82a1',
    fontSize: ratioH(14),
    ...Fonts.regular,
    marginTop: ratioH(4),
  }
})

export default Info
