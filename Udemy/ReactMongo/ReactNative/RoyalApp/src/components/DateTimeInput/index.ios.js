import React, { useState } from "react";
import { TouchableOpacity, Image, View, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import styles from "./styles";
import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

export default function DateTimeInput({ type, value, onChange }) {
  const [isPickerVisible, setPickerVisible] = useState(false);

  const showPicker = () => {
    setPickerVisible(true);
  };

  const hidePicker = () => {
    setPickerVisible(false);
  };

  const handleConfirm = (selectedValue) => {
    hidePicker();
    onChange(selectedValue);
  };

  const inputValue =
    type === "date" ? format(value, "dd/MM/yyyy") : format(value, "HH:mm");

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.input} onPress={showPicker}>
        <TextInput
          placeholder={
            type === "date"
              ? "Clique para definir a data..."
              : "Clique para definir a hora..."
          }
          editable={false}
          value={inputValue}
        />
        <Image
          style={styles.iconTextInput}
          source={type === "date" ? iconCalendar : iconClock}
        />
      </TouchableOpacity>
      {isPickerVisible && (
        <DateTimePickerModal
          isVisible={isPickerVisible}
          mode={type === "date" ? "date" : "time"}
          date={value}
          onConfirm={handleConfirm}
          onCancel={hidePicker}
        />
      )}
    </View>
  );
}
