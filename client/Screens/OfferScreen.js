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
import SwitchSelector from "react-native-switch-selector";
export default function OfferScreen() {
  const [selectedValue, setSelectedValue] = useState("java");
  const options = [
    { label: "1 GÜN", value: "1" },
    { label: "2 GÜN", value: "1.5" },
    { label: "1 HAFTA", value: "2" },
  ];
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false}>
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
          <View style={{ marginBottom: 15 }}>
            <Input
              returnKeyType={"next"}
              autoCapitalize="none"
              placeholder="Başlık"
            />
          </View>
          <View>
            <Input
              returnKeyType={"next"}
              autoCapitalize="none"
              placeholder="Fiyat"
            />
          </View>

          <View>
            <Text style={styles.switchText}>Yayın süresini seciniz</Text>
            <SwitchSelector
              options={options}
              initial={0}
              buttonColor={"#92BBD9"}
              borderColor={"#92BBD9"}
              onPress={(value) =>
                console.log(`Call onPress with value: ${value}`)
              }
            />
          </View>
          <Text>Ne sattıyorsunuz</Text>

          <Picker
            selectedValue={selectedValue}
            style={{ height: 50 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>

          <MyButton textColor={"#fafafa"} bgColor={"#92BBD9"} text={"Yükle"} />
        </View>
      </ScrollView>
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
    marginTop: 15,
    fontSize: 10,
  },
  switchText: {
    fontSize: 12,
    paddingHorizontal: "30%",
    paddingVertical: 10,
    marginVertical: 10,
  },
});
