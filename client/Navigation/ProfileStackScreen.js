import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from '../Screens/ProfileScreen';
import ProductsScreen from '../Screens/ProductsScreen';
import UserOffersScreen from '../Screens/UserOffersScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
const ProifleStack = createNativeStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProifleStack.Navigator>
      <ProifleStack.Screen name="Offer Screen" component={ProfileScreen} />
      <ProifleStack.Screen name="Products" component={ProductsScreen} />
      <ProifleStack.Screen name="Offers" component={UserOffersScreen} />
      <ProifleStack.Screen name="Favorite" component={FavoriteScreen} />
    </ProifleStack.Navigator>
  )
}

export default ProfileStackScreen

const styles = StyleSheet.create({})