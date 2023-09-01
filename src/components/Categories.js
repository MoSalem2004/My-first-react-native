import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { CategoryData } from "../constants";
import { theme } from "../Theme";
import tw from "twrnc";
export default function Categories() {
  return (
    <View style={tw`flex-1 m-5`}>
      <View style={tw`flex flex-row justify-between items-center m-2.5`}>
        <Text style={tw`text-[#837f7f] text-2xl`}> فئات </Text>
        <TouchableOpacity>
          <Text style={tw`text-[${theme.text}] text-2xl`}> اظهار الكل </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {CategoryData.map((cat, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={tw`flex items-center mt-6 gap-2.5`}
            >
              <Image
                source={cat.image}
                style={tw`w-30 h-29 rounded-5 ml-2.5`}
              />
              <Text style={tw`text-[#837f7f] font-bold text-lg`}>
                {cat.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
