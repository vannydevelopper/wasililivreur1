import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import { Categories, COLOURS } from "../database/items";

export default function Commande() {
  const [users, setPosts] = useState([]);
  const [currentSelected, setCurrentSelected] = useState([0]);
  const [showdetail, setShowdetail] = useState(null);

  const renderCategories = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            setCurrentSelected(index);
            setShowdetail(index.toString());
          }}
          style={{
            width: "100%",
            height: 180,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              currentSelected == index ? COLOURS.accent : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 2,
          }}
        >
          <View style={styles.ViewPrincipal}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="crown"
                style={{
                  fontSize: 10,
                  color: COLOURS.accent,
                }}
              />
            </View>
            <View style={{ marginBottom: 50 }}>
              <Text style={styles.text2}>{item.name}</Text>
              <Text style={styles.text1}>{item.quantity}</Text>
              <Text style={styles.text1}>{item.adress}</Text>
            </View>

            <View style={{ width: 150, height: 150, marginRight: -65 }}>
              <Image
                source={item.image}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                }}
              />
            </View>
            <View style={styles.ViewPrincipal1}>
              <View style={styles.ViewPrincipal2}>
                <Text style={{ fontSize: 18, color: COLOURS.black }}>
                  {item.price}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {showdetail && showdetail == index.toString() && (
          <View>
            {item.items.map((detail, index) => {
              return <Text>{detail.name}</Text>;
            })}
          </View>
        )}
      </View>
    );
  };

  const renderItems = ({ data, index }) => {
    return <TouchableOpacity></TouchableOpacity>;
  };
  return (
    <View>
      <FlatList
        data={Categories}
        keyExtractor={(no, index) => index}
        renderItem={renderCategories}
      />
      {Categories[currentSelected].items.map(renderItems)}
    </View>
  );
}

const styles = StyleSheet.create({
  ViewPrincipal: {
    width: "90%",
    height: 160,
    backgroundColor: COLOURS.white,
    borderRadius: 20,
    elevation: 4,
    position: "relative",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text1: {
    fontSize: 12,
    color: COLOURS.black,
    opacity: 0.5,
  },
  text2: {
    fontSize: 22,
    color: COLOURS.black,
    fontWeight: "bold",
    paddingTop: 10,
  },
  ViewPrincipal1: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  ViewPrincipal2: {
    width: 85,
    height: 50,
    backgroundColor: COLOURS.accent,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
