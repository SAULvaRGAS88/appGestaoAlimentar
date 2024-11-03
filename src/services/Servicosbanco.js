import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./FireBaseConfig";

/** Função para adicionar dados à coleção HistoricoAlimentar*/
export const adicionarHistoricoAlimentar = async (textTratado) => {
    const { alimento, calorias, data, hora } = textTratado;
    try {
        const docRef = await addDoc(collection(db, "historicoAlimentar"), {
            alimento,
            calorias,
            data,
            hora,
        });
        console.log("Documento adicionado com ID: ", docRef.id);
    } catch (e) {
        console.error("Erro ao adicionar documento: ", e);
    }
}

/** Função para buscar dados da coleção HistoricoAlimentar*/
export const getHistoricoAlimentar = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "historicoAlimentar"));
        const historicoArray = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return historicoArray;
    } catch (err) {
        console.error('Erro ao buscar dados:', err);
        return null;
    }
}