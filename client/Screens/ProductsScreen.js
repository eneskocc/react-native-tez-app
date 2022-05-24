import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState,useEffect,componentDidMount } from "react";
import HomeCard from "../Components/HomeCard";
import MyButton from "../Components/MyButton";
import { Dimensions } from "react-native";
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
import { useSelector, useDispatch } from "react-redux";
const windowWidth = Dimensions.get("window").width;
const ProductsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data1, setData1] = useState([null]);
  const [sehir, setSehir] = useState("Sehir giriniz");
  const dispatch = useDispatch();
  const token = useSelector(selectLogin);
  const getTeklif = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/teklif/getir", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token.token,
        },
        body: JSON.stringify({
          user_id: token.user._id,
        }),
      });
      const json = await response.json();
      setData1(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    //Runs only on the first render
    getTeklif();
  }, []);
   
  return (
    <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView>
            <View style={styles.card}>
              {data1.map((item, index) => (
                <HomeCard props={item} key={index} />
              ))}
            </View>
          </ScrollView>
        )}
      </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    backgroundColor: "#fafafa",
    paddingBottom:10,
  },
  input: {
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#f1f1f1",
    color: "#999",
    marginBottom: 4,
    fontSize: 15,
    fontWeight: "600",
    marginHorizontal: 20,
  },
  button: {
    alignItems: "center",
    fontSize: 24,
    marginVertical: 14,
    color: "#333",
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: "#ffd301",
  },
  card:{
    width: windowWidth,
    flexWrap: "wrap",
    flexDirection: "row",
  }
})