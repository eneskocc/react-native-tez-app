import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, componentDidMount } from "react";
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
  incrementFAV,
  selectUser,
} from "../reducers/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import TekliflerCard from "../Components/TekliflerCard";
const OfferDetailScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector(selectLogin);
  const teklif = props.route.params.props;
  console.log('aaa',teklif);
  const [deger, setDeger] = useState(null);
  const [user, setUser] = useState(null);
  const [teklifler, setTeklifler] = useState(null);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/home/user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token.token,
        },
        body: JSON.stringify({
          user_id: teklif.user_id,
        }),
      });
      const json = await response.json();
      setUser(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };
  const getTeklifVer = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/teklifler", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token.token,
        },
        body: JSON.stringify({
          user_id: token.user._id,
          username: token.user.username,
          teklif_id: teklif._id,
          deger: deger,
        }),
      });
      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
console.log(user);
  const getTeklifGetir = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/teklifler/getir",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-access-token": token.token,
          },
          body: JSON.stringify({
            teklif_id: teklif._id,
          }),
        }
      );
      const json = await response.json();
      setTeklifler(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
      <Image
        style={styles.img2}
        source={{ uri: 'http://localhost:3000/' + 'show/' + teklif.photo }}
      />
      </View>
      <ScrollView>
        {isLoading2 ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.tabView}>
            <Image style={styles.img} source={{ uri: 'http://localhost:3000/' + 'show/' + user.avatar }} />
            <View>
              <Text>
                {user.name} {user.surname}{" "}
              </Text>
              <Text>
                {teklif.name} {teklif.price}{" TL"}
              </Text>
            </View>
            <TouchableOpacity style={styles.like} onPress={() => dispatch(incrementFAV(teklif))}>
              <FontAwesome name="heart" size={35} color="red" />
            </TouchableOpacity>
          </View>
        )}
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
              onChangeText={setDeger}
              value={deger}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.teklif} onPress={getTeklifVer}>
          <View style={styles.teklif1}>
            <Text style={styles.teklifText}>Teklif ver</Text>
            <MaterialIcons name="local-offer" size={28} color="black" />
          </View>
        </TouchableOpacity>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView>
            <View style={styles.card}>
              {teklifler.map((item, index) => (
                <TekliflerCard props={item} key={index} />
              ))}
            </View>
          </ScrollView>
        )}
        <TouchableOpacity style={styles.teklif} onPress={getTeklifGetir}>
          <View style={styles.teklif1}>
            <Text style={styles.teklifText}>Teklifleri Getir</Text>
            <MaterialIcons name="local-offer" size={28} color="black" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default OfferDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    paddingBottom: 200,
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
    justifyContent:'center',
    alignItems:'center',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 25,
  },
  img2: {
    width: '95%',
    height: 200,
    borderRadius: 15,
    marginVertical:20,

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
    marginVertical: 10,
    borderColor: "#9DD6EB",
    backgroundColor: "#fafafa",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  teklif1: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  teklifText: {
    fontSize: 25,
    paddingHorizontal: 20,
  },
});
