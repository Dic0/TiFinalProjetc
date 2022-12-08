import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Slider({ onFinish }) {
  const { width, height } = Dimensions.get("screen");

  const bgs = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
  const DATA = [
    {
      key: "1",
      title: "Olá, seja muito bem vinda!",
      description:
        "Queremos o melhor pra você! Neste aplicativo iremos lhe ajudar a realizar denúncias de abuso doméstico",
      // image: "",
    },
    {
      key: "2",
      title: "Seu primeiro  passo é criar um login",
      description:
        "Sua senha será a porta de entrada para o lado secreto do app. Basta usar ela como título de seu bloco de notas!",
      // image: "",
    },
    {
      key: "3",
      title:
        "O app pode ser usado também pra fazer suas anotações, sem ninguém perceber!",
      description:
        "Como nosso conceito é segurança, o aplicativo mascara sua navegação justamente para maior confidência do seu usuário",
      // image: "",
    },
    {
      key: "4",
      title: "Agora é só a gente começar!",
      description:
        "",
      // image: "",
    },
  ];
  const [sliderFinish, setSliderFinish] = useState(false);

  const finishSlider = async () => {
    setSliderFinish(true);
    await AsyncStorage.setItem("Slider", JSON.stringify(sliderFinish));
    if (onFinish) onFinish();
  };

  const Indicator = ({ scrollX }) => {
    return (
      <View style={{ position: "absolute", bottom: 100, flexDirection: "row" }}>
        {DATA.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.4, 0.8],
            extrapolate: "clamp",
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 0.9, 0.6],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`indicator-${i}`}
              style={{
                height: 10,
                width: 10,
                borderRadius: 4,
                backgroundColor: "#fff",
                opacity,
                margin: 10,
                transform: [
                  {
                    scale,
                  },
                ],
              }}
            />
          );
        })}
      </View>
    );
  };

  const Backdrop = ({ scrollX }) => {
    const backgroundColor = scrollX.interpolate({
      inputRange: bgs.map((_, i) => i * width),
      outputRange: bgs.map((bg) => bg),
    });
    return (
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor,
          },
        ]}
      />
    );
  };

  const Square = ({ scrollX }) => {
    const YOLO = Animated.modulo(
      Animated.divide(
        Animated.modulo(scrollX, width),
        new Animated.Value(width)
      ),
      1
    );

    const rotate = YOLO.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["35deg", "0deg", "35deg"],
    });
    const translateX = YOLO.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -height, 0],
    });

    return (
      <Animated.View
        style={{
          width: height,
          height: height,
          backgroundColor: "#fff",
          borderRadius: 86,
          position: "absolute",
          top: -height * 0.6,
          left: -height * 0.3,
          transform: [
            {
              rotate,
            },
            {
              translateX,
            },
          ],
        }}
      />
    );
  };

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: "center", padding: 20 }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: "#000",
                    fontWeight: "800",
                    fontSize: 30,
                    marginTop: 100,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    flex: 0.7,
                    justifyContent: "center",
                    padding: 20,
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: width / 2,
                      height: width / 1.5,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontWeight: "300",
                    fontSize: 22,
                    marginTop: 160,
                    textAlign: "justify",
                    fontWeight: 'bold',
                    color: '#1F1F1F',
                  }}
                >
                  {item.description}
                </Text>
                <View >
                  {item.key == "4" ? (
                    <TouchableOpacity
                   
                      onPress={() => {
                        finishSlider();
                      }}
                    >
                      <Text  style={{marginBottom:25, fontSize: 26, textAlign: 'center'}}>Vamos lá!</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Slider;
