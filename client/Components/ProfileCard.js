import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileCard = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    container:{
        width:100,
        height:100,
        backgroundColor:'#97CAE5',
        borderRadius:10,
        marginVertical:10,
        marginHorizontal:15,
    }

})