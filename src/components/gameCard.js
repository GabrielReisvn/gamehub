//Etapa 4; dados  dos jogos!!;
// ==============================
// reutilizando o componente em 2 telas diferentes

import { View, Text, Image, Pressable, StyleSheet} from "react-native";

import { useRouter } from "expo-router";

import { cores } from "../data/tema";
import { jogo } from "../data/jogos";

export default function gamecard(jogos){
    const router = useRouter();
    return(
        <Pressable 
        style={styles.card}
        onPress={() => router.push(`/jogos/${jogo.id}`)}
        >
        
            <Image source={jogo.imagem} style={styles.imagem}/>
            <view style={styles.info}>
                <text style={styles.nome} numberOfLines={1}>
                    {jogo.nome}
                </text>
                <text style={styles.genero}>{jogo.genero} </text>
                <text style={styles.nota}>⭐ {jogo.genero}</text>
            </view>
        
        </Pressable>
    )
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.fundoCard,
    borderRadius: 12,
    overflow: "hidden",
    width: 158,
    marginRight: 12,
    borderWidth: 1,
    borderColor: cores.borda,
  },
  imagem: {
    width:"100%",
    height: 110,
  },
  info: {
    padding: 10,
  },
  nome: {
    color: cores.textoPrincipal,
    fontSize: 14,
    fonrWeight: "Bold",
  },
  genero: {
    color: cores.textoSecundario,
    fontSize: 12,
    marginTop: 2,
  },
  nota: {
    color: cores.verde,
    fontSize: 12,
    marginTop: 4,
    fontWeight: "600",
  }
});