import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import RootNavigation from "./navigation/RootNavigation";
import LoginScreen from "./screens/LoginScreen";

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Remote debugger']);
export default function App() {
  return <RootNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
