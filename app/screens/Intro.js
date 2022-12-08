import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createRef, useState, useEffect } from "react";
import Input from "../components/input";
import { showToast } from "../store/modules/toast/actions";
// import { useDispatch } from "react-redux";
// import { Toast } from "../components/Toast";

import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

const Intro = ({ onFinish }) => {
  // const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState(null);

  const user = {
    name: userName,
    password: password,
  };

  const nomeInput = createRef();
  const passInput = createRef();

  useEffect(() => nomeInput.current.resetError(), [userName]);
  useEffect(() => passInput.current.resetError(), [password]);

  const handleSubmit = async () => {
    if (userName == null || userName.trim() == "") {
      // dispatch(showToast("Nome inválido", "error", "account-outline"));
      nomeInput.current.focusOnError();
      return;
    }
    if (password == null || password.trim() == "") {
      // dispatch(showToast("Senha inválida", "error", "lock-outline"));
      passInput.current.focusOnError();
      return;
    } else {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      if (onFinish) onFinish();
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      {/* <Toast /> */}

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            backgroundColor: "#00008b",
            margin: 30,
            height: "50%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Input
            ref={nomeInput}
            iconName={"account-outline"}
            placeholder="Seu Nome"
            placeholderTextColor={'#00008b'}
            autoCorrect={false}
            keyboardType="default"
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
          />
          <Input
            ref={passInput}
            iconName={"lock-outline"}
            secureTextEntry
            placeholder="Senha"
            placeholderTextColor={'#00008b'}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <View style={styles.container}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Logar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    backgroundColor: "#fff",
    borderStartColor: "#fff",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#00008b",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Intro;
