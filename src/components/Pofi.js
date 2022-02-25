import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Categories, COLOURS } from "../database/items";
import Material from "react-native-vector-icons/MaterialIcons";

export default function Profi() {
  return (
    <View style={styles.ViewPrincipal1}>
      <ScrollView>
        <View style={styles.ViewPrincipal2}>
          <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
          <Image
            source={require("../database/images/background.png")}
            style={{ position: "absolute", top: 50, left: -100, right: -100 }}
          />

          <View style={styles.ViewPrincipal3}>
            <TouchableOpacity style={styles.Touchable1}>
              <Image
                source={require("../database/images/profile.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Material
                name="segment"
                style={{
                  fontSize: 28,
                  color: COLOURS.black,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 80 }}>
            <Text style={styles.text1}>Asman</Text>
            <Text style={styles.text2}>Wasili</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewPrincipal1: {
    width: "100%",
    height: "100%",
    backgroundColor: COLOURS.white,
  },
  ViewPrincipal2: {
    width: "100%",
    height: "100%",
    backgroundColor: COLOURS.white,
    position: "relative",
  },
  ViewPrincipal3: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  Touchable1: {
    width: 40,
    height: 40,
  },
  text1: {
    fontSize: 35,
    color: COLOURS.black,
    opacity: 0.5,
    fontWeight: "400",
  },
  text2: {
    fontSize: 40,
    color: COLOURS.black,
    fontWeight: "600",
    letterSpacing: 2,
  },
});
