import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Categories from "../componats/Categories";
import SortCategories from "../componats/SortCategories";
import Destinations from "../componats/Destinations";
import Header from "../componats/Header";
import tw from "twrnc";
export default function Home() {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Header />
        </View>
        <View>
          <Categories />
        </View>
        <View>
          <SortCategories />
        </View>
        <View>
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
