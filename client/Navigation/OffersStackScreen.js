import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OfferScreen from '../Screens/OfferScreen';
const OffersStack = createNativeStackNavigator();
const OffersStackScreen = () => {
  return (
    <OffersStack.Navigator>
      <OffersStack.Screen name="Offer Screen" component={OfferScreen} />
      <OffersStack.Screen name="home" component={OfferScreen} />
      <OffersStack.Screen name="article" component={OfferScreen} />
    </OffersStack.Navigator>
  )
}

export default OffersStackScreen

const styles = StyleSheet.create({})