import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RoundIconBtn from "./RoundIconBtn";
import { useNavigation } from "@react-navigation/native";

const NoteInputModal = ({ visible, onClose, onSubmit, note, isEdit }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [user, setUser] = useState({});
  const navigation = useNavigation();

  const findUser = async () => {
    const result = await AsyncStorage.getItem("user");
    setUser(JSON.parse(result));
  };

  findUser();
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [isEdit]);

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === "title") setTitle(text);
    if (valueFor === "desc") setDesc(text);
  };

  const navigator = () => {
    navigation.navigate("Orientacao");
  };
  const handleSubmit = () => {
    if (title == user.password) {
      setTitle("");
      setDesc("");
      navigator();
    } else if (!title.trim() && !desc.trim()) {
      return onClose();
    } else if (isEdit) {
      onSubmit(title, desc, Date.now());
    } else {
      onSubmit(title, desc);
      setTitle("");
      setDesc("");
    }
    onClose();
  };

  const closeModal = () => {
    if (!isEdit) {
      setTitle("");
      setDesc("");
    }
    onClose();
  };

  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType="fade">
        <View style={styles.container}>
          <TextInput
            value={title}
            onChangeText={(text) => handleOnChangeText(text, "title")}
            placeholder="Titulo"
            style={[styles.input, styles.title]}
          />
          <TextInput
            value={desc}
            multiline
            placeholder="Texto"
            style={[styles.input, styles.desc]}
            onChangeText={(text) => handleOnChangeText(text, "desc")}
          />
          <View style={styles.btnContainer}>
            {title.trim() && desc.trim() ? (
              <RoundIconBtn
                size={15}
                antIconName="check"
                onPress={handleSubmit}
              />
            ) : null}
            <RoundIconBtn
              size={15}
              style={{ marginLeft: 15 }}
              antIconName="close"
              onPress={closeModal}
              color={"#fff"}
            />
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 2,
    borderColor: "#000",
    fontSize: 20,
    color: "#000",
    borderRadius: 15,
  },
  title: {
    height: 80,
    marginBottom: 15,
    fontWeight: "bold",
    paddingLeft: 15,
  },
  desc: {
    height: 100,
    paddingLeft: 15,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
});

export default NoteInputModal;
