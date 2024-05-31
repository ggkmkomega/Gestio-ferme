import features from "@/assets/data/features";
import Chicken from "@/src/components/Chicken";
import Eggs from "@/src/components/Eggs";
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

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists poultry_data (id INTEGER PRIMARY KEY AUTOINCREMENT,entry_date TEXT, number_of_chicks_or_hens INTEGER, daily_feed_consumption REAL, weekly_feed_consumption REAL, water_consumption REAL, weight_of_chick_or_hen REAL, daily_mortality INTEGER, remaining_number INTEGER, mortality_rate REAL);"
      );
      tx.executeSql(
        "create table if not exists Eggs_data (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre_de_poules INTEGER, oeufs_pondus_jour INTEGER, poids_de_loeuf_g REAL, oeufs_casses INTEGER);"
      );
    });
  }, [db]);
  if (id > 2) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: feature?.title }} />
        <Text>Coming Soon</Text>
      </View>
    );
  }
  if (id === 2) {
    return <Eggs />;
  }
  return <Chicken />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
});
export default featureDetailSceen;
