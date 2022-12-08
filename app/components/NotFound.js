import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NotFound = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <AntDesign name="frowno" size={90} color="#00008b" />
      <Text
        style={{
          marginTop: 20,
          fontSize: 20,
          color: "#00008b",
          fontWeight: "bold",
        }}
      >
        Resultado não encontrado
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
    zIndex: -1,
  },
});

export default NotFound;
