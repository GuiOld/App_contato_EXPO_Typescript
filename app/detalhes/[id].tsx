import { styles } from "../../estilos/main";
import { Contato, getContatoById } from "../../services/contatos";
import { View, Text, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

const Detalhes : React.FC = () => {
    const { id } = useLocalSearchParams();
    const [contato, setContato] = useState<Contato | null>(null);

    useEffect(() => {
        console.log(id);
        const carregarContato = async () => {
            const meucontato = await getContatoById(id.toString());
                setContato(meucontato);
                
        }
        carregarContato();
    }, []);

    return(
        <View style={styles.container}>
            {(contato) ? (
            <>
                <Text style={styles.text}>{contato!.nome}</Text>
                <Text style={styles.text}>{contato!.email}</Text>
                <Text style={styles.text}>{contato!.telefone}</Text>
                <Text style={styles.text}>{contato!.endereco}</Text>
            </>
         ): <ActivityIndicator size="large" color="purple" />}
         </View>
    );
}

export default Detalhes;