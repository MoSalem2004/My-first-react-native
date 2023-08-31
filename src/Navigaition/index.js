import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "../screens/Home";
import WelcomeScreen from "../screens/WelcomeScreen";
import Home from "../screens/Home";
import DestinationsScreen from "../screens/DestinationsScreen";
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "الرئيسية" }}
        />
        <Stack.Screen
          name="DestinationsScreen"
          component={DestinationsScreen}
          options={{ title: "" }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
