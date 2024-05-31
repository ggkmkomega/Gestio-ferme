import features from "@/assets/data/features";
import FeatureInfo from "@/src/components/FeatureInfo";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import * as SQLite from "expo-sqlite/legacy";
import { useEffect, useState } from "react";

export default function index() {
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

  return (
    <View style={styles.container}>
      <View
        style={{
          margin: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", margin: 10 }}>
          Ferme #1
        </Text>
        <Button disabled title="Ajoutez une ferme" />
      </View>
      <FlatList
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        data={features}
        renderItem={({ item }) => <FeatureInfo feature={item} />} // Pass the correct properties to the FeatureInfo component
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
