import { Text, Button, StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormInputController from "../components/FormInputController";
import * as SQLite from "expo-sqlite/legacy";
import { useRouter } from "expo-router";

export default function Modal() {
  const [db, setDb] = useState(SQLite.openDatabase("Farm.db"));
  const router = useRouter();
  const deletSql = `DELETE FROM Eggs_data WHERE id = ?`;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteForm>();
  const onSubmit = (data: DeleteForm) => {
    try {
      db.transaction((tx) => {
        tx.executeSql(deletSql, [data.id]);
      });
    } catch (error) {
    } finally {
      router.back();
    }
  };
  type DeleteForm = {
    id: number;
  };
  return (
    <View style={styles.container}>
      <FormInputController
        control={control}
        name="id"
        displayText="Id de la ligne à supprimer"
      />
      {errors.id && <Text style={styles.errorText}>This is required.</Text>}

      <Button title="Supprimer" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { display: "flex", gap: 20 },
  errorText: { color: "red" },
});
