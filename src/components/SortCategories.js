import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SortCategoryData } from "../constants/index";
import tw from "twrnc";
const Header = () => {
  // Select the button in the header
  const [activeLink, setActiveLink] = useState(" شائع ");

  const handleLinkPress = (link) => {
    setActiveLink(link);
  };
  return (
    <View
      style={tw`flex justify-around items-center flex-row bg-[#eee] p-2.5 m-5 mb-2.5 rounded-md`}
    >
      {SortCategoryData.map((link) => (
        <TouchableOpacity
          key={link}
          style={[
            tw`px-10 py-2.5 rounded-full`,
            activeLink === link ? tw`bg-white` : null,
          ]}
          onPress={() => handleLinkPress(link)}
        >
          <Text
            style={[
              tw`text-2xl font-bold`,
              activeLink === link ? tw`text-[#0088ff]` : null,
            ]}
          >
            {link}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default Header;
