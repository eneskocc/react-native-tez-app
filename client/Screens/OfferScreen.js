import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, StyleSheet,ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
import OfferAddCard from "../Components/OfferAddCard";
export default function OfferScreen() {
  const [image, setImage] = useState(null);
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
      <ScrollView  horizontal={true}>
        <OfferAddCard />
        <OfferAddCard />
        <OfferAddCard />
        <OfferAddCard />
        <OfferAddCard />
        <OfferAddCard />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
