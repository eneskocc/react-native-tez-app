import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React,{useState} from "react";
import * as ImagePicker from "expo-image-picker";
const ProfileScreen = () => {
  const [image, setImage] = useState(null);
  const img = [];
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
    img.push(image);
    console.log(img);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headBackground} />
      
      <KeyboardAvoidingView behavior={"position"}>
        <TouchableOpacity onPress={pickImage}>
        <ScrollView>
          <View style={styles.loginArea}>
          {image && 
          <Image source={{ uri: image }} style={styles.img} />
       }  
          </View>
        </ScrollView>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 180,
  },
  img: {
    width: '100%',
    height: 220,
    borderRadius: 110,
  },
  headBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 350,
    width: "100%",
    backgroundColor: "#9DD6EB",
  },
  logo0: {
    flexDirection: "row",
    textAlign: "center",
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  logo1: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "#fafafa",
  },
  logo2: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    backgroundColor: "#fafafa",
    color: "#9DD6EB",
    borderRadius: 20,
  },
  logoDescription: {
    textAlign: "center",
    color: "#fafafa",
  },
  loginArea: {
    textAlign: "center",
    marginHorizontal: 80,
    flexDirection:'column',
    alignItems:'center',
    alignContent:'center',
    padding:20,
    marginVertical: 40,
    backgroundColor: "#fafafa",
    borderRadius: 120,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
});
