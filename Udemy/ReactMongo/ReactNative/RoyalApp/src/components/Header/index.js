import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

// ICONES
import logo from "../../assets/icoCrown.png";
import bell from "../../assets/bell.png";
import qrCode from "../../assets/qrcode.png";
import back from "../../assets/back.png";

export default function header({
  showNotification,
  showLeftImage,
  pressBellNotification,
  late,
  navigation,
}) {
  function Back() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.header}>
      {showLeftImage ? (
        <TouchableOpacity style={styles.leftIcons} onPress={Back}>
          <Image source={qrCode} style={styles.leftIconsImage} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.leftIcons}>
          <Image source={back} style={styles.leftIconsImage} />
        </TouchableOpacity>
      )}
      <Image source={logo} style={styles.logo} />
      {showNotification && late > 0 && (
        <TouchableOpacity
          style={styles.notification}
          onPress={pressBellNotification}
        >
          <Image source={bell} style={styles.bellImageNotification} />
          <View style={styles.circleNotification}>
            <Text style={styles.numbersNotification}>{late}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
