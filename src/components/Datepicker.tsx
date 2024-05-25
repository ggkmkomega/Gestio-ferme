import React from "react";
import { Button, StyleSheet, View } from "react-native";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import dayjs from "dayjs";

const DatePickerModal = ({
  date,
  setDate,
  open,
  setOpen,
}: {
  date: DateType;
  setDate: (date: DateType) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <View style={styles.container}>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={(params) => setDate(params.date)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});
export default DatePickerModal;
