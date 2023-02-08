/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";

export const HomeScreen = ({ navigation }: any) => {
  const [sign, setSign] = React.useState("");
  const [day, setDay] = React.useState("");

  const getHoroscope = () => {
    navigation.navigate("Horoscope", { sign, day });
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        title="PierreHoroscope"
        subtitle="Discover your horoscope for yesterday, today and even tomorrow!"
      />
      <View style={styles.homeContent}>
        <TextInput
          style={styles.homeContent_input}
          label="Sign"
          placeholder="leo"
          onChangeText={(sign) => setSign(sign)}
        />
        <TextInput
          label="Day"
          placeholder="today"
          onChangeText={(day) => setDay(day)}
        />
        <Button
          style={styles.homeContent_button}
          icon="search-web"
          mode="contained"
          onPress={() => getHoroscope()}
        >
          Search
        </Button>
      </View>
      <FooterComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    marginHorizontal: 20,
  },
  homeContent: {
    marginTop: 50,
  },
  homeContent_input: {
    marginBottom: 20,
  },
  homeContent_button: {
    marginTop: 20,
  },
});
