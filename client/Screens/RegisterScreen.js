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
} from "react-native";
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

export default function RegisterScreen() {
  const navigation = useNavigation();
  function GoDetail() {
    navigation.navigate("Login");
  }
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const obje2 = useSelector(selectLogin);
  console.log(obje2);
  const dispatch = useDispatch();
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    console.log(currentDate);
    setDate(currentDate);
  };

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
            <Input
              returnKeyType={"next"}
              autoCapitalize="none"
              placeholder="Kullanıcı Adı"
            />
            <Input
              returnKeyType={"next"}
              secureTextEntry={true}
              placeholder="Şifre"
            />
            <Input
              returnKeyType={"next"}
              autoCapitalize="none"
              placeholder="İsim"
            />
            <Input
              returnKeyType={"go"}
              autoCapitalize="none"
              placeholder="Soyisim"
            />
            <Input
              returnKeyType={"go"}
              autoCapitalize="none"
              placeholder="Şehir"
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
              onPress={() => dispatch(increment(obje2))}
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
});
