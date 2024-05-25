import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useForm, Controller, Form } from "react-hook-form";
import DatePicker from "../components/Datepicker";
import { useState } from "react";
import dayjs from "dayjs";
import FormInputController from "../components/controllers/formInputController";

export default function Modal() {
  const [open, setOpen] = useState(false);
  //const [date, setDate] = useState(new Date());
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      entryDate: new Date(),
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
  const onSubmit = (data: FormData) => console.log(data);
  //Todo Display selected text
  type FormData = {
    entryDate: Date;
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
    <ScrollView style={styles.container}>
      <Controller
        control={control}
        rules={{ required: true }}
        name="entryDate"
        render={({ field }) => (
          <>
            <DatePicker
              setDate={field.onChange}
              date={field.value}
              open={open}
              setOpen={setOpen}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "semibold",
              }}
            >
              Selected Date : {dayjs(field.value).format("DD MMM YYYY")}
            </Text>
            {errors.entryDate && (
              <Text style={styles.errorText}>This is required.</Text>
            )}
          </>
        )}
      />

      <FormInputController
        control={control}
        errors={errors}
        name="ratiochick"
        displayText="Ratio Chicken"
      />
      {errors.ratiochick && <Text>This is required.</Text>}
      <FormInputController
        control={control}
        errors={errors}
        name="QTalimConsu"
        displayText="QTE Aliment"
      />
      <FormInputController
        control={control}
        errors={errors}
        name="QTalimConsuWeek"
        displayText="QTE Aliment Semaine"
      />
      <FormInputController
        control={control}
        errors={errors}
        name="QTwater"
        displayText="QTE Eau"
      />
      <FormInputController
        control={control}
        errors={errors}
        name="wtChicken"
        displayText="Poids Poules"
      />

      <FormInputController
        control={control}
        errors={errors}
        name="DeathDay"
        displayText="Mortes par jour"
      />
      <FormInputController
        control={control}
        errors={errors}
        name="number"
        displayText="Nombre"
      />

      <FormInputController
        control={control}
        errors={errors}
        name="DeathRate"
        displayText="Taux de mortalite"
      />

      <Button title="Add" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20, display: "flex", gap: 20 },
  errorText: { color: "red" },
});
