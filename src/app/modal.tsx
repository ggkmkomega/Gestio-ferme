import { Text, Button, StyleSheet, ScrollView, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DatePickerModal from "../components/Datepicker";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import FormInputController from "../components/FormInputController";
import { DateType } from "react-native-ui-datepicker";
import * as SQLite from "expo-sqlite/legacy";

export default function Modal() {
  const [open, setOpen] = useState(true);
  //const [date, setDate] = useState(new Date());
  const [db, setDb] = useState(SQLite.openDatabase("Farm.db"));
  const insertSql = `INSERT INTO poultry_data (entry_date, number_of_chicks_or_hens, daily_feed_consumption, weekly_feed_consumption, water_consumption, weight_of_chick_or_hen, daily_mortality, remaining_number, mortality_rate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS poultry_data (id INTEGER PRIMARY KEY AUTOINCREMENT,entry_date TEXT, number_of_chicks_or_hens INTEGER, daily_feed_consumption REAL, weekly_feed_consumption REAL, water_consumption REAL, weight_of_chick_or_hen REAL, daily_mortality INTEGER, remaining_number INTEGER, mortality_rate REAL);"
      );
    });
  }, [db]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      number_of_chicks_or_hens: 0,
      daily_feed_consumption: 0,
      weekly_feed_consumption: 0,
      water_consumption: 0,
      weight_of_chick_or_hen: 0,
      daily_mortality: 0,
      remaining_number: 0,
      mortality_rate: 0,
    },
  });
  const onSubmit = (data: FormData) => {
    db.transaction((tx) => {
      tx.executeSql(insertSql, [
        dayjs(data.entry_date).format("DD MMM YYYY"),
        data.number_of_chicks_or_hens,
        data.daily_feed_consumption,
        data.weekly_feed_consumption,
        data.water_consumption,
        data.weight_of_chick_or_hen,
        data.daily_mortality,
        data.remaining_number,
        data.mortality_rate,
      ]);
    });
  };
  type FormData = {
    entry_date: DateType;
    number_of_chicks_or_hens: number;
    daily_feed_consumption: number;
    weekly_feed_consumption: number;
    water_consumption: number;
    weight_of_chick_or_hen: number;
    daily_mortality: number;
    remaining_number: number;
    mortality_rate: number;
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 20, display: "flex", gap: 5 }}>
        <Controller
          control={control}
          rules={{ required: true }}
          name="entry_date"
          render={({ field }) => (
            <>
              <DatePickerModal
                //changes everytime u change
                setDate={field.onChange}
                date={field.value}
                open={open}
                setOpen={setOpen}
              />

              {errors.entry_date && (
                <Text style={styles.errorText}>This is required.</Text>
              )}
            </>
          )}
        />
        <FormInputController
          control={control}
          name="number_of_chicks_or_hens"
          displayText="Nombre de poussins/poules"
        />
        {errors.number_of_chicks_or_hens && (
          <Text style={styles.errorText}>This is required.</Text>
        )}
        <FormInputController
          control={control}
          name="daily_feed_consumption"
          displayText="Quantité d'aliment consommée"
        />

        {errors.daily_feed_consumption && (
          <Text style={styles.errorText}>This is required.</Text>
        )}
        <FormInputController
          control={control}
          name="water_consumption"
          displayText="Quantité d'eau consommée"
        />
        {errors.water_consumption && (
          <Text style={styles.errorText}>This is required.</Text>
        )}
        <FormInputController
          control={control}
          name="weight_of_chick_or_hen"
          displayText="poids de poussin/ poule"
        />
        {errors.weight_of_chick_or_hen && (
          <Text style={styles.errorText}>This is required.</Text>
        )}
        <FormInputController
          control={control}
          name="daily_mortality"
          displayText="Nombre de mortalité"
        />
        {errors.daily_mortality && (
          <Text style={styles.errorText}>This is required.</Text>
        )}
        <FormInputController
          control={control}
          name="remaining_number"
          displayText="Nombre restant"
        />
        {errors.remaining_number && (
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
