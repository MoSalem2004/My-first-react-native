import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { DestinationsData } from "../constants/index";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "react-native-svg";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
export default function Destinations() {
  const navigation = useNavigation();
  return (
    <View style={tw`flex justify-center flex-row flex-wrap m-5 gap-5`}>
      {DestinationsData.map((item, index) => {
        return (
          <DestinationsCard navigation={navigation} item={item} key={index} />
        );
      })}
    </View>
  );
}

const DestinationsCard = ({ item, navigation }) => {
  // Toggle heart icon
  const [TheHeartIcon, setHeartIcon] = useState(false);
  return (
    <TouchableOpacity
      style={tw`w-[48%] h-100 flex justify-end relative p-10 `}
      onPress={() => navigation.navigate("DestinationsScreen", { ...item })}
    >
      <Image source={item.image} style={tw`w-66 h-100 absolute rounded-3xl`} />
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
        style={tw`absolute top-5 left-7 rounded-full bg-[rgba(255,255,255,0.4)] p-2.5`}
        onPress={() => setHeartIcon(!TheHeartIcon)}
      >
        <HeartIcon size={wp(4)} color={TheHeartIcon ? "red" : "white"} />
      </TouchableOpacity>
      <Text style={tw`text-white font-bold text-3xl`}>{item.name}</Text>
      <Text style={tw`mb--2.5 text-xl text-white`}>
        {item.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};
