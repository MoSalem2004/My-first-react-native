import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={tw`w-full h-full flex justify-end`}>
      <Image
        source={require("../../assets/airplane-1.webp")}
        style={tw`w-full h-full absolute`}
      />
      <View style={tw`mb-10`}>
        <View>
          <Text style={tw` text-6xl text-white text-center`}>
            أصبح السفر سهلاً
          </Text>
          <Text style={tw` text-2xl text-white text-center`}>
            استمتع بتجربة أفضل مغامرة حول العالم معنا
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={tw`my-5 flex justify-center items-center rounded-3xl `}
      >
        <Text
          style={tw`bg-[#0088ff] p-6 px-10 text-4xl text-white text-center	rounded-xl `}
        >
          {" "}
          دعنا نبدأ{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
