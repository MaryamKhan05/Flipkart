import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AccountScreen from "../screens/AccountScreen";
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoriesScreen";
import NotificationScreen from "../screens/NotificationScreen";
import CartScreen from "../screens/CartScreen";
import Colors from "../../assets/Colors";

const blue = Colors.blue;
const black = Colors.black;
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const size = 20;
  // const [focused, setFocused] = useState(false);
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="home"
              size={size}
              color={focused ? Colors.blue : Colors.black}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="view-grid-outline"
              size={size}
              color={focused ? Colors.blue : Colors.black}
            />
          ),
        }}
        name=" Categories"
        component={CategoryScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name="bell"
              size={size}
              color={focused ? Colors.blue : Colors.black}
            />
          ),
        }}
        name="Notifications"
        component={NotificationScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <EvilIcons
              name="user"
              size={32}
              color={focused ? Colors.blue : Colors.black}
            />
          ),
        }}
        name="Account"
        component={AccountScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="shoppingcart"
              size={size}
              color={focused ? Colors.blue : Colors.black}
            />
          ),
        }}
        name="Cart"
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomTab;
