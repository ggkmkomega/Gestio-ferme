import {
  Text,
  Button,
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import DatePickerModal from "../components/Datepicker";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import FormInputController from "../components/FormInputController";
import { DateType } from "react-native-ui-datepicker";

export default function Modal() {
  const [open, setOpen] = useState(true);
  //const [date, setDate] = useState(new Date());
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      ratiochick: 0,
      QTalimConsu: 0,
      QTalimConsuWeek: 0,
      QTwater: 0,
      wtChicken: 0,
      DeathDay: 0,
      number: 0,
      DeathRate: 0,
    },
  });
  const onSubmit = (data: FormData) =>
    console.log({
      ...data,
      entryDate: dayjs(data.entryDate).format("DD MMM YYYY"),
    });
  type FormData = {
    entryDate: DateType;
    ratiochick: number;
    QTalimConsu: number;
    QTalimConsuWeek: number;
    QTwater: number;
    wtChicken: number;
    DeathDay: number;
    number: number;
    DeathRate: number;
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={{ padding: 20, display: "flex", gap: 5 }}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="entryDate"
            render={({ field }) => (
              <>
                <DatePickerModal
                  //changes everytime u change
                  setDate={field.onChange}
                  date={field.value}
                  open={open}
                  setOpen={setOpen}
                />
                {/* <Text
              style={{
                fontSize: 16,
                fontWeight: "semibold",
              }}
            >
              Date entree : {dayjs(field.value).format("DD MMM YYYY")}
            </Text> */}
                {errors.entryDate && (
                  <Text style={styles.errorText}>This is required.</Text>
                )}
              </>
            )}
          />
          <FormInputController
            control={control}
            name="ratiochick"
            displayText="Ratio Chicken"
          />
          {errors.ratiochick && (
            <Text style={styles.errorText}>This is required.</Text>
          )}
          <FormInputController
            control={control}
            name="QTalimConsu"
            displayText="QTE Aliment"
          />

          {errors.QTalimConsu && (
            <Text style={styles.errorText}>This is required.</Text>
          )}
          <FormInputController
            control={control}
            name="QTwater"
            displayText="QTE Eau"
          />
          {errors.QTwater && (
            <Text style={styles.errorText}>This is required.</Text>
          )}
          <FormInputController
            control={control}
            name="wtChicken"
            displayText="Poids Poules"
          />
          {errors.wtChicken && (
            <Text style={styles.errorText}>This is required.</Text>
          )}
          <FormInputController
            control={control}
            name="DeathDay"
            displayText="Mortes par jour"
          />
          {errors.DeathDay && (
            <Text style={styles.errorText}>This is required.</Text>
          )}
          <FormInputController
            control={control}
            name="number"
            displayText="Nombre"
          />
          {errors.number && (
            <Text style={styles.errorText}>This is required.</Text>
          )}

          <Button title="Add" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20, display: "flex", gap: 20 },
  errorText: { color: "red" },
});
