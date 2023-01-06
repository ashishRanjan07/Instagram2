import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
const ImageTabView = () => {
  const Tab = createMaterialTopTabNavigator();

  let sqaure = [];
  let numberOfSquare = 18;
  for (let index = 0; index < numberOfSquare; index++) {
    sqaure.push(
      <View key={index}>
        <View style={styles.containerSquare}></View>
      </View>
    );
  }
  const Posts = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.post}>
        <View style={styles.postview}>{sqaure}</View>
      </ScrollView>
    );
  };
  const Videos = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.post}>
        <View style={styles.postview}>{sqaure}</View>
      </ScrollView>
    );
  };
  const Tags = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.post}>
        <View style={styles.postview}>{sqaure}</View>
      </ScrollView>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: "black",
          height: 1.5,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Posts") {
            iconName = focused ? "ios-apps-sharp" : "ios-apps-sharp";
            color = focused ? "black" : "gray";
          } else if (route.name === "Videos") {
            iconName = focused ? "ios-play-circle" : "ios-play-circle-outline";
            color = focused ? "black" : "gray";
          } else if (route.name === "Tags") {
            iconName = focused ? "ios-person" : "ios-person-outline";
            color = focused ? "black" : "gray";
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Videos" component={Videos} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  post: {
    width: "100%",
    height: "100%",
  },
  postview: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexWrap: "wrap",
    flexDirection: "row",
    paddingVertical: 5,
    // paddingHorizontal: 2,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  containerSquare: {
    width: 130,
    height: 130,
    marginVertical: 0.5,
    backgroundColor: "black",
    opacity: 0.1,
  },
});
export default ImageTabView;
