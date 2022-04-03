import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform ,TouchableOpacity,StyleSheet} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from '@expo/vector-icons';
const OfferAddCard = () => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <TouchableOpacity onPress={pickImage} style={styles.card}>
        <Ionicons name="add" size={104} color="black" />
      {image && 
          <Image source={{ uri: image }} style={{ width: 100, height: 100 ,position:'absolute',borderRadius:15,top:8,left:8,}} />
       }  
    </TouchableOpacity>
  );
};

export default OfferAddCard;

const styles = StyleSheet.create({
    card:{
        width:120,
        height: 120,
        marginVertical:5,
        marginHorizontal:5,
        backgroundColor:'#fafafa',
        borderRadius:15,
        borderWidth:1.5,
    }
});
