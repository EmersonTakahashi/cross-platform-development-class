import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Sum from "./app/components/sum.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Sum number1={5} number2={7}></Sum>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
