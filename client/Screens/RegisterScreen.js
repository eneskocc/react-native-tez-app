import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native";
import DatePicker from "react-native-date-picker";
import Input from "../Components/Input";
import MyButton from "../Components/MyButton";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
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
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const obje2 = useSelector(selectLogin);
  console.log(obje2);
  const dispatch = useDispatch();
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
            <Text style={styles.signInText}> Register </Text>
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

            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />

            <MyButton
              textColor={"#fafafa"}
              bgColor={"#92BBD9"}
              text={"Sign in"}
              onPress={() => dispatch(increment(obje2))}
            />
          </View>
        </ScrollView>
        <View style={styles.signupArea}>
          <Text>Dont have an account?</Text>
          <TouchableOpacity onPress={GoDetail}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
});
