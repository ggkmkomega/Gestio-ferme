import features from "@/assets/data/features";
import ExampleThree, { EggTable } from "@/src/components/Table";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as SQLite from "expo-sqlite/legacy";

const featureDetailSceen = () => {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === "string" ? idString : idString[0]);
  const router = useRouter();
  const feature = features.find((product) => product.id === id);
  const [db, setDb] = useState(SQLite.openDatabase("Farm.db"));

  if (id > 2) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: feature?.title }} />
        <Text>Coming Soon</Text>
      </View>
    );
  }
  if (id === 2) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: feature?.title }} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Production D'Oeufs</Text>
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
                router.navigate("/modalegg");
              }}
            />
            <Button
              title="Supprimer"
              onPress={() => {
                router.navigate("/DeleteModalegg");
              }}
            />
          </View>
        </View>
        <EggTable />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: feature?.title }} />
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
export default featureDetailSceen;
