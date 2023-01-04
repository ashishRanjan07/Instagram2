import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import NewPostScreen from "../screens/NewPostScreen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createNativeStackNavigator();
const stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NewPostScreen"
        component={NewPostScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
