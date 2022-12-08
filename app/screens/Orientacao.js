import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Orientacao = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.conteudo, {marginTop: 42}]}>
        <Text style={styles.titulo}>O QUE É VIOLÊNCIA DOMÉSTICA?</Text>
        <Text style={styles.paragrafo}>
          {"   "}
          De acordo com o art. 5º da Lei Maria da Penha, violência doméstica e
          familiar contra a mulher é “qualquer ação ou omissão baseada no gênero
          que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e
          dano moral ou patrimonial”.
        </Text>
      </View>
      <View style={styles.conteudo}>
        <View>
          <Text style={styles.titulo}>
            POR QUE A LEI MARIA DA PENHA É TÃO IMPORTANTE?
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}
            Com a lei, a autoridade judicial ou policial pode conceder medidas
            protetivas de urgência, que são ações para proteger a mulher, como o
            afastamento do agressor/a do lar, proibição de contato com a vítima
            e testemunhas, suspensão do porte de armas, encaminhamento da mulher
            a programas de proteção, entre outras.{"\n"}
            {"   "}A lei protege a vítima mulher, o agressor pode ser homem ou
            mulher, que tenha relação de afeto ou convivência: podem ser
            maridos/esposas, companheiros/as, namorados/as (que morem juntos ou
            não) e outros/as familiares (pai, mãe, irmão, irmã, filhos/as,
            genro, nora, etc).
          </Text>
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            navigation.navigate("Report");
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17, color: "#00008b" }}>
            ONDE DENUNCIAR?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { marginBottom: 30 }]}
          onPress={() => {
            navigation.navigate("Myth");
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17, color: "#00008b" }}>
            MITOS DA VIOLÊNCIA
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  conteudo: {
    backgroundColor: "#00008b",
    borderRadius: 17,
    marginTop: 15,
    margin: 10,
    marginBottom: 1
  },
  titulo: {
    fontSize: 22,
    textAlign: "center",
    margin: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  paragrafo: {
    fontSize: 19,
    margin: 18,
    textAlign: "justify",
    color: "#fff",
    fontWeight: "bold",
    opacity: 0.8,
  },
  botao: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 7,
    marginBottom: 8,
    backgroundColor: "#fff",
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Orientacao;
