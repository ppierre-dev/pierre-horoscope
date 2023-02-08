/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, RadioButton, TextInput, Text } from "react-native-paper";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { Routes } from "../navigation/Routes";

export const HomeScreen = ({ route, navigation }: any) => {
  const [sign, setSign] = React.useState("");
  const [day, setDay] = React.useState("");

  const getHoroscope = () => {
    console.log("sign", sign);
    console.log("day", day);
    navigation.navigate(Routes.HOROSCOPE_PAGE, { sign, day });
  };

  const listAvailableSigns = () => {
    navigation.navigate(Routes.AVAILABLE_SIGNS_PAGE);
  };

  console.log(route);

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
          mode="outlined"
          value={(route.params && route.params.sign) || sign || ""}
        />
        <Text
          variant="labelSmall"
          onPress={listAvailableSigns}
          style={styles.homeContent_seeAvailableSigns}
        >
          See available signs
        </Text>
        <RadioButton.Group onValueChange={(day) => setDay(day)} value={day}>
          <View style={styles.homeContent_radioButtons}>
            <RadioButton.Item
              label="Yesterday"
              value="yesterday"
              labelVariant="labelSmall"
            />
            <RadioButton.Item
              label="Today"
              value="today"
              labelVariant="labelSmall"
            />
            <RadioButton.Item
              label="Tomorrow"
              value="tomorrow"
              labelVariant="labelSmall"
            />
          </View>
        </RadioButton.Group>
        {/* <TextInput
          label="Day"
          placeholder="today"
          onChangeText={(day) => setDay(day)}
        /> */}
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
    marginBottom: 5,
  },
  homeContent_button: {
    marginTop: 20,
  },
  homeContent_radioButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: 100,
  },
  homeContent_seeAvailableSigns: {
    color: "#3f51b5",
    marginBottom: 20,
  },
});
