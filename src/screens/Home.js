import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { TextInput } from "react-native-paper";
import Categories from "../componats/Categories";
import SortCategories from "../componats/SortCategories";
import Destinationsfrom from "../componats/Destinations";
// import { BackwardIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
// import destinations from "../componats/destinations";
export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.head}>
          <Text style={styles.title}> هيا لنكتشف </Text>
          <TouchableOpacity>
            <Image
              style={styles.UserImage}
              source={require("../../assets/user.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.TheContent}>
          <View style={styles.contain}>
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="أبحث"
              placeholderTextColor={"gray"}
              style={styles.input}
              underlineColor="transparent"
            />
          </View>
        </View>
        <View style={styles.Categories}>
          <Categories />
        </View>
        <View>
          <SortCategories />
        </View>
        <View>
          <Destinationsfrom />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    direction: "rtl",
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    color: "#a0a0a0",
    fontSize: wp(7),
  },
  UserImage: {
    height: wp(12),
    width: wp(12),
    borderRadius: 50,
  },
  TheContent: {
    margin: 20,
  },
  contain: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
    marginBottom: 5,
    paddingRight: 2,
    letterSpacing: " 0.05em",
    fontSize: 20,
  },
});
