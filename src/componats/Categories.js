import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CategoryData } from "../constants";
import { theme } from "../Theme";
export default function Categories() {
  return (
    <View style={styles.container}>
      <View style={styles.TheContainer}>
        <Text style={styles.Title}> فئات </Text>
        <TouchableOpacity>
          <Text style={styles.TitleButton}> اظهار الكل </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {CategoryData.map((cat, index) => {
          return (
            <TouchableOpacity key={index} style={styles.TheContainerImage}>
              <Image source={cat.image} style={styles.ContainerImage} />
              <Text style={styles.imageTitle}>{cat.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    direction: "rtl",
    // marginTop: 25,
    margin: 20,
  },
  TheContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  Title: {
    fontSize: wp(3),
    color: "#837f7f",
  },
  TitleButton: {
    fontSize: wp(3),
    color: theme.text,
  },
  TheContainerImage: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 30,
  },
  ContainerImage: {
    width: wp(20),
    height: wp(19),
    borderRadius: 20,
    marginLeft: 10,
  },
  imageTitle: {
    fontSize: wp(2),
    color: "#837f7f",
    fontWeight: "bold",
  },
});
