import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TekliflerCard = (props) => {
    console.log(props);
  return (
    <View style={styles.card}>
      <Text>Kullancı adı {props.props.username}</Text>
      <Text>verilen teklif {props.props.deger}</Text>
    </View>
  )
}

export default TekliflerCard

const styles = StyleSheet.create({
    card:{
        width:'90%',
        marginVertical:20,
        marginHorizontal:20,
        borderRadius:5,
        backgroundColor:'#fafafa',
        flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    }
})