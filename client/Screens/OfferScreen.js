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
export default function OfferScreen() {
  const [image, setImage] = useState(null);
  const [selectedValue, setSelectedValue] = useState("java");
  const img = [];
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
    img.push(image);
    console.log(img);
  };

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
          style={{ height: 200,}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="SÜRE NE KADAR" value="224" />
          <Picker.Item label="1 GÜN" value="24" />
          <Picker.Item label="2 GÜN" value="48" />
          <Picker.Item label="1 HAFTA" value="12" />
          <Picker.Item label="1 AY" value="242 " />
        </Picker>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },
  input: {
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  inputText: {
    fontSize: 10,
  },
});
