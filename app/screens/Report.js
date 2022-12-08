import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

 const Report = () => {
  function atendimentoMulher() {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:180`;
    } else {
      phoneNumber = `telprompt:180`;
    }
    Linking.openURL(phoneNumber);
  }
  function policiaMilitar() {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:190`;
    } else {
      phoneNumber = `telprompt:190`;
    }
    Linking.openURL(phoneNumber);
  }
  function disqueDenuncia() {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:181`;
    } else {
      phoneNumber = `telprompt:181`;
    }
    Linking.openURL(phoneNumber);
  }

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: 15,
        }}
      >
        <View>
          <View style={[styles.conteudo, {marginTop: 42}]}>
            <Text style={styles.titulo}>Central de Atendimento à Mulher</Text>
            <Text style={styles.paragrafo}>
              {"   "}
              Serviço do governo federal que funciona 24h, todos os dias. Nele
              são fornecidas informações, orientações e reaização de denúncias
              (que podem ser anônimas).
            </Text>
            <TouchableOpacity
              style={[styles.botao, { marginBottom: 16 }]}
              onPress={atendimentoMulher}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 17, color: "#00008b" }}
              >
                180
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.conteudo}>
            <Text style={styles.titulo}>Polícia Militar</Text>
            <Text style={styles.paragrafo}>
              {"   "}
              Para casos mais extremos de abuso domético, recomenda-se o contato
              com a Polícia Militar. Após denúncia válida, uma viatura da
              Polícia Militar é enviada imediatamente até o local da infração
              para o atendimento e procedimentos técnicos, seja contenção ou
              mesmo prisão. Disponível 24h por dia, todos os dias. Ligação
              gratuita.
            </Text>
            <TouchableOpacity
              style={[styles.botao, { marginBottom: 16 }]}
              onPress={policiaMilitar}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 17, color: "#00008b" }}
              >
                190
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.conteudo}>
            <Text style={styles.titulo}>
              Delegacia Especial de Atendimento à Mulher - DEAM
            </Text>
            <Text style={styles.paragrafo}>
              {"   "}
              Diante de qualquer situação que configure violência doméstica, a
              mulher deve registrar a ocorrência em uma delegacia de polícia,
              preferencialmente nas Delegacias Especiais de Atendimento à Mulher
              – DEAM, que funciona 24 horas por dia, todos os dias. Costumam ser
              regionais
            </Text>
          </View>
          <View style={styles.conteudo}>
            <Text style={styles.titulo}>Disque Denúncia</Text>
            <Text style={styles.paragrafo}>
              {"  "}
              Este serviço centralizado permite que qualquer pessoa forneça à
              polícia informações sobre delitos e outras formas de violência,
              tendo garantia absoluta de anonimato.
            </Text>
            <TouchableOpacity
              style={[styles.botao, { marginBottom: 16 }]}
              onPress={disqueDenuncia}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 17, color: "#00008b" }}
              >
                181
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StatusBar />
    </>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#00008b",
      marginTop: 35,
    },
    conteudo: {
      backgroundColor: "#00008b",
      borderRadius: 17,
      marginTop: 15,
      margin: 10,
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
      opacity: 0.7,
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
  
  export default Report;