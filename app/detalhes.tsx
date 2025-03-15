import { styles } from "../estilos/main";
import { Contato } from "../services/contatos";
import { View, Text } from "react-native";

const Detalhes : React.FC<Contato> = (contato) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{contato.nome}</Text>
            <Text style={styles.text}>{contato.email}</Text>
            <Text style={styles.text}>{contato.telefone}</Text>
            <Text style={styles.text}>{contato.endereco}</Text>
        </View>
    )
}