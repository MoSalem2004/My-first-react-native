import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { DestinationsData } from "../constants/index";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "react-native-svg";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
export default function Destinations() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      {DestinationsData.map((item, index) => {
        return (
          <DestinationsCard navigation={navigation} item={item} key={index} />
        );
      })}
    </View>
  );
}

const DestinationsCard = ({ item, navigation }) => {
  const [TheHeartIcon, setHeartIcon] = useState(false);
  return (
    <TouchableOpacity
      style={styles.TheContaint}
      onPress={() => navigation.navigate("DestinationsScreen", { ...item })}
    >
      <Image source={item.image} style={styles.Images} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          with: wp(44),
          height: hp(15),
          position: "absolute",
          bottom: 0,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <TouchableOpacity
        style={styles.HeartIcon}
        onPress={() => setHeartIcon(!TheHeartIcon)}
      >
        <HeartIcon size={wp(4)} color={TheHeartIcon ? "red" : "white"} />
      </TouchableOpacity>
      <Text style={styles.Name}>{item.name}</Text>
      <Text style={styles.shortDescription}>{item.shortDescription}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    gap: 20,
  },
  TheContaint: {
    width: wp(44),
    height: wp(65),
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    padding: 10,
  },
  Images: {
    position: "absolute",
    width: wp(44),
    height: wp(65),
    borderRadius: 35,
  },
  Name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp(4.5),
  },
  shortDescription: {
    color: "#fff",
    fontSize: wp(3.2),
    marginBottom: 10,
  },
  HeartIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.4)",
    padding: 10,
  },
});
