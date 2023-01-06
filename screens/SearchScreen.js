import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import SearchBox from "../components/searchScreen/SearchBox";
import SearchContent from "../components/searchScreen/SearchContent";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const SearchScreen = () => {
  const [image, setImage] = useState(null);
  const getData = (data) => {
    setImage(data);
  };
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        <TouchableOpacity
          style={{
            margin: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="pluscircleo"
            size={30}
            color="black"
            style={{ opacity: 0.5 }}
          />
        </TouchableOpacity>
      </ScrollView>
      {image ? (
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(52,52,52,0.8)",
          }}
        >
          {/* <StatusBar backgroundColor="#525252" barStyle="dark-content" /> */}
          <View
            style={{
              position: "absolute",
              top: windowHeight / 6,
              left: windowWidth / 18,
              backgroundColor: "white",
              width: "90%",
              height: 465,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}
            >
              <Image
                source={image}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontSize: 12, fontWeight: "600" }}>
                  the_anonymous_guys
                </Text>
              </View>
            </View>
            <Image source={image} style={{ width: "100%", height: "80%" }} />
            <View
              style={{
                justifyContent: "space-around",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                padding: 8,
              }}
            >
              <Ionicons name="ios-heart-outline" size={26} color="black" />

              <Ionicons
                name="ios-heart-circle-outline"
                size={26}
                color="black"
              />
              <Feather name="navigation" size={26} color="black" />
            </View>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    position: "relative",
  },
});
export default SearchScreen;
