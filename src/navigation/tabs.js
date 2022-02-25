import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? "blue" : "#272727"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="search"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="heart"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name="heart" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="users"
        component={Home}
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

export default Tabs;
