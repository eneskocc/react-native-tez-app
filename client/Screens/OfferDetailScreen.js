import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Swiper from "../Components/Swipers";
import Input from "../Components/Input";
const OfferDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <Swiper />
      </View>
      <View style={styles.tabView}>
        <Image style={styles.img} source={require("../img/devlet.jpeg")} />
        <Text>Enes koç</Text>
        <TouchableOpacity style={styles.like}>
          <FontAwesome name="heart" size={35} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabView}>
        <TouchableOpacity style={styles.indirim}>
          <Text>%10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.indirim}>
          <Text>%15</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.indirim}>
          <Text>%20</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.indirim}>
          <Text>%25</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.price}>
        <Input
          returnKeyType={"next"}
          autoCapitalize="none"
          placeholder="Price"
        />
      </View>
      <TouchableOpacity style={styles.indirim}>
          <Text>Teklif</Text>
          <MaterialIcons name="local-offer" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default OfferDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },
  swiper: {
    height: 200,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 25,
  },
  tabView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 20,
  },
  like: {
    marginLeft: 205,
  },
  indirim: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#9DD6EB",
    backgroundColor: "#fafafa",
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginHorizontal: 13,
    flexDirection:'row',
  },
  price:{
    paddingVertical:10,
    paddingHorizontal:25
  }
});
