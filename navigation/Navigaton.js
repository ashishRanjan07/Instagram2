import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import NewPostScreen from "../screens/NewPostScreen";

const Stack = createStackNavigator();

export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name="NewPostScreen" component={NewPostScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);
