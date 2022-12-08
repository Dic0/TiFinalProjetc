import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../misc/colors";

const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
  return (
    <AntDesign
      name={antIconName}
      size={size || 24}
      color={color || colors.DARK}
      style={[styles.icon, { ...style }]}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 1,
    color: "#fff",
  },
});

export default RoundIconBtn;
