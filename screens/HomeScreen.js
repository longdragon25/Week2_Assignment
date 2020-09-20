import React from "react";
import { StyleSheet, ScrollView, View, Image, Text,SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const users = [
    {
      posterName: "Long_Ngoc_Hoang",
      avatarUrl: require("../assets/i1.jpg"),
      imageUrl: require("../assets/11.jpg"),
    },
    {
      posterName: "MinhAnh0801",
      avatarUrl: require("../assets/3.jpg"),
      imageUrl: require("../assets/12.jpg"),
    },
    {
      posterName: "Anyone",
      avatarUrl: require("../assets/5.jpg"),
      imageUrl: require("../assets/13.jpg"),
    },
  ];
  return (
   
      <View style={styles.scrollView}>
      <View style={styles.container}>
      <View style={{ width: 27 }} />
      <Image
        style={styles.logo}
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
        }}
        resizeMode="contain"
      />
      <Feather name="inbox" size={27} color="black" />
    </View>
    <ScrollView>
        <View>
        {users.map((user) => (
            <View>
            <View style={styles.avatarWrapper}>
                <Image source={user.avatarUrl} style={styles.posterAvatar} />
                <Text style={styles.posterName}>{user.posterName}</Text>
            </View>
            <View style={styles.imageWrapper}>
                <Image style={styles.imagePoster} source={user.imageUrl} />
            </View>
            <View style={styles.iconsContainer}>
                <Feather name="heart" size={27} color="black" />
                <Feather name="message-square" size={27} color="black" />
                <Feather name="share" size={27} color="black" />
            </View>
            </View>
        ))}
        </View>
    </ScrollView>
    
        
      </View>
   
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: Constants.statusBarHeight,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#f3f6fa",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flex: 1,
    height: 40,
    width: null,
  },
  avatarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    marginHorizontal: 12,
  },
  posterAvatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  posterName: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 10,
  },
  imagePoster: {
    flex: 1,
    width:null,
    height:null
  },
  imageWrapper: {
    height: 300,
  },
  iconsContainer: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
  },
});