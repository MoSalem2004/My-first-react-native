import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeartIcon } from "react-native-heroicons/solid";
import { ClockIcon, MapPinIcon } from "react-native-heroicons/solid";
import { theme } from "../Theme";
import { SunIcon } from "react-native-heroicons/outline";
export default function DestinationsScreen(props) {
  const item = props.route.params;
  const [TheHeartIcon, setHeartIcon] = useState(false);
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={item.image} />
      <StatusBar style="light" />
      <SafeAreaView style={styles.View}>
        <TouchableOpacity
          style={styles.ContainerIcon}
          onPress={() => setHeartIcon(!TheHeartIcon)}
        >
          <HeartIcon
            style={styles.HeartIcon}
            size={wp(7)}
            strokeWidth={4}
            color={TheHeartIcon ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.TheContaint}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Containt}>
            <Text style={styles.name}>{item?.name}</Text>
            <Text style={styles.estimatedPrice}>{item?.estimatedPrice}</Text>
            <Text style={styles.longDescription}>{item?.longDescription}</Text>
            <View style={styles.box}>
              <ClockIcon size={wp(7)} color={"skyblue"} />
              <View>
                <Text style={styles.Info}>{item.timeFromCairo}</Text>
                <Text style={styles.Text}> المدة الزمنية </Text>
              </View>
            </View>
            <View style={styles.box}>
              <MapPinIcon size={wp(7)} color={"#636161a1"} />
              <View>
                <Text style={styles.Info}>{item.distance}</Text>
                <Text style={styles.Text}> مسافة الرحلة </Text>
              </View>
            </View>
            <View style={styles.box}>
              <SunIcon size={wp(7)} color={"orange"} />
              <View>
                <Text style={styles.Info}>{item.temperature}</Text>
                <Text style={styles.Text}> درجة الحرارة </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.TheButton}>
        <Text style={styles.Button}> أحجز الآن </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  Image: {
    width: wp(100),
    height: hp(55),
    position: "absolute",
  },
  ContainerIcon: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.4)",
    padding: 10,
    borderRadius: 50,
    top: 30,
    left: 30,
  },
  TheContaint: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "100%",
    // margin: 20,
    borderRadius: 40,
    marginTop: "78%",
    height: 200,
    flex: 1,
  },
  Containt: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: 20,
    flexWrap: "wrap",
  },
  name: {
    fontWeight: "bold",
    fontSize: wp(7),
    color: "#636161",
  },
  estimatedPrice: {
    fontSize: wp(7),
    color: "#0088ff",
  },
  longDescription: {
    fontSize: wp(3.5),
    color: "#636161",
    marginTop: 15,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginTop: 20,
  },
  Info: {
    fontWeight: "bold",
    fontSize: wp(4.5),
    color: "#636161",
  },
  Text: {
    fontSize: 16,
  },
  TheButton: {
    display: "flex",
    alignItems: "center",
    marginVertical: 18,
  },
  Button: {
    backgroundColor: "#0088ff",
    fontSize: wp(6),
    padding: 10,
    paddingHorizontal: 30,
    color: "#fff",
    borderRadius: 50,
  },
});
