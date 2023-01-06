import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const MessageScreen = ({ accountName, navigation }) => {
  accountName = "adipt_anishq";
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>

            <Text
              style={{
                marginLeft: 15,
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              {accountName}
            </Text>
            <Feather
              name="chevron-down"
              style={{
                fontSize: 24,
                color: "black",
                paddingHorizontal: 5,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 5,
            }}
          >
            <MaterialIcons
              name="video-call"
              size={35}
              color="black"
              style={{ marginRight: 20 }}
            />
            <Feather
              name="edit"
              size={30}
              color="black"
              style={{ marginRight: 10 }}
            />
          </View>
        </View>
        <Text>Ashish Ranjan</Text>
      </View>
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
});
export default MessageScreen;
