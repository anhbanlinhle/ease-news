import React, {useState} from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import FilterItem from "./FilterItem";

const catgories = [
  'Lọc',
  'Sức Khỏe',
  'Công Nghệ',
  'Thể Thao',
  'Chính Trị',
  'Giáo Dục',
  'Du Lịch',
  'Nghệ Thuật',
  'Giải Trí',
  'Thời Trang',
]

const Filter = () => {
  const [currentFilter, setCurrentFilter] = useState(catgories[0] || 'All');
  return (
    <View style={styles.container}>
      <FlatList
        data={catgories}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: ratioW(8)}}/>}
        renderItem={({item}) =>
          <FilterItem
            item={item}
            focus={item === currentFilter}
            onPress={() => setCurrentFilter(item)}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: ratioH(4),
    marginLeft: ratioW(16),
  },
  item: {
    width: ratioW(69),
    height: ratioH(32),
  }
})

export default Filter
