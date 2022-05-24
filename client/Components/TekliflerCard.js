import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TekliflerCard = (props) => {
    console.log(props);
  return (
    <View style={styles.card}>
      <Text>Teklif veren Kullancı {props.props.username}</Text>
      <Text>verilen teklif {props.props.deger}</Text>
    </View>
  )
}

export default TekliflerCard

const styles = StyleSheet.create({
    card:{
        borderRadius: 10,
        borderWidth: 3,
        marginHorizontal: 35,
        marginVertical:10,
        borderColor: "#9DD6EB",
        backgroundColor: "#fafafa",
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
    }
})