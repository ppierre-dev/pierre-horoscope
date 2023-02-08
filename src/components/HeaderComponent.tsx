/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

type headerProps = {
  title: string;
  subtitle?: string;
};

export const HeaderComponent = (props: headerProps) => {
  return (
    <View style={styles.header}>
      <Text variant="titleLarge">{props.title}</Text>
      <Text variant="bodyMedium" style={styles.header_subtitle}>
        {props.subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
  header_subtitle: {
    marginHorizontal: 20,
  },
});
