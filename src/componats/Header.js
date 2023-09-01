import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { TextInput } from "react-native-paper";
import tw from "twrnc";
export default function Home() {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={tw`m-5 flex flex-row justify-between items-center mb-2.5 `}
        >
          <Text style={tw`font-bold text-3xl text-[#a0a0a0]`}>
            {" "}
            هيا لنكتشف{" "}
          </Text>
          <TouchableOpacity>
            <Image
              style={tw`rounded-full w-22 h-22`}
              source={require("../../assets/user.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`m-5`}>
          <View
            style={tw`flex-row items-center bg-[#fafafa] p-2.5 rounded-full`}
          >
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="أبحث"
              placeholderTextColor={"gray"}
              style={tw`mx-2.5 flex-1 bg-transparent text-3xl`}
              underlineColor="transparent"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
