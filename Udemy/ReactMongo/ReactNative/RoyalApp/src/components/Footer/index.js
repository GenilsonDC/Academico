import * as React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import add from "../../assets/add.png";
import save from "../../assets/save.png";

export default function Footer({ icon, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={icon == "add" ? add : save}
          style={styles.buttonImage}
        ></Image>
      </TouchableOpacity>

      <Text style={styles.text}>♛ Royal - Genilson do Carmo - 2023</Text>
    </View>
  );
}
