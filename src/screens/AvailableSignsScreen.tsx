/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, Chip } from "react-native-paper";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { Signs } from "../enums/SignsEnum";
import { Routes } from "../navigation/Routes";

export const AvailableSignsScreen = ({ navigation, onDataChange }: any) => {
  return (
    <View style={styles.container}>
      <HeaderComponent title="Available Signs" />
      <FlatList
        data={Object.values(Signs)}
        renderItem={({ item }) => (
          <Chip
            icon={`zodiac-${item.toLowerCase()}`}
            style={styles.zodiac_sign}
            onPress={() =>
              navigation.navigate(Routes.HOME_PAGE, { sign: item })
            }
          >
            {item}
          </Chip>
        )}
      />
      <Button
        icon="keyboard-backspace"
        mode="outlined"
        style={styles.backButton}
        onPress={() => navigation.navigate(Routes.HOME_PAGE)}
      >
        Go back
      </Button>
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
  zodiac_sign: {
    margin: 2,
  },
  backButton: {
    margin: 2,
    backgroundColor: "#ecf0f1",
    color: "#fff",
  },
});
