import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  Picker,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
import OfferAddCard from "../Components/OfferAddCard";
import Input from "../Components/Input";
import MyButton from "../Components/MyButton";
export default function OfferScreen() {
  
  const [selectedValue, setSelectedValue] = useState("java");
  

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <OfferAddCard />
        <OfferAddCard />
        <OfferAddCard />
        <OfferAddCard />
      </ScrollView>
      <View style={styles.input}>
        <Text style={styles.inputText}>
          {" "}
          Ne sattığınnı birkaç kelime ile tarif et
        </Text>
        <Input
          returnKeyType={"next"}
          autoCapitalize="none"
          placeholder="Başlık"
        />
        <Input
          returnKeyType={"next"}
          autoCapitalize="none"
          placeholder="Fiyat"
        />
        <Picker
          selectedValue={selectedValue}
          style={{ height: 200 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="SÜRE NE KADAR" value="224" />
          <Picker.Item label="1 GÜN" value="24" />
          <Picker.Item label="2 GÜN" value="48" />
          <Picker.Item label="1 HAFTA" value="12" />
          <Picker.Item label="1 AY" value="242 " />
        </Picker>
        <MyButton textColor={"#fafafa"} bgColor={"#92BBD9"} text={"Yükle"} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  input: {
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  inputText: {
    fontSize: 10,
  },
});
