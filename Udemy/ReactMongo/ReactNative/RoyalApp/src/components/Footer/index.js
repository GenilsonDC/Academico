import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextComponent,
} from "react-native";
import styles from "./styles";
import addButton from "../../assets/add.png";
import saveButton from "../../assets/save.png";

export default function Footer({ icon }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image
          source={icon == "addButton" ? addButton : saveButton}
          style={styles.buttonImage}
        ></Image>
      </TouchableOpacity>

      <Text style={styles.text}>♛ Royal - Organize sua vida - be Royalty</Text>
    </View>
  );
}
