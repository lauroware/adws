import React from "react";
import { StyleSheet, ScrollView, Linking } from "react-native";
import { Card } from "react-native-elements";
import { Text, View } from "@/components/Themed";

export default function TabTwoScreen() {
  const data = [
    {
      title: "ADWS - SEPTIEMBRE 2020",
      description: "ADWS - SEPTIEMBRE 2020",
      videoUrl:
        "https://odysee.com/AWDS-SEPTIEMBRE-2020:7?r=4BxkK6934VdXHLGWwznAuNLuBNbzrk2K",
    },
    {
      title: "ADWS - AGOSTO 2020",
      description: "ADWS - AGOSTO 2020",
      videoUrl: "https://odysee.com/ADWS-AGOSTO-2020-Mixed-By-Laurin:1",
    },
    {
      title: "ADWS - September 2020.1",
      description: "ADWS - September 2020.1",
      videoUrl: "https://odysee.com/ADWS-September-2020-mixed-by-Laurin:2",
    },
    {
      title: "Adws - Julio 2020",
      description: "Adws - Julio 2020",
      videoUrl:
        "https://odysee.com/ADWS---Julio-2020---Mixed-By-Laurin-Cuarentena-sessions--5:4",
    },
    {
      title: "A.D.I.Q.TS #1",
      description: "A.D.I.Q.TS #1",
      videoUrl: "https://odysee.com/ADIQTS---JUNIO-2020-MIXED-BY-LAURIN:d",
    },
    {
      title: "ADWS - MARZO 2020",
      description: "ADWS - MARZO 2020",
      videoUrl:
        "https://odysee.com/ADWS---cuarentena-mixed-by-Laurin--marzo-2020:7",
    },
    {
      title: "ADWS - ABRIL 2020",
      description: "ADWS - ABRIL 2020",
      videoUrl:
        "https://odysee.com/ADWS-CUARENTENA-ABRIL-2020---mixed-by-Laurin:0",
    },
    {
      title: "ADWS - MAYO 2020",
      description: "ADWS - MAYO 2020",
      videoUrl: "https://odysee.com/adws-cuarentena-abril-1-:a",
    },
    {
      title: "ADWS - Enero 2024",
      description: "ADWS - Enero 2024",
      videoUrl: "https://odysee.com/@Laucho:2/adws-laurin-2024:4",
    },
  ];

  const openWebPage = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mis mixes</Text>
      <View style={styles.separator} />
      {data.map((item, index) => (
        <Card key={index} containerStyle={styles.card}>
          <Card.Title>{item.title}</Card.Title>
          <View style={styles.buttonContainer}>
            <Text
              style={styles.button}
              onPress={() => openWebPage(item.videoUrl)}
            >
              Ver en Odysee
            </Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  separator: {
    width: "80%",
    height: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginVertical: 10,
  },
  card: {
    width: "90%", // Ajustar según sea necesario
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    color: "blue",
  },
});
