import * as React from "react";

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

export default function Task({ navigation }) {
  const [done, setDone] = useState(false);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Header navigation={navigation} />

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
        <DateTimeInput type={"date"} value={date} onChange={handleDateChange} />

        {/* HORA */}
        <DateTimeInput type={"hour"} value={hour} onChange={handleHourChange} />

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
