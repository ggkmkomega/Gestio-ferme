import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "../components/Datepicker";
import { useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);
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
    <View style={{ padding: 20, display: "flex", gap: 20 }}>
      <Controller
        control={control}
        rules={{ required: true }}
        name="entryDate"
        render={({ field }) => (
          <DatePicker
            setDate={field.onChange}
            date={field.value}
            open={open}
            setOpen={setOpen}
          />
        )}
      />
      {errors.entryDate && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            inputMode="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="ratiochick"
      />
      {errors.ratiochick && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            inputMode="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="QTalimConsu"
      />
      {errors.QTalimConsu && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            inputMode="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="QTalimConsuWeek"
      />
      {errors.QTalimConsuWeek && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            inputMode="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="QTwater"
      />
      {errors.QTwater && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            inputMode="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="wtChicken"
      />
      {errors.wtChicken && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            inputMode="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="DeathDay"
      />
      {errors.DeathDay && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            inputMode="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="number"
      />
      {errors.number && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            inputMode="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="DeathRate"
      />
      {errors.DeathRate && <Text>This is required.</Text>}

      <Button title="Add" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
