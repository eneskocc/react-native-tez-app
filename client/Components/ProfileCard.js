import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const ProfileCard = (props) => {
    const navigation = useNavigation();
    function GoDetail() {
        navigation.navigate(props.navigateName);
      }
  return (
    <TouchableOpacity style={styles.container} onPress={GoDetail}>
        <FontAwesome name={props.icon} size={30} color="white" />
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
        flexDirection:'column',
        alignItems:'center',
        paddingTop:10,
    }

})