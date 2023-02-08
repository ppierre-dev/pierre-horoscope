/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, RadioButton, TextInput, Text } from "react-native-paper";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { Routes } from "../navigation/Routes";
import { useForm, Controller } from "react-hook-form";

export const HomeScreen = ({ route, navigation }: any) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sign: "",
      day: "",
    },
  });
  const onSubmit = (data: any) => {
    if (data.sign && data.day) {
      navigation.navigate(Routes.HOROSCOPE_PAGE, {
        sign: data.sign,
        day: data.day,
      });
    }
  };

  const onChange = (sign: string) => {
    if (sign) {
      setValue("sign", sign);
    }
  };

  const listAvailableSigns = () => {
    navigation.navigate(Routes.AVAILABLE_SIGNS_PAGE);
  };

  if (route.params && route.params.sign) {
    onChange(route.params.sign);
    navigation.setParams({ sign: undefined });
  }

  return (
    <View style={styles.container}>
      <HeaderComponent
        title="PierreHoroscope"
        subtitle="Discover your horoscope for yesterday, today and even tomorrow!"
      />
      <View style={styles.homeContent}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Sign"
              mode="outlined"
              placeholder="leo"
              style={styles.homeContent_input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="sign"
          aria-invalid={errors.sign ? "true" : "false"}
        />
        {errors.sign && (
          <Text variant="labelSmall" style={styles.error_messages}>
            U need to choose a zodiac sign
          </Text>
        )}
        <Text
          variant="labelSmall"
          onPress={listAvailableSigns}
          style={styles.homeContent_seeAvailableSigns}
        >
          See available signs
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <RadioButton.Group onValueChange={onChange} value={value}>
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
          )}
          name="day"
        />
        <Button
          style={styles.homeContent_button}
          icon="search-web"
          mode="contained"
          onPress={handleSubmit(onSubmit)}
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

  error_messages: {
    color: "red",
    marginBottom: 20,
  },
});
