import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FriendsProfileData } from "../components/reels/Database";
import { ProfileBody, ProfileButtons } from "./ProfileBody";
import { AntDesign } from "@expo/vector-icons";
const FriendProfile = ({ route, navigation }) => {
  const { name, profileImage, follow, post, followers, following } =
    route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.container3}>
          <Text style={styles.name}>{name}</Text>
          <Feather name="more-vertical" size={24} color="black" />
        </View>
      </View>
      <ProfileBody
        name={name}
        profileImage={profileImage}
        post={post}
        followers={followers}
        following={following}
      />
      <ProfileButtons id={1} />
      <Text
        style={{
          paddingVertical: 10,
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Suggested for you
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingTop: 10,
        }}
      >
        {name === FriendProfile.name
          ? null
          : FriendsProfileData.map((data, index) => {
              const [isFollow, setIsFollow] = useState(false);
              const [close, setClose] = useState(false);
              return (
                <View key={index}>
                  {data.name === name || close ? null : (
                    <View
                      style={{
                        width: 160,
                        height: 200,
                        margin: 3,
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderColor: "#DEDEDE",
                        borderRadius: 2,
                        position: "relative",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => setClose(true)}
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                        }}
                      >
                        <AntDesign
                          name="close"
                          style={{
                            fontSize: 20,
                            color: "black",
                            opacity: 0.5,
                          }}
                        />
                      </TouchableOpacity>
                      <Image
                        source={data.profileImage}
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 100,
                          margin: 10,
                        }}
                      />
                      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        {data.name}
                      </Text>
                      <Text style={{ fontSize: 12 }}>{data.accountName}</Text>
                      <TouchableOpacity
                        onPress={() => setIsFollow(!isFollow)}
                        style={{ width: "80%", paddingVertical: 10 }}
                      >
                        <View
                          style={{
                            width: "100%",
                            height: 30,
                            borderRadius: 5,
                            backgroundColor: isFollow ? null : "#3493D9",
                            borderWidth: isFollow ? 1 : 0,
                            borderColor: "#DEDEDE",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ color: isFollow ? "black" : "white" }}>
                            {isFollow ? "Following" : "Follow"}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: 10,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
  },
  container3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "92%",
  },
  name: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
export default FriendProfile;
