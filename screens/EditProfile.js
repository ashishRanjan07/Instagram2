import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const EditProfile = ({ route, navigation }) => {
  const { name, accountName, profileImage } = route.params;
  const ToastMessage = () => {
    ToastAndroid.show("Edit Sucessfully!", ToastAndroid.SHORT);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={35} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            ToastMessage();
            navigation.goBack();
          }}
        >
          <Ionicons
            name="checkmark"
            size={35}
            color="black"
            style={{ color: "#3493D9" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        <Image source={profileImage} style={styles.image} />
        <Text style={styles.chnageText}>Change Profile Picture</Text>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ opacity: 0.5 }}>Name</Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ opacity: 0.5 }}>User_Id</Text>
          <TextInput
            placeholder="account name"
            defaultValue={accountName}
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ opacity: 0.5 }}>Website</Text>
          <TextInput placeholder="Website Name" style={styles.textInput} />
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ opacity: 0.5 }}>Bio</Text>
          <TextInput placeholder="Bio" style={styles.textInput} />
        </View>
      </View>
      <View>
        <Text style={styles.text2}>Switch to Professional Account</Text>
      </View>
      <View>
        <Text style={styles.text2}>Personal Information Setting</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container3: {
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  chnageText: {
    color: "#3493D9",
    margin: 10,
    fontWeight: "bold",
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
  },
  text2: {
    marginVertical: 10,
    padding: 10,
    color: "#3493D9",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EFEFEF",
  },
});

export default EditProfile;
