import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Swiper from "../Components/Swipers";
import Input from "../Components/Input";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectObje,
  selectLogin,
  selectUser,
} from "../reducers/counterSlice";
import { useSelector, useDispatch } from "react-redux";
const OfferDetailScreen = (props) => {
  const dispatch = useDispatch();
  const token = useSelector(selectLogin);
  const teklif=props.route.params.props.props;
  const [deger, setDeger] = useState(null);
  const getTeklifVer = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/home", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token.token,
        },
        body: JSON.stringify({
          user_id: token.user._id,
          username:token.user.username,
          teklif_id:teklif.teklif_id,
          deger:deger,
        }),
      });
      const json = await response.json();
      setData1(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <Swiper />
      </View>
      <View style={styles.tabView}>
        <Image style={styles.img} source={require("../img/devlet.jpeg")} />
        <View>
        <Text>Enes koç</Text>
        
        </View>
        <TouchableOpacity style={styles.like}>
          <FontAwesome name="heart" size={35} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabView}>
        <TouchableOpacity style={styles.indirim}>
          <Text>%10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.indirim}>
          <Text>%15</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.indirim}>
          <Text>%20</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.indirim}>
          <Text>%25</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.price}>
      <View style={{ marginTop: 10 }}>
        <TextInput
          returnKeyType={"next"}
          style={styles.input}
          onChangeText={setSehir}
          value={sehir}
        />
      </View>
      </View>
      <TouchableOpacity style={styles.teklif} onPress={getTeklifUser}>
        <View style={styles.teklif1}>
          <Text style={styles.teklifText}>Teklif ver</Text>
          <MaterialIcons name="local-offer" size={28} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OfferDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },
  input: {
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#f1f1f1",
    color: "#999",
    marginBottom: 4,
    fontSize: 15,
    fontWeight: "600",
    marginHorizontal: 20,
  },
  swiper: {
    height: 200,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 25,
  },
  tabView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 20,
  },
  like: {
    marginLeft: 155,
  },
  indirim: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#9DD6EB",
    backgroundColor: "#fafafa",
    paddingHorizontal: 15,
    paddingVertical: 3,
    marginHorizontal: 13,
    flexDirection: "row",
  },
  price: {
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  teklif: {
    borderRadius: 10,
    borderWidth: 3,
    marginHorizontal: 35,
    borderColor: "#9DD6EB",
    backgroundColor: "#fafafa",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'column',
    alignItems: "center",
    alignContent: "center",
  
  },
  teklif1:{
    flexDirection: 'row',
    alignItems: "center",
    alignContent: "center",
  },
  teklifText:{
    fontSize:25,
    paddingHorizontal:20,
  }
});
