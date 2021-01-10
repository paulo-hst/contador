import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [ count, setCount ] = useState(0)

  // Função - exemplo 1
  const counter = () => {
    setCount(count + 1)
  }

  // Função - exemplo 2
  function reset(){
    setCount(0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleElement}>Contador</Text>

      <TouchableOpacity style={styles.buttonElement} onPress={ counter }>
        <Text style={styles.buttonTextElement}>Clique Aqui!</Text>  
      </TouchableOpacity>

      <Text style={styles.textElement}>Valor: {count} </Text>
      
      <TouchableOpacity style={styles.resetElement} onPress={ reset }>
        <Text style={styles.buttonTextElement}>Resetar</Text>  
      </TouchableOpacity>
 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleElement: {
    fontSize: 80,
    top: -40,
    fontWeight: 'bold',
    color: 'white',
  },

  buttonElement: {
    width: '50%',
    backgroundColor: '#00BFFF',
    borderRadius: 5,
    padding: 10,
    marginTop: 30,

    justifyContent: 'center',
  },

  buttonTextElement: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  textElement: {
    fontSize: 40,
    marginTop: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  

  resetElement: {
    width: '50%',
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginTop: 30,

    justifyContent: 'center',
  },

});
