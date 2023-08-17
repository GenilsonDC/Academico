import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch,
} from "react-native";
import styles from "./styles";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import typeIcons from "../../utils/typeIcons";
import DateTimeInput from "../../components/DateTimeInput";

export default function Task() {
  const [done, setDone] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Header />

      <ScrollView style={{ width: "100%" }}>
        <ScrollView horizontal={true}>
          {typeIcons.map(
            (icon) =>
              icon && (
                <TouchableOpacity key={icon} style={styles.iconButton}>
                  <Image source={icon} style={styles.gradeIcons} />
                </TouchableOpacity>
              )
          )}
        </ScrollView>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          maxLength={30}
          placeholder="Digite o nome da tarefa ou evento"
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.inputArea}
          maxLength={230}
          multiline={true}
          placeholder="Descreva os detalhes do evento"
        />

        {/* DATA */}
        <DateTimeInput
          type={"date"}
          value={selectedDate}
          onChange={handleDateChange}
        />

        {/* HORA */}
        <DateTimeInput
          type={"hour"}
          value={selectedHour}
          onChange={handleHourChange}
        />

        <View style={styles.inLine}>
          <View style={styles.inputLine}>
            <Switch
              onValueChange={() => setDone(!done)}
              value={done}
              style={styles.switchButton}
              thumbColor={done ? "#00FF7F" : "#FF8C00"}
            />
            <Text style={styles.switchLabel}>Concluído</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.removeLabel}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Footer icon={"save"} />
    </KeyboardAvoidingView>
  );
}
