import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "./Routes";
import { HomeScreen } from "../screens/HomeScreen";
import { HoroscopeScreen } from "../screens/HoroscopeScreen";
import { AvailableSignsScreen } from "../screens/AvailableSignsScreen";
const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.HOME_PAGE}>
        <Stack.Screen name={Routes.HOME_PAGE} component={HomeScreen} />
        <Stack.Screen
          name={Routes.HOROSCOPE_PAGE}
          component={HoroscopeScreen}
        />
        <Stack.Screen
          name={Routes.AVAILABLE_SIGNS_PAGE}
          component={AvailableSignsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
