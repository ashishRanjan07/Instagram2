import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import ReelsComponent from "../components/reels/ReelsComponent";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ReelsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text}>Reels</Text>
        <Feather name="camera" size={24} color="white" />
      </View>
      <ReelsComponent />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    position: "relative",
    backgroundColor: "black",
  },
  container2: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
    padding: 10,
  },
  text: { fontSize: 20, fontWeight: "bold", color: "white" },
});
export default ReelsScreen;
