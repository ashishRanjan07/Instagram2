import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const SearchContent = (props) => {
  const searchData = [
    {
      id: 0,
      images: [
        require("../../assets/images/post1.jpg"),
        require("../../assets/images/post2.jpg"),
        require("../../assets/images/post3.jpg"),
        require("../../assets/images/post4.jpg"),
        require("../../assets/images/post5.jpg"),
        require("../../assets/images/post6.jpg"),
      ],
    },
    {
      id: 1,
      images: [
        require("../../assets/images/post7.jpg"),
        require("../../assets/images/post8.jpg"),
        require("../../assets/images/post9.jpg"),
        require("../../assets/images/post10.jpg"),
        require("../../assets/images/post11.jpg"),
        require("../../assets/images/post12.jpg"),
      ],
    },
    {
      id: 2,
      images: [
        require("../../assets/images/post13.jpg"),
        require("../../assets/images/post14.jpg"),
        require("../../assets/images/post15.jpg"),
      ],
    },
  ];
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View style={styles.conatiner}>
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                      key={imgIndex}
                      style={{ paddingBottom: 2, width: "33%" }}
                    >
                      <Image source={imageData} style={styles.imageStyles} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View style={styles.container2}>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "66.5%",
                    justifyContent: "space-between",
                  }}
                >
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        key={imgIndex}
                        style={{ paddingBottom: 2, width: "49.5%" }}
                      >
                        <Image source={imageData} style={styles.imageStyles} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                  style={{ marginLeft: 2, width: "33%" }}
                >
                  <Image
                    source={data.images[5]}
                    style={{ width: "100%", height: 300 }}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View style={styles.container2}>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                  style={{ paddingRight: 2, width: "66.5%" }}
                >
                  <Image
                    source={data.images[2]}
                    style={{ width: "100%", height: 300 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "33%",
                    justifyContent: "space-between",
                  }}
                >
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        key={imgIndex}
                        style={{ paddingBottom: 2, width: "100%" }}
                      >
                        <Image source={imageData} style={styles.imageStyles} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  imageStyles: {
    width: "100%",
    height: 150,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default SearchContent;
