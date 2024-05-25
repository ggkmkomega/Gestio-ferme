import React from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = ({
  date,
  setDate,
  open,
  setOpen,
}: {
  date: Date;
  setDate: (date: Date) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <View>
      <Button title="Select Date" onPress={() => setOpen(true)} />
      <DateTimePickerModal
        isVisible={open}
        mode="date"
        date={date}
        onConfirm={(date) => {
          setDate(date);
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
};

export default DatePicker;
