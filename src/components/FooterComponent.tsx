/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { View, StyleSheet, Linking } from "react-native";
import { IconButton, Text } from "react-native-paper";

export const FooterComponent = () => {
  const redirectToGithub = () => {
    Linking.openURL("https://github.com/ppierre-dev");
  };

  return (
    <View style={styles.footer}>
      <Text variant="bodyMedium">Made with ❤️ by Pierre</Text>
      <IconButton icon="github" onPress={redirectToGithub} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    marginTop: 50,
  },
});
