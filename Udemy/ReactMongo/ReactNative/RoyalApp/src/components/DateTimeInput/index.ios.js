import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  Image,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format, setHours, setMinutes } from "date-fns";
import styles from "./styles";
import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

export default function ({ type, value, onChange }) {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const scrollViewRef = useRef(null);

  const showPicker = () => {
    setPickerVisible(true);
  };

  const hidePicker = () => {
    setPickerVisible(false);
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  const handleConfirm = (selectedValue) => {
    if (type === "date" && selectedValue < new Date()) {
      if (
        selectedValue.toDateString() === new Date().toDateString() &&
        selectedValue.getHours() >= new Date().getHours()
      ) {
        hidePicker();
        onChange(selectedValue);
      } else {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
      }
    } else {
      hidePicker();
      onChange(selectedValue);
    }
  };

  const inputValue =
    type === "date" ? format(value, "dd/MM/yyyy") : format(value, "HH:mm");

  return (
    <ScrollView ref={scrollViewRef} style={styles.scrollView}>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.inputTouchble} onPress={showPicker}>
          <TextInput style={styles.input} editable={false} value={inputValue} />
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
            minimumDate={type === "time" ? undefined : new Date()} // Impede datas passadas apenas para seleção de data
            minuteInterval={10} // Intervalo de minutos
          />
        )}
      </View>
    </ScrollView>
  );
}
