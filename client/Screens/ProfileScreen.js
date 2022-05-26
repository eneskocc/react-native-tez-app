import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
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
import React, { useState } from "react";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import ProfileCard from "../Components/ProfileCard";
const ProfileScreen = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectLogin);
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headBackground} />
        <TouchableOpacity onPress={pickImage}>
          <ScrollView>
            <View style={styles.loginArea}>
            <Image
        style={styles.img}
        source={{ uri: 'http://localhost:3000/' + 'show/' + token.user.avatar }}
      />
            </View>
          </ScrollView>
        </TouchableOpacity>
        <View style={styles.center}>
          <Text>
            {token.user.name} {token.user.surname}
          </Text>
          <Text>
            <Ionicons name="md-location-outline" size={20} color="black" />
            {token.user.city}
          </Text>
        </View>

        <View style={styles.cardContainer}>
          <ProfileCard
            name="Ürünler"
            navigateName="Products"
            icon="product-hunt"
          />
          <ProfileCard
            name="Teklifler"
            navigateName="Offers"
            icon="product-hunt"
          />
          <ProfileCard
            name="Favoriler"
            navigateName="Favorite"
            icon="product-hunt"
          />
          <ProfileCard
            name="Ayarlar"
            navigateName="Favorite"
            icon="product-hunt"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 180,
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 110,
  },
  headBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 350,
    width: "100%",
    backgroundColor: "#9DD6EB",
  },
  logoDescription: {
    textAlign: "center",
    color: "#fafafa",
  },
  loginArea: {
    textAlign: "center",
    marginHorizontal: 80,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    padding: 20,
    marginVertical: 40,
    backgroundColor: "#fafafa",
    borderRadius: 120,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  cardContainer: {
    width: windowWidth,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  center: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  tinyLogo:{
    width:30,
    height:40,
  }
});
