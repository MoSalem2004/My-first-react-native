import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SortCategoryData } from "../constants/index"; // استيراد المصفوفة
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Header = () => {
  const [activeLink, setActiveLink] = useState(" شائع ");

  const handleLinkPress = (link) => {
    setActiveLink(link);
  };

  return (
    <View style={styles.headCategory}>
      {SortCategoryData.map((link) => (
        <TouchableOpacity
          key={link}
          style={[styles.link, activeLink === link ? styles.activelink : null]}
          onPress={() => handleLinkPress(link)}
        >
          <Text
            style={[
              styles.linkText,
              activeLink === link ? styles.activelinkText : null,
            ]}
          >
            {link}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  headCategory: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eee",
    padding: 10,
    marginBottom: 10,
    margin: 20,
    borderRadius: 5,
  },
  link: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  activelink: {
    backgroundColor: "#fafafa",
    borderRadius: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  linkText: {
    fontSize: wp(3),
    fontWeight: "bold",
  },
  activelinkText: {
    color: "#0088ff",
  },
});

export default Header;
// const styles = StyleSheet.create({
//   headCategory: {
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//     flexDirection: "row",
//     backgroundColor: "#eee",
//     padding: 10,
//     marginBottom: 10,
//     margin: 20,
//     borderRadius: 5,
//   },
//   ActiveButtonClass: {
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: "#fafafa",
//   },
//   Title: {
//     color: "#333",
//   },
//   active: {
//     backgroundColor: "#333",
//   },
// });
