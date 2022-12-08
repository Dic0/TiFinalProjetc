import {
  View,
  Text,
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../../store/modules/toast/actions";

let timer = null;

const { width } = Dimensions.get("window");

const Toast = () => {

  const dispatch = useDispatch();

  const colors = {
    success: "#43D29E",
    warn: "#FD951F",
    error: "#E91e63",
    default: "#3A405B",
  };

  const [styleStatusBar, setStyleStatusBar] = useState("dark-content");
  const [pos] = useState(new Animated.Value(-(getStatusBarHeight() + 60)));
  const toastfy = useSelector((state) => state.toast);


  useEffect(() => {
    toastfy.show && show();
  }, [toastfy]);

  function show() {
    clearTimeout(timer);
    setStyleStatusBar("light-content");
    Animated.timing(pos, {
      toValue: 0,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start();
    timer = setTimeout(() => {
      hide();
    }, toastfy.duration);
  }

  function hide() {
    Animated.timing(pos, {
      toValue: -(getStatusBarHeight() + 60),
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start(() => {
      dispatch(hideToast());
      setStyleStatusBar("light-content");
    });
  }

  function zIndex(val) {
    return Platform.select({
      ios: { zIndex: val },
      android: { elevation: val },
    });
  }
  return (
    <View style={{ ...zIndex(100) }}>
      <StatusBar
        barStyle={styleStatusBar}
        backgroundColor={colors[toastfy.type]}
        translucent={true}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          clearTimeout(timer);
          hide();
        }}
      >
        <Animated.View
          style={[
            styles.default,
            {
              backgroundColor: colors[toastfy.type],
              transform: [{ translateY: pos }],
            },
          ]}
        >
          <View style={styles.msgContainer}>
            {toastfy.iconName !== "" && (
              <MaterialCommunityIcons
                name={toastfy.iconName}
                color="#fff"
                size={26}
              />
            )}
            <Text style={styles.txt}>{toastfy?.message}</Text>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    position: "absolute",
    width,
    paddingHorizontal: 7,
    paddingBottom: 20,
    paddingTop: getStatusBarHeight() + 7,
    alignSelf: "center",
    justifyContent: "center",
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  txt: {
    color: "#fff",
    fontSize: 14,
    marginHorizontal: 10,
  },
});

export default Toast;