import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  decrementFAV,
  incrementFAV,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectObje,
  selectFavorite,
} from "../reducers/counterSlice";
import HomeCard from "../Components/HomeCard";
const FavoriteScreen = () => {
    const dispatch = useDispatch();
    const obje2 = useSelector(selectFavorite);
  return (
    <View style={styles.card}>
         {obje2.map((item, index) => (
            <HomeCard key={item.id} props={'enes'}/>
          ))}
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    card: {
        width: windowWidth,
        flexWrap: "wrap",
        flexDirection: "row",
        paddingHorizontal: 5,
        paddingVertical: 5,
        alignItems: "center",
        backgroundColor: "#fafafa",
      },
})