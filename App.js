import React, {useState} from 'react';
import {Text, View, FlatList } from 'react-native';
import styles from './style';

import ContatoInput from './components/ContatoInput';
//import ContatoItem from './components/ContatoItem';

export default function App() {
  const [contatos, setContatos] = useState ([]);

  const [contContatos, setcontContatos] = useState(10);

      const addContato = (nome, telefone) => {
          console.log("Contato-Nome: " + nome);
          console.log("Contato-Telefone: " + telefone);
          setContatos (contatos => {
          console.log (contatos);
          setcontContatos(contContatos + 2);
      return [
        {
          key: contContatos.toString(),
          value: {nome: nome, telefone: telefone}
        }, 
        ...contatos
      ];
    });

  }

  const removerContato = (keyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter(contato => contato.key !== keyASerRemovida);
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>Cadastre um nome e um telefone!</Text>
      </View>
      <ContatoInput 
        onaddContato={addContato}
      />
      <FlatList 
        data={contatos}
        renderItem={
          contato => (
            <ContatoItem 
              contato={contato.item.value}
              chave={contato.item.key}
              onDelete={removerContato}
            />
          )
        }
      />
    </View>
  );
}