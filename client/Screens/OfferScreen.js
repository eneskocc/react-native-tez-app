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
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
import OfferAddCard from "../Components/OfferAddCard";
import Input from "../Components/Input";
import MyButton from "../Components/MyButton";
import SwitchSelector from "react-native-switch-selector";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectObje,
  selectLogin,
  selectUser,
} from "../reducers/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
export default function OfferScreen() {
  const [name, SetName] = useState("ürün ismi");
  const [price, SetPrice] = useState("Fiyat");
  const [city, SetCity] = useState("Şehiriniz");
  const [date, SetDate] = useState("gün sayısı yazınız");
  const dispatch = useDispatch();
  const token = useSelector(selectLogin);
  const user = useSelector(selectUser);
  const options = [
    { label: "1 GÜN", value: "1" },
    { label: "2 GÜN", value: "1.5" },
    { label: "1 HAFTA", value: "2" },
  ];
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
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
  };
  const photo = async () => {
    try {
      const formData = new FormData();
      formData.append("myImage", {
        uri: Platform.OS === "android" ? image : image.replace("file://", ""),
        name: "user.png",
        type: "image/jpg",
      });
      await axios
        .post("http://localhost:3000/photo", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        })
        .then((response) => {
          setUrl(response.data.NAME);
          Upload();
          return response.data;
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  const Upload = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/teklif", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token.token,
        },
        body: JSON.stringify({
          name: name,
          user_id: token.user._id,
          price: price,
          photo:url,
          sure: date,
          city: city,
        }),
      });
      const json = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={false}>
        <ScrollView horizontal={true}>
          <TouchableOpacity onPress={pickImage} style={styles.card}>
            <Ionicons name="add" size={104} color="black" />
            {image && (
              <Image
                source={{ uri: image }}
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute",
                  borderRadius: 15,
                  top: 8,
                  left: 8,
                }}
              />
            )}
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.input1}>
          <Text style={styles.inputText}>
            {" "}
            Ne sattığınnı birkaç kelime ile tarif et
          </Text>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              returnKeyType={"next"}
              style={styles.input}
              onChangeText={SetName}
              value={name}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              returnKeyType={"next"}
              style={styles.input}
              onChangeText={SetPrice}
              value={price}
            />
          </View>

          <View>
            <View style={{ marginBottom: 15 }}>
              <TextInput
                returnKeyType={"next"}
                style={styles.input}
                onChangeText={SetCity}
                value={city}
              />
            </View>
            <Text style={styles.switchText}>Yayın süresini seciniz</Text>
            <View style={{ marginBottom: 15 }}>
              <TextInput
                returnKeyType={"next"}
                style={styles.input}
                onChangeText={SetDate}
                value={date}
              />
            </View>
          </View>

          <View style={{ marginVertical: 30 }}>
            <MyButton
              textColor={"#fafafa"}
              bgColor={"#92BBD9"}
              text={"Yükle"}
              onPress={photo}
            />
          </View>
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
  input1: {
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
  card: {
    width: 120,
    height: 120,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "#fafafa",
    borderRadius: 15,
    borderWidth: 1.5,
  },
});
