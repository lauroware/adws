import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Desarrollado en React Native.</Text>
      <Text style={styles.text}>Lauro Ware - 2024</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
