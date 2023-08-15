import React from "react";
import { format } from "date-fns";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
//icones
import typeIcons from "../../utils/typeIcons";
export default function TaskCard({ done, title, when, type }) {
  return (
    <TouchableOpacity style={[styles.cards, done && styles.done]}>
      <View style={styles.leftCards}>
        <Image source={typeIcons[type]} style={styles.cardActivide}></Image>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <View style={styles.rightCards}>
        <Text style={styles.cardDate}>
          {format(new Date(when), "dd/MM/yyyy")}
        </Text>
        <Text style={styles.cardTime}>{format(new Date(when), "HH:mm")}</Text>
      </View>
    </TouchableOpacity>
  );
}
