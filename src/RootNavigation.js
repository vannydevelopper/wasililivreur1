import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Profil from "./screens/Profil";
import Home from "./screens/Home";
import OrderDelivery from "./screens/OrderDelivery";
import Index from "./screens/Index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpSCreen from "./screens/SignUpSCreen";

const Tab = createMaterialTopTabNavigator();

const RootNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Commande"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="command" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="historique"
        component={Index}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Map"
        component={OrderDelivery}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="map-pin" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profil"
        component={Profil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
