import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
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

export default function LoginScreen() {
  const navigation = useNavigation();
  function GoDetail() {
    navigation.navigate("Register");
  }
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
            <Text style={styles.loginAreatitle}>Property Tax Server</Text>
            <Text style={styles.loginAreaDescription}>
              Unque Door No Eaisly Fill Your Entire Property Tax Using App{" "}
            </Text>
            <Text style={styles.signInText}> Sign in </Text>
            <Input
              returnKeyType={"next"}
              autoCapitalize="none"
              placeholder="Username"
            />
            <Input
              returnKeyType={"go"}
              secureTextEntry={true}
              placeholder="Password"
            />
            <MyButton
              textColor={"#fafafa"}
              bgColor={"#92BBD9"}
              text={"Giriş"}
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
