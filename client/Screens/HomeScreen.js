import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import HomeCard from "../Components/HomeCard";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HomeCard props={'enes'}/>
        <HomeCard props={'enes'}/>
        <HomeCard props={'enes'}/>
        <HomeCard props={'enes'}/>
        <HomeCard props={'enes'}/>
        <HomeCard props={'enes'}/>
        <HomeCard props={'enes'}/>
        <HomeCard props={'enes'}/>
        <HomeCard props={'enes'}/>
        <HomeCard props={'enes'}/>
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
