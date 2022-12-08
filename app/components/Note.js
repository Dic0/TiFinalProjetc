import React from "react";
import { StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";

const Note = ({ item, onPress }) => {
  const { title, desc } = item;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text numberOfLines={3} style={{ color: "#fff" }}>
        {desc}
      </Text>
    </TouchableOpacity>
  );
};

const width = Dimensions.get("window").width - 40;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00008b",
    width: width - 10,
    padding: 12,
    marginTop: 15,
    borderRadius: 10,
    marginLeft: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
});

export default Note;
