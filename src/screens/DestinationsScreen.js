import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeartIcon } from "react-native-heroicons/solid";
import { ClockIcon, MapPinIcon } from "react-native-heroicons/solid";
import { SunIcon } from "react-native-heroicons/outline";
import tw from "twrnc";
export default function DestinationsScreen(props) {
  const item = props.route.params;
  // Toggle heart icon
  const [TheHeartIcon, setHeartIcon] = useState(false);
  return (
    <View style={tw`flex-1 bg-white`}>
      <Image style={tw`w-full h-4/6 absolute`} source={item.image} />
      <StatusBar style="light" />
      <SafeAreaView>
        <TouchableOpacity
          style={tw`absolute p-2.5 bg-[rgba(255,255,255,0.4)] rounded-full top-5 left-5`}
          onPress={() => setHeartIcon(!TheHeartIcon)}
        >
          <HeartIcon
            size={wp(6)}
            strokeWidth={4}
            color={TheHeartIcon ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View
        style={tw`flex justify-between bg-white w-full rounded-3xl flex-1 mt-110`}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={tw`flex flex-row m-5 flex-wrap items-center justify-between`}
          >
            <Text style={tw`font-bold text-[#636161] text-3xl`}>
              {item?.name}
            </Text>
            <Text style={tw`text-[#0088ff] text-5xl`}>
              {item?.estimatedPrice}
            </Text>
            <Text style={tw`text-xl text-[#636161] my-5`}>
              {item?.longDescription}
            </Text>
            <View style={tw`flex flex-row items-start gap-2.5 mt-5 `}>
              <ClockIcon size={wp(7)} color={"skyblue"} />
              <View>
                <Text style={tw`text-[#636161] font-bold text-2xl`}>
                  {item.timeFromCairo}
                </Text>
                <Text style={tw`text-xl`}> المدة الزمنية </Text>
              </View>
            </View>
            <View style={tw`flex flex-row items-start gap-2.5 mt-5 `}>
              <MapPinIcon size={wp(7)} color={"#636161a1"} />
              <View>
                <Text style={tw`text-[#636161] font-bold text-2xl`}>
                  {item.distance}
                </Text>
                <Text style={tw`text-xl`}> مسافة الرحلة </Text>
              </View>
            </View>
            <View style={tw`flex flex-row items-start gap-2.5 mt-5 `}>
              <SunIcon size={wp(7)} color={"orange"} />
              <View>
                <Text style={tw`text-[#636161] font-bold text-2xl`}>
                  {item.temperature}
                </Text>
                <Text style={tw`text-xl`}> درجة الحرارة </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={tw`flex items-center my-10`}>
        <Text
          style={tw`bg-[#0088ff] text-4xl p-5 px-10 text-white rounded-full`}
        >
          {" "}
          أحجز الآن{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
