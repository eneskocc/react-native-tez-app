import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { Buffer } from "buffer";
import { Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "../Components/Input";
import MyButton from "../Components/MyButton";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectObje,
  selectLogin,
} from "../reducers/counterSlice";
import ImgToBase64 from "react-native-image-base64";
import axios from "axios";
export default function RegisterScreen() {
  const navigation = useNavigation();
  function GoDetail() {
    navigation.navigate("Login");
  }

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [username, SetUsername] = useState("kullanıcı adınız");
  const [password, SetPassword] = useState("null");
  const [name, SetName] = useState("İsminiz");
  const [surname, SetSurname] = useState("Soyisminiz");
  const [city, SetCity] = useState("Şehiriniz");
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const obje2 = useSelector(selectLogin);

  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    console.log(date);
    const currentDate = selectedDate;
    setDate(currentDate);
  };

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

  const Register = async () => {
    try {
      console.log(image);
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
          setUrl(response.data);
          return response.data;
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headBackground} />
      <View>
        <View style={styles.logo0}>
          <Text style={styles.logo1}>SATTIM</Text>
          <Text style={styles.logo2}>GİTTİ </Text>
        </View>

        <Text style={styles.logoDescription}>Property & Tax Survey</Text>
      </View>
      <KeyboardAvoidingView behavior={"position"}>
        <ScrollView>
          <View style={styles.loginArea}>
            <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                paddingHorizontal: 70,
              }}
            >
              <TouchableOpacity onPress={pickImage}>
                <Text style={styles.signInText}> Profil resimi yükle </Text>
                {image && <Image source={{ uri: image }} style={styles.img} />}
              </TouchableOpacity>
            </View>

            <TextInput
              returnKeyType={"next"}
              style={styles.input}
              onChangeText={SetUsername}
              value={username}
            />
            <TextInput
              returnKeyType={"next"}
              secureTextEntry={true}
              style={styles.input}
              onChangeText={SetPassword}
              value={password}
            />
            <TextInput
              returnKeyType={"next"}
              style={styles.input}
              onChangeText={SetName}
              value={name}
            />
            <TextInput
              returnKeyType={"next"}
              style={styles.input}
              onChangeText={SetSurname}
              value={surname}
            />
            <TextInput
              returnKeyType={"next"}
              style={styles.input}
              onChangeText={SetCity}
              value={city}
            />

            <Text>Doğum tarihiniz</Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />

            <MyButton
              textColor={"#fafafa"}
              bgColor={"#92BBD9"}
              text={"Kaydol"}
              onPress={Register}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 100,
  },
  headBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 350,
    width: "100%",
    backgroundColor: "#9DD6EB",
  },
  logo0: {
    flexDirection: "row",
    textAlign: "center",
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  logo1: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "#fafafa",
  },
  logo2: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    backgroundColor: "#fafafa",
    color: "#9DD6EB",
    borderRadius: 20,
  },
  logoDescription: {
    textAlign: "center",
    color: "#fafafa",
  },
  loginArea: {
    textAlign: "center",
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: "#fafafa",
    padding: 20,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  loginAreatitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#9DD6EB",
  },
  loginAreaDescription: {
    fontSize: 11,
    textAlign: "center",
    color: "#7e868f",
    marginVertical: 10,
  },
  signupArea: {
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 15,
    marginVertical: 20,
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
