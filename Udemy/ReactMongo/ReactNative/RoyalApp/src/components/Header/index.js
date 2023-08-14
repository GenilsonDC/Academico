import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

// ICONES
import logo from "../../assets/icoCrown.png";
import bell from "../../assets/bell.png";
import qrCode from "../../assets/qrcode.png";
import backButton from "../../assets/back.png";

export default function header({ showNotification, showLeftImage }) {
  return (
    <View style={styles.header}>
      {showLeftImage ? (
        <TouchableOpacity style={styles.leftIcons}>
          <Image source={qrCode} style={styles.leftIconsImage} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.leftIcons}>
          <Image source={backButton} style={styles.leftIconsImage} />
        </TouchableOpacity>
      )}
      <Image source={logo} style={styles.logo} />
      {showNotification && (
        <TouchableOpacity style={styles.notification}>
          <Image source={bell} style={styles.bellImageNotification} />
          <View style={styles.circleNotification}>
            <Text style={styles.numbersNotification}>23</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
