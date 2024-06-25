import { StyleSheet, Image } from "react-native";

import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laurin</Text>
      <Text style={styles.description}>
        Soy DJ amateur, amo mezclar música y hice esta aplicación para que
        puedan tener a mano mis mixes. Gracias por escuchar y espero que los
        difruten.
      </Text>
      <Image
        source={require("../../assets/images/lauro.png")}
        style={styles.photo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  photo: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 100, // Añadido borde redondeado para la imagen de perfil
  },
});
