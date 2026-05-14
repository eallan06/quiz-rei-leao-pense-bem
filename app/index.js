import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('menu'); 
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [tentativas, setTentativas] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mensagem, setMensagem] = useState("ESCOLHA UMA OPÇÃO");

  const perguntas = [
    { pergunta: "Quem é o pai de Simba?", opcoes: ["Scar", "Mufasa", "Zazu", "Timon"], respostaCorreta: 1 },
    { pergunta: "A África é um vasto...", opcoes: ["Estado", "País", "Continente", "Cidade"], respostaCorreta: 2 },
    { pergunta: "O monte Kilimanjaro está coberto de...", opcoes: ["Catchup", "Chocolate", "Neve", "Flores"], respostaCorreta: 2 },
  ];

  const coresBotoes = ['#E63946', '#457B9D', '#2A9D8F', '#E9C46A'];

  function responder(index) {
    if (index === perguntas[indicePergunta].respostaCorreta) {
      let pontosGanhos = tentativas === 0 ? 3 : tentativas === 1 ? 2 : 1;
      setPontuacao(p => p + pontosGanhos);
      setMensagem("CORRETO!");
      setTimeout(() => {
        if (indicePergunta < perguntas.length - 1) {
          setIndicePergunta(i => i + 1);
          setTentativas(0);
          setMensagem("ESCOLHA UMA OPÇÃO");
        } else {
          setTelaAtual('fim');
        }
      }, 1000);
    } else {
      if (tentativas < 2) {
        setTentativas(t => t + 1);
        setMensagem("TENTE NOVAMENTE");
      } else {
        setMensagem("ERRADO!");
        setTimeout(() => {
          if (indicePergunta < perguntas.length - 1) {
            setIndicePergunta(i => i + 1);
            setTentativas(0);
            setMensagem("ESCOLHA UMA OPÇÃO");
          } else {
            setTelaAtual('fim');
          }
        }, 1000);
      }
    }
  }

  if (telaAtual === 'menu') {
    return (
      <View style={styles.containerMenu}>
        <View style={styles.faixaVermelhaMenu}>
          <Text style={styles.logoPenseBem}>PENSE BEM</Text>
        </View>
        <Text style={styles.tituloDisneyMenu}>DISNEY - O REI LEÃO</Text>
        <View style={styles.visorDigitalMenu}>
          <Text style={styles.textoVisorMenu}>PRONTO PARA O JOGO?</Text>
        </View>
        <TouchableOpacity style={styles.botaoStart} onPress={() => setTelaAtual('quiz')}>
          <Text style={styles.textoBotaoStart}>INICIAR PROGRAMA</Text>
        </TouchableOpacity>
        <Text style={styles.rodapeMenu}>© 1994-2026 NOVA CULTURAL / TEC TOY</Text>
      </View>
    );
  }

  if (telaAtual === 'fim') {
    return (
      <View style={styles.containerFinal}>
        <Text style={styles.tituloFinal}>CICLO DA VIDA CONCLUÍDO</Text>
        <Text style={styles.pontosFinal}>Sua Pontuação Total: {pontuacao}</Text>
        <TouchableOpacity style={styles.botaoGeral} onPress={() => {setTelaAtual('menu'); setIndicePergunta(0); setPontuacao(0);}}>
          <Text style={styles.textoBotaoGeral}>VOLTAR AO INÍCIO</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>DISNEY - O REI LEÃO</Text>
        <Text style={styles.subHeader}>ATIVIDADES PROGRAMADAS</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.progText}>PROGRAMA {indicePergunta + 1}</Text>
        <Text style={styles.pergunta}>{perguntas[indicePergunta].pergunta}</Text>
        {perguntas[indicePergunta].opcoes.map((op, i) => (
          <TouchableOpacity key={i} style={styles.opcaoContainer} onPress={() => responder(i)}>
            <View style={[styles.circuloColorido, {backgroundColor: coresBotoes[i]}]} />
            <Text style={styles.opcaoTexto}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.visorStatus}>
        <Text style={styles.textoVisorStatus}>{mensagem}</Text>
      </View>
      <View style={styles.footerInfo}>
        <Text style={styles.infoText}>PONTOS: {pontuacao}</Text>
        <Text style={styles.infoText}>TENTATIVA: {tentativas + 1}/3</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#D1D1D1' },
  header: { backgroundColor: '#E63946', padding: 15, alignItems: 'center' },
  headerTitle: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  subHeader: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  card: { backgroundColor: '#FFF', margin: 15, padding: 20, borderRadius: 10, borderWeight: 2, borderColor: '#E63946', minHeight: 300 },
  progText: { color: '#E63946', fontWeight: 'bold', marginBottom: 10 },
  pergunta: { fontSize: 20, fontWeight: 'bold', marginBottom: 25 },
  opcaoContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  circuloColorido: { width: 30, height: 30, borderRadius: 15, marginRight: 15, borderWidth: 2, borderColor: '#333' },
  opcaoTexto: { fontSize: 18, fontWeight: '500' },
  visorStatus: { backgroundColor: '#1A1A1A', marginHorizontal: 15, padding: 15, alignItems: 'center', borderBottomWidth: 5, borderBottomColor: '#333' },
  textoVisorStatus: { color: '#00FF00', fontWeight: 'bold', fontSize: 16, letterSpacing: 1 },
  footerInfo: { flexDirection: 'row', justifyContent: 'space-between', padding: 20 },
  infoText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  // Estilos do Menu
  containerMenu: { flex: 1, backgroundColor: '#D1D1D1', justifyContent: 'center', alignItems: 'center' },
  faixaVermelhaMenu: { backgroundColor: '#E63946', width: '100%', padding: 25, position: 'absolute', top: 0, alignItems: 'center' },
  logoPenseBem: { color: '#FFF', fontSize: 35, fontWeight: '900', letterSpacing: 4 },
  tituloDisneyMenu: { fontSize: 28, fontWeight: 'bold', color: '#333', marginTop: 80 },
  visorDigitalMenu: { backgroundColor: '#000', padding: 25, width: '85%', marginVertical: 40, borderRadius: 5, borderWidth: 3, borderColor: '#444' },
  textoVisorMenu: { color: '#00FF00', fontSize: 20, textAlign: 'center', fontWeight: 'bold' },
  botaoStart: { backgroundColor: '#E63946', paddingHorizontal: 50, paddingVertical: 20, borderRadius: 10, elevation: 8 },
  textoBotaoStart: { color: '#FFF', fontWeight: 'bold', fontSize: 22 },
  rodapeMenu: { position: 'absolute', bottom: 20, color: '#666', fontSize: 12 },
  // Estilos do Fim
  containerFinal: { flex: 1, backgroundColor: '#1A1A1A', justifyContent: 'center', alignItems: 'center' },
  tituloFinal: { color: '#FFF', fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  pontosFinal: { color: '#00FF00', fontSize: 24, marginBottom: 40 },
  botaoGeral: { backgroundColor: '#E63946', padding: 20, borderRadius: 10 },
  textoBotaoGeral: { color: '#FFF', fontWeight: 'bold', fontSize: 18 }
});