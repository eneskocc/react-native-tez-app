import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementFAV,
  increment,
  incrementFAV,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectObje,
} from "../reducers/counterSlice";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const HomeCard = (props) => {
  const navigation = useNavigation();
  function GoDetail() {
    navigation.navigate("Detail", {
      props: props.item,
    });
  }
  const dispatch = useDispatch();
  console.log(props)
  return (
    <View style={styles.card}>
      <Image style={styles.img}  source={{ uri: 'http://localhost:3000/' + 'show/' + props.item.photo }} />
      <TouchableOpacity
        style={styles.like}
        onPress={() => dispatch(incrementFAV(props.item))}
      >
        <FontAwesome name="heart" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.offer} onPress={GoDetail}>
        <MaterialIcons name="local-offer" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  card: {
    width: "44%",
    height: 185,
    backgroundColor: "#fafafa",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  img: {
    width: 185,
    height: 185,
    borderRadius: 20,
  },
  like: {
    position: "absolute",
    top: 145,
    left: 15,
  },
  offer: {
    position: "absolute",
    top: 145,
    right: 15,
  },
  input: {
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#f1f1f1",
    color: "#999",
    marginBottom: 8,
    fontSize: 15,
    fontWeight: "600",
  },
});
