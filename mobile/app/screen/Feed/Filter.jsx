import React, {useEffect, useState, useContext} from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import FilterItem from "./FilterItem";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategoriesAction, getNewsAction, getNewsByCategoryAction} from "../../../redux/reducers/newsSlice";
import { SampleContext } from '../../../context/SampleContext';

const Filter = ({onChange}) => {
  const { isDarkMode } = useContext(SampleContext);
  const [categories, setCategories] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('Lọc');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesAction({
      onSuccess: (categories) => {
        setCategories(categories)
      },
      onFail: (error) => {
        console.log(error)
      }
    }))
  }, []);
  return (
    <View style={[styles.container,
    {backgroundColor: isDarkMode ? '#28231d' : 'white'}]}>
      <FlatList
        data={["Lọc", ...categories]}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: ratioW(8)}}/>}
        renderItem={({item}) =>
          <FilterItem
            item={item}
            focus={item === currentFilter}
            onPress={() => {
              setCurrentFilter(item)
              onChange(item)
            }}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: ratioH(12),
    marginLeft: ratioW(16),
  },
  item: {
    width: ratioW(69),
    height: ratioH(32),
  }
})

export default Filter
