import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { ProfileBody, ProfileButtons } from "./ProfileBody";
import { Entypo } from "@expo/vector-icons";
import ImageTabView from "../components/profile/ImageTabView";
const ProfileScreen = () => {
  let circuls = [];
  let numberofcircles = 10;

  for (let index = 0; index < numberofcircles; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View style={styles.icons}>
            <Entypo name="plus" size={24} color="black" />
          </View>
        ) : (
          <View
            style={[styles.icons, { backgroundColor: "black", opacity: 0.1 }]}
          ></View>
        )}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <ProfileBody
          name="Ashish Ranjan"
          accountName="adipt_anishq"
          profileImage={require("../assets/images/profile.jpg")}
          followers="3.6M"
          following="360"
          post="100"
        />
        <ProfileButtons
          id={0}
          name="Ashish Ranjan"
          accountName="adipt_anishq"
          profileImage={require("../assets/images/profile.jpg")}
        />
      </View>
      <View>
        <Text style={styles.text}>Story HighLights</Text>
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {circuls}
        </ScrollView>
      </View>
      <ImageTabView />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  container2: {
    width: "100%",
    padding: 10,
  },
  text: {
    padding: 10,
    letterSpacing: 1,
    fontSize: 14,
  },
  scrollView: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  icons: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProfileScreen;
