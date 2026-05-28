import { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('menu');
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [tentativas, setTentativas] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mensagem, setMensagem] = useState("ESCOLHA UMA OPÇÃO");
  const [codigoDigitado, setCodigoDigitado] = useState('');
  const [programaAtual, setProgramaAtual] = useState(null);
  const [erroCodigo, setErroCodigo] = useState('');

  const perguntas = [
  { pergunta: "A África é um vasto...", opcoes: ["estado", "país", "continente", "cidade"], respostaCorreta: 2 },

  { pergunta: "Lá viveram os primeiros ... há mais de 3 milhões de anos.", opcoes: ["brasileiros", "homens", "astronautas", "extraterrestres"], respostaCorreta: 1 },

  { pergunta: "Na África vivem muitos povos diferentes, cada um com sua ... e seus costumes.", opcoes: ["orelha", "língua", "mão", "perna"], respostaCorreta: 1 },

  { pergunta: "A história de o rei leão se passa na Tanzânia, onde fica a montanha mais alta da África:", opcoes: ["alpes", "everest", "kilimanjaro", "sinai"], respostaCorreta: 2 },

  { pergunta: "O imponente perfil desse monte está sempre coberto de...", opcoes: ["catchup", "chocolate", "flores", "neve"], respostaCorreta: 3 },

  { pergunta: "Aos pés do Kilimanjaro estende-se uma enorme planície chamada...", opcoes: ["floresta amazônica", "chapada dos guimarães", "serra do mar", "parque nacional do serengeti"], respostaCorreta: 3 },

  { pergunta: "O parque nacional de serengeti reúne uma das maiores concentrações de ... de todo o mundo.", opcoes: ["automóveis", "animais", "shopping centers", "pessoas"], respostaCorreta: 1 },

  { pergunta: "Na frase 'Bonito dia de verão', qual palavra dá qualidade?", imagem: require('../assets/assets/savana1.png'), opcoes: ["bonito", "dia", "de", "verão"], respostaCorreta: 0 },

  { pergunta: "Na frase 'Azul é o céu', qual palavra dá qualidade?", imagem: require('../assets/assets/savana1.png'), opcoes: ["azul", "é", "o", "céu"], respostaCorreta: 0 },

  { pergunta: "Na frase 'O capim é alto', qual palavra dá qualidade?", imagem: require('../assets/assets/savana1.png'), opcoes: ["o", "capim", "é", "alto"], respostaCorreta: 3 },

  { pergunta: "Na frase 'Vejo um pequeno leão', qual palavra dá qualidade?", imagem: require('../assets/assets/savana1.png'), opcoes: ["vejo", "um", "pequeno", "leão"], respostaCorreta: 2 },

  { pergunta: "Na frase 'Olhos grandes ele tem', qual palavra dá qualidade?", imagem: require('../assets/assets/savana1.png'), opcoes: ["olhos", "grandes", "ele", "tem"], respostaCorreta: 1 },

  { pergunta: "Na frase 'Leãozinho tem pelo macio', qual palavra dá qualidade?", imagem: require('../assets/assets/savana1.png'), opcoes: ["leãozinho", "tem", "pelo", "macio"], respostaCorreta: 3 },

  { pergunta: "Simba é um filhote de...", opcoes: ["leão", "hipopótamo", "tigre", "rinoceronte"], respostaCorreta: 0 },

  { pergunta: "Além dos leões, vivem na planície outros animais, como as ... de pelo listrado.", opcoes: ["zebras", "girafas", "onças", "raposas"], respostaCorreta: 0 },

  { pergunta: "Há também as gazelas, que correm muito e dão ... graciosos.", opcoes: ["saltos", "mergulhos", "cambalhotas", "gritos"], respostaCorreta: 0 },

  { pergunta: "Os animais que comem capim, frutos, raízes e sementes são...", opcoes: ["vegetais", "frutíferos", "herbívoros", "horticultores"], respostaCorreta: 2 },

  { pergunta: "O leão, a leoa e a hiena gostam de comer carne. Eles são...", opcoes: ["carnívoros", "palmípedes", "mustelídeos", "insetívoros"], respostaCorreta: 0 },

  { pergunta: "Os elefantes são os ... animais da planície de serengeti.", opcoes: ["alegres", "distantes", "maiores", "menores"], respostaCorreta: 2 },

  { pergunta: "Por ali passam também os javalis, que vivem em...", opcoes: ["ninhos", "casas", "bandos", "árvores"], respostaCorreta: 2 },

  { pergunta: "Entre os pássaros do serengeti destacam-se as ... avestruzes.", opcoes: ["peludas", "velozes", "ferozes", "falantes"], respostaCorreta: 1 },

  { pergunta: "O corpo do aardvark lembra o de uma...", opcoes: ["tartaruga", "zebra", "girafa", "canguru"], respostaCorreta: 3 },

  { pergunta: "As orelhas parecem com as do...", opcoes: ["burro", "elefante", "foca", "raposa"], respostaCorreta: 0 },

  { pergunta: "O longo focinho é semelhante ao do...", opcoes: ["tucano", "porco", "hipopótamo", "besouro"], respostaCorreta: 1 },

  { pergunta: "Ele tem uma língua comprida semelhante à do...", opcoes: ["tamanduá", "tubarão", "gato", "rato"], respostaCorreta: 0 },

  { pergunta: "O aardvark se alimenta de...", opcoes: ["borboletas e libélulas", "formigas e cupins", "camarões e lulas", "empadinhas e pastéis"], respostaCorreta: 1 },

  { pergunta: "De quem é esta pele?", imagem: require('../assets/assets/27.png'), opcoes: ["panda", "onça", "cascavel", "girafa"], respostaCorreta: 3 },

  { pergunta: "De quem é esta pele?", imagem: require('../assets/assets/28.png'), opcoes: ["zebra", "tigre", "jacaré", "coral"], respostaCorreta: 0 },

  { pergunta: "De quem é esta pele?", imagem: require('../assets/assets/29.png'), opcoes: ["coala", "sucuri", "onça", "canguru"], respostaCorreta: 2 },

  { pergunta: "De quem é esta pele?", imagem: require('../assets/assets/30.png'), opcoes: ["tigre", "zebra", "elefante", "taturana"], respostaCorreta: 0 },
];

  const coresBotoes = ['#E63946', '#E9C46A', '#2a459d', '#99e96a'];

  function iniciarPrograma() {
  if (codigoDigitado === '121') {
    setProgramaAtual(1);
    setTelaAtual('quiz');
    setErroCodigo('');
    setIndicePergunta(0);
    setTentativas(0);
    setPontuacao(0);
    setMensagem("ESCOLHA UMA OPÇÃO");
  } else {
    setErroCodigo('CÓDIGO INVÁLIDO');
  }
}

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
        <Image
  source={require('../assets/assets/leao.png')}
  style={styles.imagemLeao}
/>
         <Text style={styles.tituloDisneyMenu}>DISNEY - O REI LEÃO</Text>
        <View style={styles.visorDigitalMenu}>
          <Text style={styles.textoVisorMenu}>DIGITE O CÓDIGO DO LIVRO</Text>
        </View>
        <TextInput
  style={styles.inputCodigo}
  value={codigoDigitado}
  onChangeText={setCodigoDigitado}
  placeholder=""
  placeholderTextColor="#777"
  keyboardType="numeric"
  maxLength={3}
  autoComplete="off"
  autoCorrect={false}
/>

{erroCodigo !== '' && (
  <Text style={styles.erroCodigo}>{erroCodigo}</Text>
)}

<TouchableOpacity style={styles.botaoStart} onPress={iniciarPrograma}>
  <Text style={styles.textoBotaoStart}>START</Text>
</TouchableOpacity>
        <Text style={styles.rodapeMenu}>© 1994-2026 NOVA CULTURAL / TEC TOY</Text>
      </View>
    );
  }

  if (telaAtual === 'fim') {
  return (
    <ImageBackground
  source={require('../assets/assets/savana.jpg')}
  style={styles.containerFinal}
  resizeMode="cover"
>
      <Text style={styles.tituloFinal}>CICLO DA VIDA CONCLUÍDO</Text>
      <Text style={styles.fraseFinal}>Você honrou o reino e completou o desafio.</Text>
      <Text style={styles.pontosFinal}>Pontuação Total: {pontuacao} / 90</Text>

      <TouchableOpacity style={styles.botaoGeral} onPress={() => {
        setTelaAtual('menu');
        setIndicePergunta(0);
        setTentativas(0);
        setPontuacao(0);
        setMensagem("ESCOLHA UMA OPÇÃO");
      }}>
        <Text style={styles.textoBotaoGeral}>JOGAR NOVAMENTE</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>DISNEY - O REI LEÃO</Text>
        <Text style={styles.subHeader}>ATIVIDADES PROGRAMADAS</Text>
      </View>
      <View style={styles.card}>
  <Text style={styles.progText}>PROGRAMA {programaAtual}</Text>

{indicePergunta >= 7 && indicePergunta <= 12 && (
  <View style={styles.blocoContexto}>
    <Text style={styles.textoContexto}>
      O pequeno Simba nasceu e cresceu na imensa savana que é a planície de Serengeti.
    </Text>

    <Text style={styles.textoContexto}>
      Nas savanas, a vegetação é rasteira, e de vez em quando aparece uma árvore solitária.
    </Text>

    <Text style={styles.textoInstrucao}>
      Olhe bem a figura e assinale as palavras que dão qualidade:
    </Text>
  </View>
)}

<Text style={styles.pergunta}>
  {indicePergunta + 1}. {perguntas[indicePergunta].pergunta}
</Text>

{perguntas[indicePergunta].imagem && (
  <Image
    source={perguntas[indicePergunta].imagem}
    style={styles.imagemPergunta}
    resizeMode="stretch"
  />
)}
        {perguntas[indicePergunta].opcoes.map((op, i) => (
          <TouchableOpacity key={i} style={styles.opcaoContainer} onPress={() => responder(i)}activeOpacity={0.7}>
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
  container: {
  flex: 1,
  backgroundColor: '#F2D27B',
},

header: {
  backgroundColor: '#B22222',
  paddingVertical: 24,
  paddingHorizontal: 10,
  alignItems: 'center',
  borderBottomWidth: 5,
  borderBottomColor: '#7A1111',
},

headerTitle: {
  color: '#FFF3C4',
  fontSize: 24,
  fontWeight: '900',
  letterSpacing: 1,
  textAlign: 'center',
},

subHeader: {
  color: '#FFE6A3',
  fontSize: 13,
  fontWeight: 'bold',
  marginTop: 4,
},

card: {
  backgroundColor: '#FFF3C4',
  margin: 18,
  padding: 22,
  borderRadius: 18,
  borderWidth: 4,
  borderColor: '#7A1111',
  minHeight: 330,
  elevation: 6,
  maxWidth: 1200,
  alignSelf: 'center',
  width: '95%',
},

progText: {
  color: '#B22222',
  fontWeight: '900',
  marginBottom: 12,
  fontSize: 15,
  letterSpacing: 1,
},

pergunta: {
  width: '100%',
  marginTop: 10,
  fontSize: 22,
  fontWeight: '900',
  color: '#3A1F0B',
  marginBottom: 25,
  lineHeight: 28,
},

imagemPergunta: {
   width: '90%',
  height: 180,
  alignSelf: 'center',
  borderRadius: 12,
  marginBottom: 20,
},

textoBotaoGeral: {
  color: '#FFF3C4',
  fontWeight: '900',
  fontSize: 22,
  letterSpacing: 1,
  textAlign: 'center',
},

blocoContexto: {
  backgroundColor: '#FFF8DC',
  padding: 14,
  borderRadius: 10,
  marginBottom: 18,
  borderWidth: 2,
  borderColor: '#C28B2C',
},

textoContexto: {
  fontSize: 15,
  color: '#3A1F0B',
  lineHeight: 21,
  marginBottom: 6,
  fontWeight: '600',
},

textoInstrucao: {
  fontSize: 16,
  color: '#7A1111',
  lineHeight: 22,
  marginTop: 6,
  fontWeight: '900',
},

opcaoContainer: {
  transitionDuration: '0.2s',
  flexDirection: 'row',
  cursor: 'pointer',
  alignItems: 'center',
  backgroundColor: '#FFF8DC',
  marginBottom: 14,
  paddingVertical: 14,
  paddingHorizontal: 12,
  borderRadius: 14,
  borderWidth: 3,
  borderColor: '#C28B2C',
  elevation: 4,
},

circuloColorido: {
  width: 32,
  height: 32,
  borderRadius: 16,
  marginRight: 15,
  borderWidth: 2,
  borderColor: '#3A1F0B',
},

opcaoTexto: {
  fontSize: 18,
  fontWeight: '700',
  color: '#3A1F0B',
},

visorStatus: {
  backgroundColor: '#111',
  marginHorizontal: 18,
  padding: 16,
  alignItems: 'center',
  borderRadius: 10,
  borderWidth: 4,
  borderColor: '#3A3A3A',
},

textoVisorStatus: {
  color: '#39FF14',
  fontWeight: '900',
  fontSize: 20,
  letterSpacing: 2,
  textShadowColor: '#39FF14',
  textShadowRadius: 8,
},

footerInfo: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 22,
  paddingTop: 18,
},

infoText: {
  fontSize: 18,
  fontWeight: '900',
  color: '#3A1F0B',
},
  // Estilos do Menu
  containerMenu: {
  flex: 1,
  backgroundColor: '#F2D27B',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},

imagemLeao: {
  width: 340,
  height: 340,
  resizeMode: 'contain',

  tintColor: '#111',

  opacity: 1,

  marginTop: 0,
  marginBottom: -40,
},

faixaVermelhaMenu: {
  backgroundColor: '#B22222',
  width: '100%',
  paddingVertical: 28,
  position: 'absolute',
  top: 0,
  alignItems: 'center',
  borderBottomWidth: 5,
  borderBottomColor: '#7A1111',
},

logoPenseBem: {
  color: '#FFF3C4',
  fontSize: 38,
  fontWeight: '900',
  letterSpacing: 5,
  textShadowColor: '#000',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 2,
},

tituloDisneyMenu: {
  fontSize: 30,
  fontWeight: '900',
  color: '#3A1F0B',
  marginTop: 90,
  marginBottom: 20,
  textAlign: 'center',
},

visorDigitalMenu: {
  backgroundColor: '#111',
  paddingVertical: 25,
  paddingHorizontal: 20,
  width: '90%',
  marginVertical: 25,
  borderRadius: 12,
  borderWidth: 4,
  borderColor: '#3A3A3A',
},

textoVisorMenu: {
  color: '#39FF14',
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 'bold',
  letterSpacing: 1,
},

botaoStart: {
  backgroundColor: '#C62828',

  width: 220,
  height: 220,

  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: 110,

  borderWidth: 6,
  borderColor: '#7A1111',

  shadowColor: '#000',
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.5,
  shadowRadius: 10,

  elevation: 15,
},

textoBotaoStart: {
  color: '#FFF3C4',
  fontWeight: '900',
  fontSize: 34,
  letterSpacing: 3,
  textAlign: 'center',
  textTransform: 'uppercase',
},

rodapeMenu: {
  position: 'absolute',
  bottom: 20,
  color: '#4A2C12',
  fontSize: 12,
  fontWeight: 'bold',
},
  // Estilos do Fim
containerFinal: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  width: '100%',
  height: '100%',
},

fraseFinal: {
  color: '#FFF3C4',
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 18,
  textAlign: 'center',

  textShadowColor: '#000',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 5,
},
  
tituloFinal: {
  fontSize: 42,
  color: '#FFE8B0',

  fontWeight: '900',
  marginBottom: 20,

  textShadowColor: '#000',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 8,
},
  
pontosFinal: { 
  color: '#00FF00',
  fontSize: 28,
  fontWeight: '900',
  marginBottom: 40,
  textShadowColor: '#00FF00',
  textShadowRadius: 10,
},

botaoGeral: {
  backgroundColor: '#C62828',

  width: 240,
  height: 90,

  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: 45,

  borderWidth: 5,
  borderColor: '#7A1111',

  shadowColor: '#000',
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.45,
  shadowRadius: 8,

  elevation: 12,
},

textoBotaoGeral: {
  color: '#FFF3C4',
  fontWeight: '900',
  fontSize: 22,
  letterSpacing: 1,
  textAlign: 'center',
},
inputCodigo: {
  backgroundColor: '#FFF8DC',
  width: 220,
  height: 60,
  borderRadius: 10,
  borderWidth: 4,
  borderColor: '#7A1111',
  textAlign: 'center',
  fontSize: 28,
  fontWeight: '900',
  color: '#3A1F0B',
  marginBottom: 15,
},

erroCodigo: {
  color: '#B22222',
  fontSize: 18,
  fontWeight: '900',
  marginBottom: 15,
},

});