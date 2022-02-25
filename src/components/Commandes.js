import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Categories, COLOURS } from "../database/items";

const RenderCategories = ({
  item,
  index,
  currentSelected,
  setCurrentSelected,
}) => {
  // console.log(currentSelected);
  const [show, setShow] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.main_container}
        onPress={() => {
          setShow((p) => !p);
          setCurrentSelected(index);
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
      {show && <Post post={item} />}
    </View>
  );
};

const Post = ({ post }) => {
  console.log(post);
  return post.items.map((item, index) => {
    return (
      <View key={index}>
        <TouchableOpacity>
          <View>
            <Text>{item.name}</Text>
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

          <Text
          // style={{
          //   fontSize: 38,
          //   color: COLOURS.black,
          //   fontWeight: "800",
          //   paddingHorizontal: 20,
          //   maxWidth: 310,
          // }}
          >
            {item.resto}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: COLOURS.accentRed,
                fontWeight: "900",
                paddingRight: 5,
                paddingBottom: 8,
              }}
            >
              ₹
            </Text>
            <Text
              style={{
                fontSize: 38,
                color: COLOURS.accentRed,
                fontWeight: "900",
              }}
            >
              {item.price}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  });
};

export default function Commandes() {
  const [currentSelected, setCurrentSelected] = useState(0);

  const renderItem = ({ item, index }) => {
    return (
      <RenderCategories
        item={item}
        index={index}
        currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
      />
    );
  };
  return (
    <FlatList
      data={Categories}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      // renderItem={({ item, index }) => {
      //   return (
      //     <RenderCategories
      //       item={item}
      //       currentSelected={currentSelected}
      //       setCurrentSelected={setCurrentSelected}
      //     />
      //   );
      // }}
    />
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
