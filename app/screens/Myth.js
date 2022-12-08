import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";


 const Myth = () => {
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: 15,
        }}
      >
        <View style={{marginTop: 15}}>
          <Text style={styles.titulo}>
            "As mulheres apanham porque gostam ou porque provocam."
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}
            Quem é vítima de violência doméstica passa muito tempo tentando
            evitá-la para assegurar sua própria proteção e a de seus filhos. As
            mulheres ficam ao lado dos agressores por medo, vergonha ou falta de
            recursos financeiros, sempre esperando que a violência acabe, e
            nunca para manter a violência.
          </Text>
          <Text style={styles.titulo}>
            "A violência doméstica só acontece em famílias de baixa renda e
            pouca instrução."
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}A violência doméstica é um fenômeno que não distingue classe
            social, raça, etnia, religião, orientação sexual, idade e grau de
            escolaridade. Na maioria desses casos, elas já vinham sofrendo
            diversos tipos de violência há algum tempo, mas a situação só chega
            ao conhecimento de outras pessoas quando as agressões crescem a
            ponto de culminar no feminicídio.
          </Text>
          <Text style={styles.titulo}>
            "É fácil identificar o tipo de mulher que apanha."
          </Text>
          <Text style={styles.paragrafo}>
            {" "}
            Não existe um perfil específico de quem sofre violência doméstica.
            Qualquer mulher, em algum período de sua vida, pode ser vítima desse
            tipo de violência.
          </Text>
          <Text style={styles.titulo}>
            "A violência doméstica não ocorre com frequência."
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}
            Segundo dados da Organização Mundial da Saúde (OMS), em 2013 o
            Brasil já ocupava o 5º lugar, num ranking de 83 países onde mais se
            matam mulheres. São 4,8 homicídios por 100 mil mulheres, em que
            quase 30% dos crimes ocorrem nos domicílios. Além disso, uma
            pesquisa do DataSenado (2013) revelou que 1 em cada 5 brasileiras
            assumiu que já foi vítima de violência doméstica e familiar
            provocada por um homem
          </Text>
          <Text style={styles.titulo}>
            "Para acabar com a violência, basta proteger as vítimas e punir os
            agressores."
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}
            Tanto a proteção das vítimas quanto a punição dos agressores são
            importantes no combate à violência. Mas isso não é suficiente,
            principalmente porque a violência doméstica e familiar contra as
            mulheres é um problema estrutural, ou seja, ocorre com frequência em
            todos os estratos sociais, obedecendo a uma lógica de agressões que
            já são mapeadas pelo ciclo da violência.
          </Text>
          <Text style={styles.titulo}>
            "A mulher não pode denunciar a violência doméstica em qualquer
            delegacia."
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}A violência doméstica pode, sim, ser denunciada em qualquer
            delegacia, sem perder de vista, entretanto, que a Delegacia
            Especializada no Atendimento à Mulher (DEAM) é o órgão mais
            capacitado para realizar ações de prevenção, proteção e investigação
            dos crimes de violência de gênero. O acesso à justiça é garantido às
            mulheres no art. 3º da Lei Maria da Penha.
          </Text>
          <Text style={styles.titulo}>
            "Se a situação fosse tão grave, as vítimas abandonariam logo os
            agressores."
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}
            Grande parte dos feminicídios ocorre na fase na qual as mulheres
            estão tentando se separar dos agressores. Algumas vítimas, após
            passarem por inúmeros tipos de violência, desenvolvem uma sensação
            de isolamento e ficam paralisadas, sentindo-se impotentes para
            reagir, quebrar o ciclo da violência e sair dessa situação.
          </Text>
          <Text style={styles.titulo}>
            "É melhor continuar na relação, mesmo sofrendo agressões, do que se
            separar e criar o filho sem o pai."
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}
            Muitas mulheres acreditam que suportar as agressões e continuar no
            relacionamento é uma forma de proteger os filhos. No entanto, eles
            vivenciam e sofrem a violência com a mãe.
          </Text>
          <Text style={styles.titulo}>
            "Em briga de marido e mulher não se mete a colher./Roupa suja se
            lava em casa."
          </Text>
          <Text style={styles.paragrafo}>
            {"  "}A violência sofrida pela mulher é um problema social e público
            enquanto impacta a economia do País e absorve recursos e esforços
            substanciais tanto do Estado quanto do setor privado: aposentadorias
            precoces, pensões por morte, auxílios-doença, afastamentos do
            trabalho, consultas médicas, internações, etc. Conforme o § 2 do
            art., Além disso, desde 2012, por decisão do Supremo Tribunal
            Federal, a Lei Maria da Penha é passível de ser aplicada mesmo sem
            queixa da vítima, o que significa que qualquer pessoa pode fazer a
            denúncia contra o agressor, inclusive de forma anônima.
          </Text>
          <Text style={styles.titulo}>
            "Os agressores não sabem controlar suas emoções."
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}
            Se isso fosse verdade, eles também agrediriam chefes, colegas de
            trabalho e outros familiares, e não somente a esposa, as filhas e os
            filhos. A violência doméstica não é apenas uma questão de
            “administrar” a raiva. Os agressores sabem como se controlar, tanto
            que não batem no patrão, e sim na mulher ou nos filhos. Além disso,
            eles agem dessa maneira porque acreditam que não haverá
            consequências pelos seus atos.
          </Text>
          <Text style={styles.titulo}>
            "A violência doméstica vem de problemas com o álcool, drogas ou
            doenças mentais."
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}
            Muitos homens agridem as suas mulheres sem que apresentem qualquer
            um desses fatores.
          </Text>
          <Text style={styles.titulo}>
            "A Lei Maria da Penha pode ser aplicada tanto para o homem quanto
            para a mulher."
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}A Lei Maria da Penha será aplicada para proteger todas as
            pessoas que se identificam com o gênero feminino e que sofram
            violência em razão desse fato − conforme o parágrafo único do art.
            5º da lei, a violência doméstica e familiar contra a mulher pode se
            configurar independentemente de orientação sexual. Inclusive, alguns
            tribunais de justiça já aplicam a legislação para mulheres
            transexuais. Quanto ao homem, ele será colocado diante da Lei n.
            11.340/2006 sempre que for considerado um agressor. Se ele for
            vítima, serão aplicados os dispositivos previstos no Código Penal, e
            não aqueles presentes na Lei Maria da Penha.
          </Text>
          <Text style={styles.titulo}>
            "A Lei Maria da Penha só foi feita para as mulheres se vingarem dos
            homens."
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}A Lei Maria da Penha cria mecanismos para enfrentar e
            combater a violência doméstica e familiar contra a mulher, ou seja,
            trata-se de uma lei elaborada para proteger as mulheres, trazendo
            inclusive definições claras e precisas sobre a violência de gênero.
            Todo homem que se tornar um agressor infringe a lei e viola os
            direitos humanos das mulheres. Portanto, é preciso fazer o registro
            de ocorrência para que a autoridade policial realize os
            procedimentos necessários tanto para a proteção da vítima quanto
            para a investigação dos fatos. Diante disso, em vez de falar em
            “vingança”, deve-se falar em “justiça”.
          </Text>
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
    titulo: {
      fontSize: 22,
      textAlign: "center",
      margin: 15,
      marginTop: 35,
      marginBottom: 5,
      fontWeight: "bold",
      color: "#000",
    },
    paragrafo: {
      fontSize: 19,
      margin: 18,
      textAlign: "justify",
      color: "#000",
      fontWeight: "bold",
      opacity: 0.7,
    },
    botao: {
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
      borderRadius: 7,
      marginBottom: 8,
      backgroundColor: "#00008b",
      marginLeft: 20,
      marginRight: 20,
    },
  });
  export default Myth;