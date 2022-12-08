import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  createRef,
} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Input = forwardRef((props, ref) => {
  const [sec, setSec] = useState(props.secureTextEntry);
  const [error, setError] = useState(false);

  const inputref = createRef();

  useImperativeHandle(ref, () => ({
    focusOnError() {
      setError(true);
      inputref.current.focus();
    },
    resetError() {
      setError(false);
    },
  }));
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: error ? "#E91E63" : "#E4E7EB",
          },
        ]}
        ref={inputref}
        underlineColorAndroid="transparent"
        placeholderTextColor={"#7B8794"}
        {...props}
        secureTextEntry={sec}
      />
      <MaterialCommunityIcons
        name={props.iconName}
        size={24}
        color={error ? "#E91E63" : "#00008b"}
        style={styles.icon}
      />
      {props.secureTextEntry && (
        <TouchableOpacity onPress={() => setSec(!sec)}>
          <MaterialCommunityIcons
            name={sec ? "eye" : "eye-off"}
            size={24}
            color={error ? "#E91E63" : "#00008b"}
            style={styles.iconSecret}
          />
        </TouchableOpacity>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  input: {
    height: 50,
    flex: 1,
    backgroundColor: "#F8F9FA",
    paddingLeft: 40,
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1,
  },
  icon: {
    position: "absolute",
    left: 30,
    top: 12,
  },
  iconSecret: {
    position: "absolute",
    right: 30,
    top: 12,
  },
});

export default Input;
