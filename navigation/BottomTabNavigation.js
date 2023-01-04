import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "../screens/SearchScreen";
import ReelsScreen from "../screens/ReelsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="search" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="video-camera" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: () => <AntDesign name="hearto" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
