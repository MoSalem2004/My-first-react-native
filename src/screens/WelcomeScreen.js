// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

import React from "react";
import { useNavigation } from "@react-navigation/native";
// import { Button } from "react-native-paper";
import Home from "./Home";
export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/airplane-1.webp")}
        style={styles.ImageBG}
      />
      <LinearGradient
        colors={["transparent", "rgba(3,125,161,0.8)"]}
        style={{
          with: wp(100),
          height: hp(100),
          position: "absolute",
          bottom: 0,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <View style={styles.TheContain}>
        <View style={styles.Contain}>
          <Text style={styles.TheText_1}>أصبح السفر سهلاً</Text>
          <Text style={styles.TheText_2}>
            استمتع بتجربة أفضل مغامرة حول العالم معنا
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.TheButton}
      >
        <Text style={styles.TheText_3}> دعنا نبدأ </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    direction: "rtl",
  },
  ImageBG: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  TheContain: {
    padding: 20,
    width: "auto",
  },
  Contain: {},
  TheText_1: {
    fontSize: 70,
    color: "#fff",
    textAlign: "center",
    fontSize: wp(10),
  },
  TheText_2: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: wp(4),
  },
  TheButton: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  TheText_3: {
    backgroundColor: "#0088ff",
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    padding: 20,
    color: "#fff",
    fontSize: wp(5.5),
  },
});
