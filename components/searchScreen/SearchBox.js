import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={24}
        color="black"
        style={styles.searchicon}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    position: "relative",
    marginTop: 10,
  },
  searchicon: {
    opacity: 0.7,
    position: "absolute",
    zIndex: 1,
    left: 25,
  },
  textInput: {
    width: "94%",
    backgroundColor: "#ebebeb",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    padding: 4,
    paddingLeft: 40,
  },
});

export default SearchBox;
