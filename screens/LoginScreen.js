import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import LoginForm from "../components/loginScreen/LoginForm";

const Instagram_Logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png";
const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LoginScreen</Text>
      <View style={styles.logoContainer}>
        <Image source={{ uri: Instagram_Logo, height: 100, width: 100 }} />
      </View>
      <LoginForm navigation={navigation} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  title: { fontSize: 20, textAlign: "center", fontWeight: "bold" },
});
export default LoginScreen;
