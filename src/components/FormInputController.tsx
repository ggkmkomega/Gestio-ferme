import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const FormInputController = ({ control, name, displayText, ...props }) => {
  return (
    <View style={styles.parentView}>
      <Text style={styles.displayStyle}>{displayText}</Text>
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            inputMode="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
            {...props}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  parentView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    padding: 10,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 100,
    borderColor: "gray",
  },

  displayStyle: {
    fontSize: 16,
    fontWeight: "semibold",
  },
});
export default FormInputController;
