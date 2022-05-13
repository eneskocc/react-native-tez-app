import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import HomeCard from "../Components/HomeCard";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HomeCard props={'enes'} id={1}/>
        <HomeCard props={'enes'} id={2}/>
        <HomeCard props={'enes'} id={3}/>
        <HomeCard props={'enes'} id={4}/>
        <HomeCard props={'enes'} id={5}/>
        <HomeCard props={'enes'} id={6}/>
        <HomeCard props={'enes'} id={7}/>
        <HomeCard props={'enes'} id={8}/>
        <HomeCard props={'enes'} id={9}/>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
