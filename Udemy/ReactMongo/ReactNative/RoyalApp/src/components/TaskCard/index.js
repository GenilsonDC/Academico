import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import iconDefalt from "../../assets/study.png";
export default function TaskCard({ cardDone }) {
  return (
    <TouchableOpacity style={[styles.cards, cardDone && styles.cardDone]}>
      <View style={styles.leftCards}>
        <Image source={iconDefalt} style={styles.cardActivide}></Image>
        <Text style={styles.cardTitle}>📚Estudar REACT NATIVE</Text>
      </View>
      <View style={styles.rightCards}>
        <Text style={styles.cardDate}>15/08/2023</Text>
        <Text style={styles.cardTime}>10:00</Text>
      </View>
    </TouchableOpacity>
  );
}
