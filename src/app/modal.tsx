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
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data: FormData) => console.log(data);

  type FormData = {
    entryDate: Date;
    firstName: string;
    lastName: string;
  };
  return (
    <View style={{ padding: 20, display: "flex", gap: 20 }}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
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
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Last name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />

      <Button title="Add" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
