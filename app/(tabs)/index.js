import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PenseBemReiLeao() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [tentativas, setTentativas] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [fim, setFim] = useState(false);

  const perguntas = [
    { pergunta: "Quem é o pai de Simba?", opcoes: ["Scar", "Mufasa", "Zazu", "Timon"], respostaCorreta: 1 },
    { pergunta: "Quem é o vilão da história?", opcoes: ["Simba", "Scar", "Rafiki", "Pumbaa"], respostaCorreta: 1 },
    { pergunta: "Qual animal é Simba?", opcoes: ["Tigre", "Leão", "Hiena", "Elefante"], respostaCorreta: 1 },
    { pergunta: "Quem são os amigos de Simba?", opcoes: ["Zazu e Rafiki", "Timon e Pumbaa", "Scar e Hienas", "Mufasa e Nala"], respostaCorreta: 1 },
    { pergunta: "Quem mata Mufasa?", opcoes: ["Simba", "Hienas", "Scar", "Zazu"], respostaCorreta: 2 },
    { pergunta: "Quem é a mãe de Simba?", opcoes: ["Nala", "Sarabi", "Shenzi", "Kiara"], respostaCorreta: 1 },
    { pergunta: "Qual é o nome da amiga de infância de Simba?", opcoes: ["Sarabi", "Nala", "Kiara", "Zira"], respostaCorreta: 1 },
    { pergunta: "Quem apresenta Simba ao reino quando ele nasce?", opcoes: ["Scar", "Rafiki", "Zazu", "Timon"], respostaCorreta: 1 },
    { pergunta: "O que Simba pensa que causou a morte de Mufasa?", opcoes: ["As hienas", "Ele mesmo", "Scar", "Um acidente"], respostaCorreta: 1 },
    { pergunta: "Onde Simba cresce depois de fugir?", opcoes: ["Na selva", "No deserto", "Na floresta com Timon e Pumbaa", "Na montanha"], respostaCorreta: 2 },
    { pergunta: "Qual é o lema de Timon e Pumbaa?", opcoes: ["Carpe diem", "Hakuna Matata", "Sem medo", "Vida longa"], respostaCorreta: 1 },
    { pergunta: "Quem convence Simba a voltar?", opcoes: ["Scar", "Nala", "Zazu", "Sarabi"], respostaCorreta: 1 },
    { pergunta: "Quem é Rafiki?", opcoes: ["Leão", "Macaco", "Hiena", "Pássaro"], respostaCorreta: 1 },
    { pergunta: "Qual animal é Zazu?", opcoes: ["Águia", "Papagaio", "Calau", "Corvo"], respostaCorreta: 2 },
    { pergunta: "Quem lidera as hienas?", opcoes: ["Shenzi", "Banzai", "Ed", "Scar"], respostaCorreta: 0 },
    { pergunta: "Onde Mufasa morre?", opcoes: ["Na savana", "No desfiladeiro", "Na floresta", "Na montanha"], respostaCorreta: 1 },
    { pergunta: "Quem salva Simba quando filhote das hienas?", opcoes: ["Scar", "Mufasa", "Zazu", "Rafiki"], respostaCorreta: 1 },
    { pergunta: "O que Scar diz para Simba após a morte de Mufasa?", opcoes: ["Fique", "Fuja e nunca volte", "Você é rei", "Procure ajuda"], respostaCorreta: 1 },
    { pergunta: "Quem reencontra Simba adulto?", opcoes: ["Sarabi", "Nala", "Zazu", "Rafiki"], respostaCorreta: 1 },
    { pergunta: "Qual o nome do reino de Mufasa?", opcoes: ["Reino da Selva", "Terra do Reino", "Savana Real", "Montanha do Rei"], respostaCorreta: 1 },
    { pergunta: "Quem trai Mufasa?", opcoes: ["Zazu", "Scar", "Simba", "Rafiki"], respostaCorreta: 1 },
    { pergunta: "O que acontece com o reino sob Scar?", opcoes: ["Fica rico", "Fica destruído", "Fica maior", "Nada muda"], respostaCorreta: 1 },
    { pergunta: "Quem derrota Scar?", opcoes: ["Nala", "Simba", "Rafiki", "Pumbaa"], respostaCorreta: 1 },
    { pergunta: "Como Scar morre?", opcoes: ["Cai do penhasco", "É morto pelas hienas", "Foge", "É preso"], respostaCorreta: 1 },
    { pergunta: "Quem se torna rei no final?", opcoes: ["Scar", "Mufasa", "Simba", "Zazu"], respostaCorreta: 2 },
    { pergunta: "Quem são os ajudantes de Scar?", opcoes: ["Leões", "Hienas", "Macacos", "Elefantes"], respostaCorreta: 1 },
    { pergunta: "O que Rafiki mostra a Simba?", opcoes: ["O passado", "O espírito de Mufasa", "O futuro", "O reino"], respostaCorreta: 1 },
    { pergunta: "Qual a mensagem do filme?", opcoes: ["Medo", "Ciclo da vida", "Guerra", "Riqueza"], respostaCorreta: 1 },
    { pergunta: "Quem é Pumbaa?", opcoes: ["Leão", "Javali", "Hiena", "Macaco"], respostaCorreta: 1 },
    { pergunta: "Quem é Timon?", opcoes: ["Suricato", "Macaco", "Leão", "Hiena"], respostaCorreta: 0 }
  ];

  const coresBotoes = ['#E74C3C', '#3498DB', '#27AE60', '#F1C40F']; // Vermelho, Azul, Verde, Amarelo (Estilo Pense Bem)

  const perguntaAtual = perguntas[indicePergunta];

  function proximaPergunta() {
    setTentativas(0);
    setMensagem("");
    if (indicePergunta < perguntas.length - 1) {
      setIndicePergunta(i => i + 1);
    } else {
      setFim(true);
    }
  }

  function responder(opcaoEscolhida) {
    if (opcaoEscolhida === perguntaAtual.respostaCorreta) {
      let pontos = tentativas === 0 ? 3 : tentativas === 1 ? 2 : 1;
      setPontuacao(p => p + pontos);
      setMensagem("CORRETO!");
      setTimeout(proximaPergunta, 800);
    } else {
      if (tentativas < 2) {
        setTentativas(t => t + 1);
        setMensagem("TENTE NOVAMENTE");
      } else {
        setMensagem("ERRADO!");
        setTimeout(proximaPergunta, 800);
      }
    }
  }

  if (fim) {
    return (
      <View style={styles.containerFinal}>
        <Text style={styles.tituloLivro}>PENSE BEM</Text>
        <View style={styles.cardFinal}>
          <Text style={styles.tituloResultado}>FIM DAS ATIVIDADES</Text>
          <Text style={styles.pontosFinal}>PONTOS: {pontuacao}</Text>
          <TouchableOpacity style={styles.botaoGeral} onPress={() => {setIndicePergunta(0); setFim(false); setPontuacao(0);}}>
            <Text style={styles.textoBotaoGeral}>REINICIAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topoLivro}>
        <Text style={styles.tituloLivro}>DISNEY - O REI LEÃO</Text>
        <Text style={styles.subtituloLivro}>ATIVIDADES PROGRAMADAS</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.cardPagina}>
          <Text style={styles.numPrograma}>PROGRAMA {indicePergunta + 1}</Text>
          <Text style={styles.perguntaTexto}>{perguntaAtual.pergunta}</Text>

          {perguntaAtual.opcoes.map((opcao, index) => (
            <View key={index} style={styles.containerOpcao}>
              <TouchableOpacity
                style={[styles.botaoCor, { backgroundColor: coresBotoes[index] }]}
                onPress={() => responder(index)}
              />
              <Text style={styles.opcaoTexto}>{opcao}</Text>
            </View>
          ))}
        </View>

        <View style={styles.visorPenseBem}>
          <Text style={styles.textoVisor}>{mensagem || "ESCOLHA UMA OPÇÃO"}</Text>
        </View>

        <View style={styles.statusRodape}>
          <Text style={styles.pontosRodape}>PONTOS: {pontuacao}</Text>
          <Text style={styles.tentativasRodape}>TENTATIVA: {tentativas + 1}/3</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1D1D1', // Cinza do brinquedo
  },
  topoLivro: {
    backgroundColor: '#E63946',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#A02020',
  },
  tituloLivro: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '900',
  },
  subtituloLivro: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardPagina: {
    backgroundColor: '#FFF',
    margin: 15,
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#333',
  },
  numPrograma: {
    color: '#E63946',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  perguntaTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  containerOpcao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  botaoCor: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#333',
    marginRight: 15,
  },
  opcaoTexto: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  visorPenseBem: {
    backgroundColor: '#1A1A1A', // Preto do visor digital
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#555',
    alignItems: 'center',
  },
  textoVisor: {
    color: '#00FF00', // Verde digital
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  statusRodape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  pontosRodape: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tentativasRodape: {
    fontSize: 16,
    color: '#555',
  },
  // Estilos da tela final
  containerFinal: {
    flex: 1,
    backgroundColor: '#E63946',
    justifyContent: 'center',
    padding: 20,
  },
  cardFinal: {
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  tituloResultado: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
  },
  pontosFinal: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  botaoGeral: {
    backgroundColor: '#333',
    padding: 15,
    width: '100%',
    borderRadius: 5,
  },
  textoBotaoGeral: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});