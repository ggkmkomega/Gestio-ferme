import { Text, Button, StyleSheet, ScrollView, View } from "react-native";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormInputController from "../components/FormInputController";
import * as SQLite from "expo-sqlite/legacy";
import { useRouter } from "expo-router";

export default function Modal() {
  const router = useRouter();

  const [db, setDb] = useState(SQLite.openDatabase("Farm.db"));
  const insertSql = `INSERT INTO Eggs_data (nombre_de_poules, oeufs_pondus_jour, poids_de_loeuf_g, oeufs_casses) VALUES (?, ?, ?, ?)`;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      nombre_de_poules: 0,
      oeufs_pondus_jour: 0,
      poids_de_loeuf_g: 0,
      oeufs_casses: 0,
    },
  });
  const onSubmit = (data: FormData) => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists Eggs_data (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre_de_poules INTEGER, oeufs_pondus_jour INTEGER, poids_de_loeuf_g REAL, oeufs_casses INTEGER);"
        );
        tx.executeSql(insertSql, [
          data.nombre_de_poules,
          data.oeufs_pondus_jour,
          data.poids_de_loeuf_g,
          data.oeufs_casses,
        ]);
      });
    } catch (error) {
    } finally {
      // router.back();
    }
  };
  type FormData = {
    nombre_de_poules: number;
    oeufs_pondus_jour: number;
    poids_de_loeuf_g: number;
    oeufs_casses: number;
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 20, display: "flex", gap: 5 }}>
        <FormInputController
          control={control}
          name="nombre_de_poules"
          displayText="Nombre de poules"
        />
        {errors.nombre_de_poules && (
          <Text style={styles.errorText}>This is required.</Text>
        )}
        <FormInputController
          control={control}
          name="oeufs_pondus_jour"
          displayText="Ouefs pondus (jour)"
        />

        {errors.oeufs_pondus_jour && (
          <Text style={styles.errorText}>This is required.</Text>
        )}
        <FormInputController
          control={control}
          name="poids_de_loeuf_g"
          displayText="Poids de l'oeuf (g)"
        />
        {errors.poids_de_loeuf_g && (
          <Text style={styles.errorText}>This is required.</Text>
        )}
        <FormInputController
          control={control}
          name="oeufs_casses"
          displayText="Oeufs Cassés"
        />
        {errors.oeufs_casses && (
          <Text style={styles.errorText}>This is required.</Text>
        )}

        <Button title="Add" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { display: "flex", gap: 20 },
  errorText: { color: "red" },
});
