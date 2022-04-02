import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from "../Components/Swipers";
const OfferDetailScreen = () => {
  return (
    <View>
     <View style={styles.swiper}>
        <Swiper />
      </View>
    </View>
  )
}

export default OfferDetailScreen

const styles = StyleSheet.create({
    swiper: {
        height: 200,
      },
})