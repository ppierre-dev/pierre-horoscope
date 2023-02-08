/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { useHoroscope } from "../hooks/getHoroscope";
import { Text } from "react-native-paper";
import { getImageSource } from "../utils/getImageSource";

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
          <Image
            source={getImageSource(route.params.sign)}
            style={styles.zodiacSymbol}
          ></Image>
          <Text>We are the {data.current_date}</Text>
          <Text>{data.description}</Text>
          <Text>Your lucky number is {data.lucky_number}</Text>
          <Text>You're going to be lucky at {data.lucky_time}</Text>
          <Text>Mood {data.mood}</Text>
          <Text>Compatibility {data.compatibility}</Text>
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
  zodiacSymbol: {
    width: 100,
    height: 100,
  },
});
