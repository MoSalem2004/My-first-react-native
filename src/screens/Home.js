import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Categories from "../components/Categories";
import SortCategories from "../components/SortCategories";
import Destinations from "../components/Destinations";
import Header from "../components/Header";
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
