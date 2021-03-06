import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectObje,
  selectLogin,
} from '../reducers/counterSlice';
import HomeStackScreen from "./HomeStackScreen";
import OffersStackScreen from "./OffersStackScreen";
import ProfileStackScreen from "./ProfileStackScreen";
import LoginStackScreen from "./LoginStackScreen";
import LoginScreen from "../Screens/LoginScreen";
const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  const isLogin = useSelector(selectLogin);
  console.log(isLogin);
  return (
    <NavigationContainer>
      {isLogin ? (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="home"
                  color={"black"}
                  style={styles.icons}
                  size={24}
                />
              ),
            }}
          />
          <Tab.Screen
            name=" "
            component={OffersStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <View style={styles.iconsAdd}>
                  <MaterialIcons name="local-offer" size={35} color="white" />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: "Search",
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="ios-search"
                  size={24}
                  style={styles.icons}
                  color="black"
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <LoginStackScreen />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconsAdd: {
    position: "relative",
    width: 60,
    height: 60,
    backgroundColor: "#9DD6EB",
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 10,
    marginBottom: 15,
  },
  iconsAddText: {
    color: "#fafafa",
    paddingVertical: 10,
  },
});
