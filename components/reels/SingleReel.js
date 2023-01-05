import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useRef, useState } from "react";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleReel = ({ item, index, currentIndex }) => {
  const videoRef = useRef(null);

  const onBuffer = (buffer) => {
    console.log("buffring", buffer);
  };
  const onError = (error) => {
    console.log("error", error);
  };

  const [mute, setMute] = useState(false);

  const [like, setLike] = useState(item.isLike);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableopacity}
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
      >
        {/* <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          source={item.video}
          muted={mute}
          style={{ width: "100%", height: "100%", position: "absolute" }}
          rate={1.0}
        /> */}
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          source={item.video}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: "100%", height: "100%", position: "absolute" }}
        />
      </TouchableOpacity>
      <Ionicons
        name="ios-volume-mute-outline"
        style={{
          fontSize: mute ? 20 : 0,
          color: "white",
          position: "absolute",
          backgroundColor: "rgba(52,52,52,0.6)",
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}
      />
      <View
        style={{
          position: "absolute",
          width: windowWidth,
          zIndex: 1,
          bottom: 0, //edited
          padding: 10,
        }}
      >
        <View style={{}}>
          <TouchableOpacity style={{ width: 150 }}>
            <View
              style={{ width: 100, flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: "white",
                  margin: 10,
                }}
              >
                <Image
                  source={item.postProfile}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={{ color: "white", fontSize: 16 }}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 14, marginHorizontal: 10 }}>
            {item.description}
          </Text>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Ionicons
              name="ios-musical-note"
              style={{ color: "white", fontSize: 16 }}
            />
            <Text style={{ color: "white" }}>Original Audio</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          right: 0,
        }}
      >
        <TouchableOpacity
          onPress={() => setLike(!like)}
          style={{ padding: 10 }}
        >
          <AntDesign
            name={like ? "heart" : "hearto"}
            style={{ color: like ? "red" : "white", fontSize: 25 }}
          />
          <Text style={{ color: "white" }}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionicons
            name="ios-chatbubble-outline"
            style={{ color: "white", fontSize: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionicons
            name="paper-plane-outline"
            style={{ color: "white", fontSize: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Feather
            name="more-vertical"
            style={{ color: "white", fontSize: 25 }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "white",
            margin: 10,
          }}
        >
          <Image
            source={item.postProfile}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              resizeMode: "cover",
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight - 30,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  touchableopacity: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
export default SingleReel;
