import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
const HomeCard = () => {
    const navigation = useNavigation();
    function GoDetail() {
        navigation.navigate('Detail');
      }
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={require("../img/mac.webp")}
      />
      <TouchableOpacity style={styles.like}>
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
    width: 185,
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
});
