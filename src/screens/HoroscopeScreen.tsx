/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { useHoroscope } from "../hooks/getHoroscope";
import { Text } from "react-native-paper";

export const HoroscopeScreen = ({ route, navigation }: any) => {
  const { data, isError, isLoading } = useHoroscope(
    route.params.sign,
    route.params.day
  );

  if (isError) {
    return <Text>Something went wrong</Text>;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (data.message) {
    // If the API returns an error message
    return (
      <View style={styles.container}>
        <HeaderComponent title="Your horoscope" />
        <View>
          <Text>The astrological sign or the day is not good.</Text>
        </View>
        <FooterComponent />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <HeaderComponent title="Your horoscope" />
        <View>
          <Text>{data.date_range}</Text>
        </View>
        <FooterComponent />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    marginHorizontal: 20,
  },
});
