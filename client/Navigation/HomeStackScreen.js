import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View>
      <Text>Enes</Text>
      <Text>Elif</Text>
    </View>
  );
}
const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Feed" component={HomeScreen} />
      <HomeStack.Screen name="home" component={HomeScreen} />
      <HomeStack.Screen name="article" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
