import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import ExampleThree from "./Table";

const Chicken = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Chicken" }} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Poules/Poussins</Text>
        <View
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            gap: 4,
          }}
        >
          <Button
            title="Ajouter"
            onPress={() => {
              router.navigate("/modal");
            }}
          />
          <Button
            title="Supprimer"
            onPress={() => {
              router.navigate("/DeleteModal");
            }}
          />
        </View>
      </View>
      <ExampleThree />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
});
export default Chicken;
