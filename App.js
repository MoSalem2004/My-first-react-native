import { View } from "react-native";
import AppNavigation from "./src/Navigaition/index";
import tw from "twrnc";
export default function App() {
  return (
    <View style={tw`flex-1`}>
      <AppNavigation />
    </View>
  );
}
