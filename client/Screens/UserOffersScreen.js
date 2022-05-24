import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState,useEffect,componentDidMount } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Swiper from "../Components/Swipers";
import Input from "../Components/Input";
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
import TekliflerCard from "../Components/TekliflerCard";
const UserOffersScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector(selectLogin);
  
  const [deger, setDeger] = useState(null);
  const [teklifler, setTeklifler] = useState(null);
  const getTeklifGetir = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/teklifler/getirUser",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-access-token": token.token,
          },
          body: JSON.stringify({
            user_id: token.user._id,
          }),
        }
      );
      const json = await response.json();
      setTeklifler(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    //Runs only on the first render
    getTeklifGetir();
  }, []);
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <View style={styles.card}>
            {teklifler.map((item, index) => (
              <TekliflerCard props={item} key={index} />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default UserOffersScreen;

const styles = StyleSheet.create({});
