import { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('menu');
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [tentativas, setTentativas] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mensagem, setMensagem] = useState("ESCOLHA UMA OPÇÃO");

  const perguntas = [
  { pergunta: "Quem é o pai de Simba?", opcoes: ["Scar", "Mufasa", "Zazu", "Timon"], respostaCorreta: 1 },
  { pergunta: "Quem é o tio invejoso de Simba?", opcoes: ["Pumba", "Scar", "Rafiki", "Mufasa"], respostaCorreta: 1 },
  { pergunta: "Qual animal é o Timão?", opcoes: ["Leão", "Suricato", "Javali", "Macaco"], respostaCorreta: 1 },
  { pergunta: "Qual animal é o Pumba?", opcoes: ["Rinoceronte", "Javali", "Elefante", "Hiena"], respostaCorreta: 1 },
  { pergunta: "Qual é o lema de Timão e Pumba?", opcoes: ["Vida Longa ao Rei", "Hakuna Matata", "Rei da Selva", "Ciclo da Vida"], respostaCorreta: 1 },

  { pergunta: "Quem encontra Simba após ele fugir?", opcoes: ["Zazu e Nala", "Timão e Pumba", "Scar e as hienas", "Mufasa e Rafiki"], respostaCorreta: 1 },
  { pergunta: "Quem é a amiga de infância de Simba?", opcoes: ["Sarabi", "Nala", "Shenzi", "Kiara"], respostaCorreta: 1 },
  { pergunta: "Quem é o conselheiro real?", opcoes: ["Zazu", "Rafiki", "Pumba", "Scar"], respostaCorreta: 0 },
  { pergunta: "Quem é o sábio que guia Simba?", opcoes: ["Rafiki", "Zazu", "Timon", "Mufasa"], respostaCorreta: 0 },
  { pergunta: "Qual animal é o Rafiki?", opcoes: ["Mandril", "Leão", "Suricato", "Hiena"], respostaCorreta: 0 },

  { pergunta: "Onde os leões vivem no filme?", opcoes: ["Terra do Nunca", "Pedra do Reino", "Castelo Real", "Ilha Selvagem"], respostaCorreta: 1 },
  { pergunta: "O que Simba deveria se tornar?", opcoes: ["Caçador", "Rei", "Conselheiro", "Guardião"], respostaCorreta: 1 },
  { pergunta: "Quem causa a morte de Mufasa?", opcoes: ["Nala", "Scar", "Zazu", "Pumba"], respostaCorreta: 1 },
  { pergunta: "Em que cena Mufasa morre?", opcoes: ["Tempestade", "Debandada de gnus", "Luta final", "Caçada"], respostaCorreta: 1 },
  { pergunta: "Quem culpa Simba pela morte de Mufasa?", opcoes: ["Scar", "Nala", "Rafiki", "Zazu"], respostaCorreta: 0 },

  { pergunta: "Quais animais ajudam Scar?", opcoes: ["Girafas", "Hienas", "Elefantes", "Zebras"], respostaCorreta: 1 },
  { pergunta: "Quem é a mãe de Simba?", opcoes: ["Sarabi", "Nala", "Shenzi", "Kiara"], respostaCorreta: 0 },
  { pergunta: "Qual música fala sobre viver sem preocupações?", opcoes: ["Circle of Life", "Hakuna Matata", "Be Prepared", "Can You Feel the Love Tonight"], respostaCorreta: 1 },
  { pergunta: "Qual música abre o filme?", opcoes: ["Hakuna Matata", "Circle of Life", "Be Prepared", "I Just Can't Wait to Be King"], respostaCorreta: 1 },
  { pergunta: "Quem canta sobre querer ser rei?", opcoes: ["Simba", "Scar", "Mufasa", "Pumba"], respostaCorreta: 0 },

  { pergunta: "Quem reencontra Simba adulto?", opcoes: ["Nala", "Scar", "Zazu", "Sarabi"], respostaCorreta: 0 },
  { pergunta: "O que Nala pede para Simba fazer?", opcoes: ["Fugir", "Voltar ao reino", "Virar hiena", "Esquecer o passado"], respostaCorreta: 1 },
  { pergunta: "Quem aparece para Simba nas nuvens?", opcoes: ["Scar", "Mufasa", "Zazu", "Timão"], respostaCorreta: 1 },
  { pergunta: "Qual frase Mufasa diz para Simba lembrar?", opcoes: ["Corra para longe", "Lembre-se de quem você é", "Hakuna Matata", "Nunca volte"], respostaCorreta: 1 },
  { pergunta: "Contra quem Simba luta no final?", opcoes: ["Pumba", "Scar", "Zazu", "Rafiki"], respostaCorreta: 1 },

  { pergunta: "O que acontece com Scar no final?", opcoes: ["Vira rei", "Foge com Simba", "É atacado pelas hienas", "Casa com Nala"], respostaCorreta: 2 },
  { pergunta: "O que a Pedra do Reino simboliza?", opcoes: ["O trono dos leões", "Uma caverna comum", "A casa das hienas", "Um brinquedo"], respostaCorreta: 0 },
  { pergunta: "Qual tema principal do filme?", opcoes: ["Vingança apenas", "Ciclo da vida", "Corrida de animais", "Viagem espacial"], respostaCorreta: 1 },
  { pergunta: "Quem se torna rei ao final?", opcoes: ["Scar", "Simba", "Pumba", "Rafiki"], respostaCorreta: 1 },
  { pergunta: "Qual é o nome do filme usado no quiz?", opcoes: ["Aladdin", "O Rei Leão", "Tarzan", "Mulan"], respostaCorreta: 1 },
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
        <Image
  source={require('../assets/assets/leao.png')}
  style={styles.imagemLeao}
/>
         <Text style={styles.tituloDisneyMenu}>DISNEY - O REI LEÃO</Text>
        <View style={styles.visorDigitalMenu}>
          <Text style={styles.textoVisorMenu}>PRONTO PARA O JOGO?</Text>
        </View>
        <TouchableOpacity style={styles.botaoStart} onPress={() => setTelaAtual('quiz')}>
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
        <Text style={styles.progText}>PROGRAMA {indicePergunta + 1}</Text>
        <Text style={styles.pergunta}>{perguntas[indicePergunta].pergunta}</Text>
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
  fontSize: 22,
  fontWeight: '900',
  color: '#3A1F0B',
  marginBottom: 25,
  lineHeight: 28,
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

});